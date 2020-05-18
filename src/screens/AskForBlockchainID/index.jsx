import React, { Component } from "react";
import fingerPrint from "../../assets/finger-print.svg";
import appStore from "../../assets/app-store.svg";
import playStore from "../../assets/play-store.svg";
import { Container, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { HAS_BLOCKCHAINID_STORAGE_KEY } from "../../constants";

class AskForBlockchainID extends Component {
  state = {
    showAppDownload: false,
  };

  render() {
    const { showAppDownload } = this.state;
    return (
      <Container>
        {!showAppDownload && (
          <>
            <img
              src={fingerPrint}
              style={{ display: "block", margin: "auto", marginTop: 40 }}
            />
            <Typography
              variant="body1"
              style={{ marginTop: 40, marginBottom: 40, textAlign: "center" }}
            >
              Para assinar a prescrição médica, você precisa criar uma
              Blockchain ID pelo aplicativo da OriginalMy
            </Typography>

            <Button
              variant="contained"
              size="large"
              color="primary"
              style={{ margin: "auto", display: "block" }}
              onClick={() => {
                this.setState({ showAppDownload: true });
              }}
            >
              Criar Blockchain ID
            </Button>
            <Link to="/patient-data" style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                size="large"
                color="primary"
                style={{ margin: "auto", display: "block", marginTop: 20 }}
                onClick={() => {
                  localStorage.setItem(HAS_BLOCKCHAINID_STORAGE_KEY, true);
                }}
              >
                Já tenho a Blockchain ID
              </Button>
            </Link>
          </>
        )}
        {showAppDownload && (
          <div
            style={{
              display: "block",
              maxWidth: 600,
              margin: "auto",
              marginTop: 10,
            }}
          >
            <Typography
              variant="body1"
              style={{ marginTop: 40, marginBottom: 40, textAlign: "justify" }}
            >
              Para assinar a prescrição médica, você precisa criar uma
              Blockchain ID pelo aplicativo da OriginalMy
            </Typography>
            <img
              src="http://chart.apis.google.com/chart?cht=qr&amp;chs=300x300&amp;chl=https://originalmy.com/app"
              alt="Google Play e App Store"
              style={{ display: "block", margin: "auto" }}
            />
            <p data-i18n="availablestores" style={{ textAlign: "center" }}>
              Disponível na Google Play e App Store.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href="https://play.google.com/store/apps/details?id=com.originalmy.assinardocumentos&amp;pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                target="_blank"
              >
                <img src={playStore} width="200px" class="googleplay" />
              </a>
              <a
                href="https://itunes.apple.com/br/app/assinar-documentos-com-blockchain/id1227793670?mt=8"
                target="_blank"
              >
                <img src={appStore} width="200px" class="applestore" />
              </a>
            </div>
            <Link to="/patient-data" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                style={{ margin: "auto", display: "block", marginTop: 40 }}
                onClick={() => this.onContinue()}
              >
                Continuar
              </Button>
            </Link>
          </div>
        )}
      </Container>
    );
  }
}

export default AskForBlockchainID;
