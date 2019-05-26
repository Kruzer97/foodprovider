import React from "react";
import Paper from "@material-ui/core/Paper";

const Contact = props => {
  const { phoneNumberText, phoneNumberContainer, openHoursDayText } = styles;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "strech" }}>
      <div style={phoneNumberContainer}>
        <p style={phoneNumberText}>tel. 606 606 606</p>
      </div>
      <Paper
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 20,
          padding: 25,
          width: 300,
          alignSelf: "center"
        }}
      >
        <p style={{}}>Lokal otwarty w godzinach:</p>
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
      </Paper>
    </div>
  );
};

const styles = {
  phoneNumberContainer: {
    backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    boxShadow: "0 4px 2px 0px gray",
    display: "flex"
  },
  phoneNumberText: {
    fontSize: 50,
    color: "red"
  },
  openHoursDayText: {
    margin: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250
  }
};

export default Contact;
