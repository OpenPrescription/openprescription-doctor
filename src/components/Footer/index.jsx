import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Trans, useTranslation } from "react-i18next";
import help from '../../assets/help.pdf';
import { HelpOutline } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 64,
    backgroundColor: "#FFF",
    padding: 20,
  },
  p: {
    margin: 0,
  },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    alignItems: 'center',
    ["@media (max-width: 768px)"]: {
      flexDirection: 'column-reverse'
    }
  },
  button: {
    textDecoration: 'none',
    ["@media (max-width: 768px)"]: {
      margin: '10px auto',
      alignSelf: 'end',
    },
  }
}));

const Footer = () => {
  const { t, i18n } = useTranslation();
  const styles = useStyles();
  return (
    <footer className={styles.container}>
      <div className={styles.flexContainer}>
        {/* <p className={styles.p}>OriginalMy. Todos os direitos reservados.</p> */}
        {i18n.language.match(/pt/) && (<a className={styles.button} href={help} target="_blank">
          <Button color="primary" variant="outlined" startIcon={<HelpOutline />}>
            <Trans i18nKey="help">Ajuda</Trans>
          </Button>
        </a>)}
      </div>
    </footer>
  );
};



export default Footer;
