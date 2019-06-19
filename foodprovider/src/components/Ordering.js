import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const getIngredientsCount = ingredients => {
  if (ingredients) {
    return ingredients.length;
  }
};
const getIngredientsText = ingredients => {
  if (ingredients) {
    if (ingredients.length == 1) {
      return "składnikiem";
    } else {
      return "składnikami";
    }
  }
};

const renderIngredientList = ingredients => {
  if (ingredients && ingredients.length > 0) {
    return ingredients.map(item => {
      if (item) {
        return <li>{item.name}</li>;
      }
    });
  }
};
const Contact = props => {
  const { componentsStyle, ulStyle, dividerStyle } = styles;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "strech" }}>
      <p style={{ fontWeight: "bold", color: "gold" }}>
        <span>
          Pizza z {getIngredientsCount(props.ingredients)} {getIngredientsText(props.ingredients)}:
        </span>
      </p>
      <div style={dividerStyle} />
      <ul style={ulStyle}>{renderIngredientList(props.ingredients)}</ul>
      <div style={dividerStyle} />
      <p style={{ fontWeight: "bold", color: "red" }}>Koszt dostawy: 2zł</p>
      <p>Koszt składników pizzy: 25zł</p>
      <p>Koszty dodatkowe: 2,50zł(grubsze ciasto)</p>
      <p style={{ fontWeight: "bold" }}>SUMA: 29,50zł</p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button variant="contained" color="secondary" style={{ marginRight: 5 }}>
          Anuluj
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: 5 }}
          onClick={() => props.confirmHandler()}
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

export default Contact;
