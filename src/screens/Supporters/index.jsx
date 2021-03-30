import {
  Avatar,
  Backdrop,
  Box,
  CircularProgress,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import PersonIcon from "@material-ui/icons/Person";
import { getSupporters } from "../../data/supporters";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  title: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  supporter: {
    maxWidth: 500,
    margin: theme.spacing(0, 2, 2, 0),
  },
  avatar: {
    backgroundColor: deepPurple[500],
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export const Supporters = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [supporters, setSupporters] = useState([]);
  const [isLoading, handleLoading] = useState(true);

  useEffect(() => {
    getSupporters()
      .then(({ data }) => setSupporters(data))
      .finally(() => handleLoading(false));
  }, []);

  return (
    <Container maxWidth={false}>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Typography variant="h5" className={classes.title}>
        <Trans i18nKey="supportersTitle">
          Nosso agradecimento aos apoiadores:
        </Trans>
      </Typography>
      <List className={classes.root}>
        {supporters.map((s) => (
          <Box boxShadow={1} className={classes.supporter}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon color="inherit" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={s[0]} secondary={s[1]} />
            </ListItem>
          </Box>
        ))}
      </List>
    </Container>
  );
};
