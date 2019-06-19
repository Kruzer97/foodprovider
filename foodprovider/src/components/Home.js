import React from "react";
import Paper from "@material-ui/core/Paper";
import Pizza from "../images/PizzaHome.jpg";

const Home = props => {
  const { mainText, paperStyle } = styles;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "strech" }}>
      <img style={{ width: "100%" }} alt="Pizza" src={Pizza} />
      <div>
        <p style={mainText}>Najlepsza pizza w mieście!</p>;
      </div>
      <Paper style={paperStyle}>
        <h3 style={{ fontFamily: "Comic Sans MS", fontStyle: "normal" }}>
          Zamawiając małą pizze płacisz tylko za składniki!
        </h3>
      </Paper>
      <Paper style={paperStyle}>
        <h3 style={{ fontFamily: "Comic Sans MS", fontStyle: "normal" }}>
          Tylko u nas masz wybór grubości ciasta!
        </h3>
      </Paper>
      <Paper style={paperStyle}>
        <h3 style={{ fontFamily: "Comic Sans MS", fontStyle: "normal" }}>
          Dostawa na terenie całego miasta!
        </h3>
      </Paper>
    </div>
  );
};

const styles = {
  mainText: {
    fontSize: 50,
    color: "#3f51b5",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 30,
    marginBottom: 15
  },
  paperStyle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 25,
    padding: 25,
    width: 500,
    alignSelf: "center"
  }
};

export default Home;
