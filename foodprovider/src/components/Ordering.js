import React from "react";
import Paper from "@material-ui/core/Paper";

const Contact = props => {
  const { orderBarContainer, orderBarText, paperStyle } = styles;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "strech" }}>
      <div style={orderBarContainer}>
        <p style={orderBarText}>Podsumowanie zamówienia</p>
      </div>
      <Paper style={paperStyle}>
        <p style={{ fontWeight: "bold" }}>Twoje zamówienie:</p>
        <p style={{ fontWeight: "bold", color: "gold" }}>
          <span>Pizza z 3-ema składnikami:</span>
        </p>
        <p>szynka</p>
      </Paper>
    </div>
  );
};

const styles = {
  orderBarContainer: {
    backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    boxShadow: "0 4px 2px 0px gray",
    display: "flex"
  },

  orderBarText: {
    fontSize: 50,
    color: "black"
  },

  paperStyle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 50,
    padding: 25,
    width: 500,
    alignSelf: "center"
  }
};

export default Contact;
