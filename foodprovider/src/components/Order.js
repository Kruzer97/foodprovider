import React from "react";
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

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [sizes, setSizes] = React.useState([
    {
      id: 1,
      name: "mała",
      size: 26,
      price: 0
    },
    {
      id: 2,
      name: "średnia",
      size: 32,
      price: 5
    },
    {
      id: 3,
      name: "duża",
      size: 42,
      price: 10
    }
  ]);
  const [selectedSize, setSelectedSize] = React.useState({
    id: 2,
    name: "średnia",
    size: 32,
    price: 5
  });
  const [ingredients, setIngredients] = React.useState([
    {
      id: 1,
      name: "salami",
      price: 1.5
    },
    {
      id: 2,
      name: "ser",
      price: 1
    },
    {
      id: 3,
      name: "boczek",
      price: 2.5
    },
    {
      id: 4,
      name: "pomidor",
      price: 0.5
    },
    {
      id: 5,
      name: "pieczarki",
      price: 0.5
    }
  ]);
  const [firstIngredient, setFirstIngredient] = React.useState([]);
  const [secondIngredient, setSecondIngredient] = React.useState([]);
  const [thirdIngredient, setThirdIngredient] = React.useState([]);
  const [isThick, setIsThick] = React.useState(false);

  const onThicknessChangeHandler = () => {
    setIsThick(!isThick);
    console.log(isThick);
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
  const getOrderPrice = () => {
    var firstIngredientPrice = firstIngredient.price === undefined ? 0 : firstIngredient.price;
    var secondIngredientPrice = secondIngredient.price === undefined ? 0 : secondIngredient.price;
    var thirdIngredientPrice = thirdIngredient.price === undefined ? 0 : thirdIngredient.price;
    return (
      selectedSize.price +
      (isThick ? 10 : 0) +
      firstIngredientPrice +
      secondIngredientPrice +
      thirdIngredientPrice
    );
  };
  return (
    <div style={{ margin: "auto", display: "flex", flexDirection: "column" }}>
      <Paper style={{ width: 500, display: "flex", alignItems: "center", alignSelf: "center" }}>
        <form
          className={classes.root}
          autoComplete="off"
          style={{ display: "flex", flexDirection: "column", width: 250, alignItems: "center" }}
        >
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="size-simple">Rozmiar</InputLabel>
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
          <FormControl className={classes.formControl}>
            <FormControlLabel
              value="top"
              control={<Switch color="primary" />}
              label="Grube ciasto?"
              labelPlacement="start"
              onChange={onThicknessChangeHandler}
              checked={isThick}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="ingredient-simple">Składnik 1</InputLabel>
            <Select
              value={firstIngredient.id}
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
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="ingredient-simple">Składnik 2</InputLabel>
            <Select
              value={secondIngredient.id}
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
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="ingredient-simple">Składnik 3</InputLabel>
            <Select
              value={thirdIngredient.id}
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
        </form>
        <div>
          <p>Wartość zamówienia: {getOrderPrice()}</p>
        </div>
      </Paper>
    </div>
  );
}
