import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Trans, useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Grid } from "@material-ui/core";

export default ({ open, onCancel, onSubmit }) => {
  const { t } = useTranslation();
  const { register, handleSubmit, watch, errors } = useForm();

  const validateDoctorDoctorId = async ({ doctorId, doctorFederalCode }) => {
    if (typeof onSubmit === "function") {
      onSubmit(doctorId, doctorFederalCode);
    }
  };

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-require-medical-id">
        <DialogTitle id="form-dialog-require-medical-id">
          <Trans i18nKey="doctorIdRegisterTitle">Medical ID</Trans>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Trans i18nKey="dialogReqMedIdDescription">
              Please, fill the field below with your Medical ID. We need it to
              validade your credentials with the regulatory body.
            </Trans>
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item md={9} xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="doctorId"
                name="doctorId"
                label={t("doctorId")}
                type="text"
                fullWidth
                inputRef={register({ required: true })}
                error={Boolean(errors.doctorId)}
                required
              />
              {errors.doctorId && (
                <FormHelperText error={true}>
                  <Trans i18nKey="fieldRequired">Field is required</Trans>
                </FormHelperText>
              )}
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                margin="dense"
                id="doctorFederalCode"
                name="doctorFederalCode"
                label={t("doctorFederalCode")}
                type="text"
                fullWidth
                inputRef={register({ required: true, pattern: /\D/i })}
                error={Boolean(errors.doctorFederalCode)}
                required
                inputProps={{
                  maxLength: 2,
                }}
              />
              {errors.doctorFederalCode &&
                errors.doctorFederalCode.type === "required" && (
                  <FormHelperText error={true}>
                    <Trans i18nKey="fieldRequired">Field is required</Trans>
                  </FormHelperText>
                )}
              {errors.doctorFederalCode &&
                errors.doctorFederalCode.type === "pattern" && (
                  <FormHelperText error={true}>
                    <Trans i18nKey="justLettersAllowed">Use only letters</Trans>
                  </FormHelperText>
                )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            <Trans i18nKey="cancelButtonLabel">Cancel</Trans>
          </Button>
          <Button
            type="submit"
            color="primary"
            onClick={handleSubmit(validateDoctorDoctorId)}
          >
            <Trans i18nKey="submitButtonLabel">Submit</Trans>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
