import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Contact = props => {
  const {
    orderBarContainer,
    orderBarText,
    paperStyle,
    componentsStyle,
    ulStyle,
    dividerStyle
  } = styles;

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
        <div style={dividerStyle} />
        <ul style={ulStyle}>
          <li>
            <p style={componentsStyle}>Szynka</p>
          </li>
          <li>
            <p style={componentsStyle}>Pieczarki</p>
          </li>
          <li>
            <p style={componentsStyle}>Papryka</p>
          </li>
          <li>
            <p style={componentsStyle}>Grubsze ciasto</p>
          </li>
        </ul>
        <div style={dividerStyle} />
        <p style={{ fontWeight: "bold", color: "red" }}>Koszt dostawy: 2zł</p>
        <p>Koszt składników pizzy: 25zł</p>
        <p>Koszty dodatkowe: 2,50zł(grubsze ciasto)</p>
        <p style={{ fontWeight: "bold" }}>SUMA: 29,50zł</p>
        <Button variant="contained" color="primary">
          Zamów
        </Button>
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
  },
  componentsStyle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: 4
  },
  ulStyle: {
    display: "block",
    listStyleType: "circle",
    margiTop: 0,
    marginBottom: 10,
    marginLeft: 1,
    marginRight: 1,
    paddingLeft: 20
  },
  dividerStyle: {
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    display: "flex",
    marginHorizontal: 10,
    alignSelf: "stretch"
  }
};

export default Contact;
