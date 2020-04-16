import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Trans, useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/Auth";
import { Typography } from "@material-ui/core";
// JAVASCRIPT
// -------------------------------------------------------------------

export default () => {
  const [loggedIn, setLoggedIn] = useState(false);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/patient-data" } };
  const { login } = useAuth();

  const onSubmit = ({ companyId, companyName }) => {
    login({ companyId, companyName });
    history.replace(from);
  };

  const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(8, 3, 3, 3),
      //backgroundColor: theme.palette.background.paper,
      height: "calc(100vh - 64px)",
    },
    icon: {
      display: "block",
      margin: "0 auto 20px",
    },
    input: {
      marginBottom: "20px",
    },
    button: {
      display: "block",
      margin: "30px auto 0",
      width: "100%",
    },
    formContainer: {
      display: "block",
      maxWidth: 350,
    },
  }));

  const { container, icon, input, button, formContainer } = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();
  const { t } = useTranslation();

  if (loggedIn) return <Redirect to="/" />;

  return (
    <Container className={container}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={formContainer}>
          <Typography variant="subtitle1" style={{ marginBottom: 20 }}>
            <Trans i18nKey="companyFormTitle">Preencha os campos abaixo para iniciar a prescrição:</Trans>
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="companyName"
            name="companyName"
            label={t("companyNameOrDoctorName")}
            type="text"
            fullWidth
            required
            className={input}
            error={Boolean(errors.companyName)}
            inputProps={{
              ref: register({ required: true }),
            }}
          />
          {errors.companyName && (
            <FormHelperText error={true}>
              <Trans i18nKey="companyNameRequired">
                Document ID is required
              </Trans>
            </FormHelperText>
          )}
          <TextField
            margin="dense"
            id="companyId"
            name="companyId"
            label={t("companyIdOrDocumentId")}
            type="text"
            fullWidth
            required
            error={Boolean(errors.companyId)}
            inputProps={{
              ref: register({ required: true }),
            }}
          />
          {errors.companyId && (
            <FormHelperText error={true}>
              <Trans i18nKey="companyIdRequired">Company ID is required</Trans>
            </FormHelperText>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={button}
          >
            <Trans i18nKey="submitButtonLabel">Submit</Trans>
          </Button>
        </div>
      </form>
    </Container>
  );
};
