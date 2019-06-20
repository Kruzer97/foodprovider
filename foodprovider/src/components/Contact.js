import React from "react";
import Paper from "@material-ui/core/Paper";
import Location from "../images/Lokalizacja.jpg";

const Contact = props => {
  const { phoneNumberText, phoneNumberContainer, openHoursDayText, paperStyle } = styles;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "strech" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={phoneNumberText}>tel. 606 606 606</p>
      </div>
      <Paper style={paperStyle}>
        <p style={{ fontWeight: "bold" }}>Lokal otwarty w godzinach:</p>
        <p style={openHoursDayText}>
          <span>poniedziałek:</span>
          <span>8:00 - 20:00</span>
        </p>
        <p style={openHoursDayText}>
          <span>wtorek:</span>
          <span> 8:00 - 20:00</span>
        </p>
        <p style={openHoursDayText}>
          <span>środa:</span>
          <span> 8:00 - 20:00</span>
        </p>
        <p style={openHoursDayText}>
          <span>czwartek:</span>
          <span> 8:00 - 20:00</span>
        </p>
        <p style={openHoursDayText}>
          <span>piątek:</span>
          <span> 8:00 - 20:00</span>
        </p>
        <p style={openHoursDayText}>
          <span>sobota:</span>
          <span> 8:00 - 20:00</span>
        </p>
        <p style={openHoursDayText}>
          <span>niedziela:</span>
          <span> nieczynne</span>
        </p>
        <p>
          <img alt="lokalizacja" src={Location} />
        </p>
      </Paper>
    </div>
  );
};

const styles = {
  phoneNumberContainer: {
    backgroundColor: "#3f51b5",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    boxShadow: "0 4px 2px 0px gray",
    display: "flex"
  },
  phoneNumberText: {
    fontSize: 50,
    color: "#3f51b5",
    margin: 10
  },
  openHoursDayText: {
    margin: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250
  },
  paperStyle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 10,
    width: 500,
    alignSelf: "center"
  }
};

export default Contact;
