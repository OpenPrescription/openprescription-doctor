import { Button, Paper, Typography } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import React from "react";
import { Trans } from "react-i18next";

export const DonationDisclamer = () => {
  return (
    <Paper elevation={0}>
      <Alert
        severity="warning"
        action={
          <Button
            color="secondary"
            variant="contained"
            component="button"
            onClick={() => {
              window.open("https://apoia.se/open-prescription", "_blank");
            }}
          >
            <Trans i18nKey="donateDisclamerButton">Faça uma doação</Trans>
          </Button>
        }
      >
        <AlertTitle>
          <Trans i18nKey="donateDisclamerTitle">
            Você gosta dessa plataforma?
          </Trans>
        </AlertTitle>{" "}
        <Typography variant="body1">
          <Trans i18nKey="donateDisclamerMessage">
            Ela tem ajudado a salvar a vida de milhares de pessoas, mantendo-as
            seguras em casa. Precisamos agora de sua ajuda.
          </Trans>
        </Typography>
      </Alert>
    </Paper>
  );
};
