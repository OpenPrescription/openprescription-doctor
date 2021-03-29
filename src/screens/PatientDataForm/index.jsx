import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Trans, useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import DoctorIdRegisterDialog from "../../components/DoctorIdRegister";
import { getDoctorId, setDoctorId } from "../../helpers/storage";
import SignPrescription from "../../components/SignPrescription";
import PrescriptionForm from "../../components/PrescriptionForm";
import { createPrescription } from "../../data/prescriptions";
import moment from "moment";
import { useUser } from "../../contexts/User";
import { toBase64 } from "../../helpers";
import sha256 from "js-sha256";
import shippingPackage from "./../../assets/shipping-package.svg";
import { validateDoctorId } from "../../data/doctors";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  prescriptionTitle: {
    fontSize: 20,
    color: "#00767A",
    fontWeight: 900,
    textAlign: "center",
    marginBottom: 40,
  },
  alerts: {
    marginBottom: 20,
  },
}));

export default (props) => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(null);
  const [prescriptionStep, setPrescriptionStep] = useState("creation");
  const [openDoctorIdRequest, toggleDoctorIdRequest] = useState(false);
  const [prescription, setPrescription] = useState(false);
  const [prescriptionFile, setPrescriptionFile] = useState(false);
  const [creationResponse, setCreationResponse] = useState("");
  const user = useUser();

  const onValidateDoctorId = (documentId, federalCode) => {
    setDoctorId(`${documentId}-${federalCode}`);
    setPrescription({
      ...prescription,
      doctorId: `${documentId}-${federalCode}`,
    });
    setPrescriptionStep("upload");
  };

  const sendPrescription = async (data) => {
    try {
      const base64File = await toBase64(data.prescriptionFile[0]);
      data.prescriptionFile = base64File;
      data.company = {
        id: user.companyId,
        name: user.companyName,
      };
      data.lang = i18n.language.split("-")[0];
      await createPrescription(data);
      setCreationResponse("success");
      setPrescriptionStep("final-success");
    } catch (error) {
      setCreationResponse("error");
      setPrescriptionFile(null);
      setPrescriptionStep("upload");
      console.error(error);
    }
    window.scrollTo(0, 0);
  };

  const validateDoctor = async (blockchainUser) => {
    return validateDoctorId(
      prescription.doctorId,
      blockchainUser.name,
      blockchainUser.country
    );
  };

  const onPrescriptionSigned = async (blockchainUser) => {
    setLoading(true);
    let doctorValidations;
    try {
      const response = await validateDoctor(blockchainUser);
      const validator = response.data.data;
      doctorValidations = validator.validations;
    } catch (err) {
      setCreationResponse("doctor-invalid");
      setPrescriptionStep("doctorid");
      setLoading(false);
      return;
    }
    await sendPrescription({
      ...prescription,
      doctor: JSON.stringify(blockchainUser),
      validations: doctorValidations,
      expirationDate: moment(prescription.expirationDate).format(
        "YYYY-MM-DD HH:mm:ss"
      ),
    });
    setLoading(false);
  };

  const onSubmitPrescription = async (data) => {
    const doctorId = getDoctorId();
    data.doctorId = doctorId;
    setPrescription(data);
    if (!doctorId || doctorId === "undefined" || doctorId === "null") {
      return setPrescriptionStep("doctorid");
    }
    setPrescriptionStep("upload");
  };

  const toSha256 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsOriginalMy(file);
      reader.onload = (e) => resolve(sha256(e.target.result));
      reader.onerror = (error) => reject(error);
    });

  const onUploadPrescription = async (files) => {
    setLoading(true);
    setCreationResponse(null);
    setPrescriptionFile(files[0]);
    const hash = await toSha256(files[0]);
    setPrescription({
      ...prescription,
      hash,
      prescriptionFile: files,
    });
    setLoading(false);
  };

  const onClickPrescription = () => {
    setCreationResponse(null);
    setPrescriptionStep("sign");
  };

  const onRestart = () => {
    setCreationResponse(null);
    setPrescriptionFile(null);
    setPrescriptionStep("creation");
  };

  return (
    <div className={classes.heroContent}>
      <Container>
        {loading && (
          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
        {creationResponse == "error" && (
          <Alert severity="error" className={classes.alerts}>
            <Trans i18nKey="prescriptionUnkownErrorMessage">
              Could not create prescription. Please, try later.
            </Trans>
          </Alert>
        )}

        {loading && (
          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        )}

        {(prescriptionStep === "creation" || prescriptionStep === "upload") && (
          <PrescriptionForm
            file={prescriptionFile}
            onClickPrescription={onClickPrescription}
            onSubmit={onSubmitPrescription}
            uploadForm={prescriptionStep === "upload"}
            onUploadPrescription={onUploadPrescription}
          />
        )}

        {prescriptionStep === "sign" && (
          <SignPrescription
            prescription={prescription}
            onSigned={onPrescriptionSigned}
          />
        )}

        <DoctorIdRegisterDialog
          open={prescriptionStep == "doctorid"}
          onCancel={() => toggleDoctorIdRequest(false)}
          onSubmit={onValidateDoctorId}
          validationError={creationResponse == "doctor-invalid"}
        />

        {prescriptionStep === "final-success" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "600px",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body2"
              component="p"
              className={classes.prescriptionTitle}
            >
              <Trans i18nKey="prescriptionSent">
                Thank you, your prescription was sent!
              </Trans>
            </Typography>
            <img src={shippingPackage}  style={{ width: 200, height: 400, display: 'block', margin: 'auto' }}/>
            <Button
              variant="contained"
              size="large"
              color="primary"
              style={{ margin: "auto", display: "block", marginTop: 40 }}
              onClick={() => onRestart()}
            >
              <Trans i18nKey="sendNewPrescriptionButton">
                Send new prescription
              </Trans>
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};
