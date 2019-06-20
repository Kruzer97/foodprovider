import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Ordering from "./Ordering";
import firebase from "firebase";
import Background from "../images/MainBackground.jpg";

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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function SimpleSelect() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const [sizes, setSizes] = React.useState([]);
  const [selectedSize, setSelectedSize] = React.useState({
    id: 2,
    name: "średnia",
    size: 32,
    price: 5
  });
  const [ingredients, setIngredients] = React.useState([]);
  const [firstIngredient, setFirstIngredient] = React.useState(null);
  const [secondIngredient, setSecondIngredient] = React.useState(null);
  const [thirdIngredient, setThirdIngredient] = React.useState(null);
  const [isThick, setIsThick] = React.useState(false);

  const onThicknessChangeHandler = () => {
    setIsThick(!isThick);
  };
  const handleChange = (event, ingredientOrder) => {
    switch (ingredientOrder) {
      case 1:
        setFirstIngredient(ingredients.find(item => item.id == event.target.value));
        break;
      case 2:
        setSecondIngredient(ingredients.find(item => item.id == event.target.value));
        break;
      case 3:
        setThirdIngredient(ingredients.find(item => item.id == event.target.value));
        break;
    }
  };
  const handleSizeChange = event => {
    setSelectedSize(sizes.find(item => item.id == event.target.value));
  };
  const handleFirstIngredientCancel = event => {
    setFirstIngredient(null);
  };
  const handleSecondIngredientCancel = event => {
    setSecondIngredient(null);
  };
  const handleThirdIngredientCancel = event => {
    setThirdIngredient(null);
  };
  const orderClickHandler = () => {
    setIsOpen(!isOpen);
  };
  const getOrderPrice = () => {
    const basePrice = 10;
    var firstIngredientPrice = firstIngredient ? firstIngredient.price : 0;
    var secondIngredientPrice = secondIngredient ? secondIngredient.price : 0;
    var thirdIngredientPrice = thirdIngredient ? thirdIngredient.price : 0;
    return (
      basePrice +
      selectedSize.price +
      (isThick ? 10 : 0) +
      firstIngredientPrice +
      secondIngredientPrice +
      thirdIngredientPrice
    );
  };

  // Get a reference to the database service
  useEffect(() => {
    const config = {
      apiKey: "AIzaSyC5LbFjXjISF0W_kMpmQliiOB5RaIg8buo",
      projectId: "test-992a4",
      databaseURL: "https://test-992a4.firebaseio.com/",
      authDomain: "test-992a4.firebaseio.com"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    var database = firebase.database();
    var ingredientsRef = database.ref("/ingredients");
    ingredientsRef.on("value", snapshot => {
      const state = snapshot.val();
      setIngredients(state);
    });
    var sizesRef = database.ref("/sizes");
    sizesRef.on("value", snapshot => {
      const state = snapshot.val();
      setSizes(state);
    });
  });
  const cancelOrderHandler = () => {
    orderClickHandler();
  };
  const confirmOrderHandler = address => {
    console.log(address);
    orderClickHandler();
    var database = firebase.database();
    var newOrderKey = firebase
      .database()
      .ref()
      .child("orders")
      .push().key;
    database.ref("/orders/" + newOrderKey).update({
      item: {
        ingredients: [firstIngredient, secondIngredient, thirdIngredient],
        thickness: isThick,
        size: selectedSize
      },
      userData: { ...address }
    });
  };
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${Background})`,
        width: "100%",
        height: "100%"
      }}
    >
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={orderClickHandler}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Potwierdź zamówienie"}</DialogTitle>
        <DialogContent style={{ minWidth: "100%" }}>
          <Ordering
            ingredients={[firstIngredient, secondIngredient, thirdIngredient]}
            thickness={isThick}
            size={selectedSize}
            confirmHandler={confirmOrderHandler}
            orderPrice={getOrderPrice()}
            cancelHandler={cancelOrderHandler}
          />
        </DialogContent>
      </Dialog>
      <Paper
        style={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
          flexDirection: "column",
          paddingTop: 30,
          marginTop: 30
        }}
      >
        <form
          className={classes.root}
          autoComplete="off"
          style={{ display: "flex", flexDirection: "column", width: 250, alignItems: "center" }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.label} htmlFor="size-simple">
                Rozmiar
              </InputLabel>
              <Select
                value={selectedSize.id}
                onChange={event => handleSizeChange(event)}
                inputProps={{
                  name: "size",
                  id: "size-simple"
                }}
              >
                {sizes.map(item => {
                  return (
                    <MenuItem value={item.id} key={item.id}>
                      {item.name}({item.size} cm)
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <div />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FormControl className={classes.formControl}>
              <FormControlLabel
                className={classes.label}
                value="top"
                control={<Switch color="primary" />}
                label="Grube ciasto?"
                labelPlacement="start"
                onChange={onThicknessChangeHandler}
                checked={isThick}
              />
            </FormControl>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="ingredient-simple">Składnik 1</InputLabel>
              <Select
                value={firstIngredient ? firstIngredient.id : 0}
                onChange={event => handleChange(event, 1)}
                inputProps={{
                  name: "ingredient",
                  id: "ingredient-simple"
                }}
              >
                {ingredients.map(item => {
                  return (
                    <MenuItem value={item.id} key={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <IconButton
              onClick={handleFirstIngredientCancel}
              className={classes.button}
              aria-label="Cancel"
              color="secondary"
              disabled={firstIngredient == null}
            >
              <CancelIcon />
            </IconButton>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="ingredient-simple">Składnik 2</InputLabel>
              <Select
                value={secondIngredient ? secondIngredient.id : 0}
                onChange={event => handleChange(event, 2)}
                inputProps={{
                  name: "ingredient",
                  id: "ingredient-simple"
                }}
              >
                {ingredients.map(item => {
                  return (
                    <MenuItem value={item.id} key={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <IconButton
              onClick={handleSecondIngredientCancel}
              className={classes.button}
              aria-label="Cancel"
              color="secondary"
              disabled={secondIngredient == null}
            >
              <CancelIcon />
            </IconButton>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="ingredient-simple">Składnik 3</InputLabel>
              <Select
                value={thirdIngredient ? thirdIngredient.id : 0}
                onChange={event => handleChange(event, 3)}
                inputProps={{
                  name: "ingredient",
                  id: "ingredient-simple"
                }}
              >
                {ingredients.map(item => {
                  return (
                    <MenuItem value={item.id} key={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <IconButton
              onClick={handleThirdIngredientCancel}
              className={classes.button}
              aria-label="Cancel"
              color="secondary"
              disabled={thirdIngredient == null}
            >
              <CancelIcon />
            </IconButton>
          </div>
        </form>
        <div style={{ width: "100%" }}>
          <p style={{ textAlign: "right", marginRight: 20, fontSize: 20 }}>
            Wartość zamówienia: <span style={{ color: "green" }}>{getOrderPrice()} PLN</span>
          </p>
        </div>

        <Button
          variant="contained"
          color="primary"
          style={{ display: "flex", alignSelf: "flex-end", marginRight: 20, marginBottom: 30 }}
          onClick={orderClickHandler}
        >
          Zamów
        </Button>
      </Paper>
    </div>
  );
}
