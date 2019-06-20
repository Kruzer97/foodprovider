import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    minHeight: 20
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Ordering = props => {
  const deliveryPrice = 2;
  const classes = useStyles();
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [street, setStreet] = useState(null);
  const [number, setNumber] = useState(null);
  const [apartment, setApartment] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [streetError, setStreetError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [apartmentError, setApartmentError] = useState(false);
  const { componentsStyle, ulStyle, dividerStyle } = styles;
  const validateAndSend = () => {
    var isModelValid = true;
    if (email == null || email === "") {
      setEmailError(true);
      var isModelValid = false;
    }
    if (phone == null || phone === "") {
      setPhoneError(true);
      var isModelValid = false;
    }
    if (street == null || street === "") {
      setStreetError(true);
      var isModelValid = false;
    }
    if (number == null || number === "") {
      setNumberError(true);
      var isModelValid = false;
    }
    if (apartment == null || apartment === "") {
      setApartmentError(true);
      var isModelValid = false;
    }
    if (isModelValid) {
      props.confirmHandler({ phone, email, street, number, apartment });
    } else {
      return;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "strech" }}>
      <p style={{ fontWeight: "bold" }}>Kost pizzy: {props.orderPrice} PLN</p>
      <p style={{ fontWeight: "bold", color: "red" }}>Koszt dostawy: {deliveryPrice} PLN</p>
      <div style={dividerStyle} />
      <p style={{ fontWeight: "bold", fontSize: 22, color: "green" }}>
        SUMA: {props.orderPrice + deliveryPrice} PLN
      </p>
      <div style={dividerStyle} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          error={phoneError}
          id="outlined-number"
          label="Telefon"
          value={phone}
          type="text"
          name="Telefon"
          className={classes.textField}
          onChange={event => {
            setPhone(event.target.value);
            setPhoneError(false);
          }}
          margin="normal"
          variant="outlined"
        />
        <TextField
          error={emailError}
          id="outlined-email-input"
          label="Email"
          value={email}
          className={classes.textField}
          onChange={event => {
            setEmail(event.target.value);
            setEmailError(false);
          }}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <div style={{ display: "flex", flexDirection: "row", alignItems: "space-between" }}>
          <TextField
            error={streetError}
            style={{ marginRight: 10 }}
            id="outlined-email-input"
            label="Ulica"
            value={street}
            className={classes.textField}
            onChange={event => {
              setStreet(event.target.value);
              setStreetError(false);
            }}
            type="text"
            name="street"
            autoComplete="address-line1"
            margin="normal"
            variant="outlined"
          />
          <TextField
            error={numberError}
            style={{ marginRight: 10 }}
            id="outlined-email-input"
            label="Nr domu"
            value={number}
            className={classes.textField}
            onChange={event => {
              setNumber(event.target.value);
              setNumberError(false);
            }}
            type="text"
            name="street"
            autoComplete="address-line2"
            margin="normal"
            variant="outlined"
          />
          <TextField
            error={apartmentError}
            id="outlined-email-input"
            label="Nr mieszkania"
            value={apartment}
            className={classes.textField}
            onChange={event => {
              setApartment(event.target.value);
              setApartmentError(false);
            }}
            type="text"
            name="street"
            autoComplete="address-line2"
            margin="normal"
            variant="outlined"
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: 30, alignSelf: "flex-end" }}>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: 5 }}
          onClick={() => props.cancelHandler()}
        >
          Anuluj
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: 5 }}
          onClick={() => validateAndSend()}
        >
          Potwierdź
        </Button>
      </div>
    </div>
  );
};

const styles = {
  orderBarContainer: {
    backgroundColor: "#3f51b5",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    boxShadow: "0 4px 2px 0px gray",
    display: "flex"
  },

  orderBarText: {
    fontSize: 50,
    color: "red"
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

export default Ordering;
