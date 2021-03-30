import { Button, Paper, Typography } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import React from "react";

export const DonationDisclamer = () => {
  return (
    <Paper elevation={0}>
      <Alert
        severity="warning"
        action={
          <Button color="secondary" variant="contained" component="button">
            Faça uma doação
          </Button>
        }
      >
        <AlertTitle>Você gosta dessa plataforma?</AlertTitle>{" "}
        <Typography variant="body1">
          Ela tem ajudado a salvar a vida de milhares de pessoas principalmente neste momento de pandemia. Precisamos agora de sua ajuda para mantê-la funcionando
        </Typography>
      </Alert>
    </Paper>
  );
};
