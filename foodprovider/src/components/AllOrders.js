import React from "react";
import Paper from "@material-ui/core/Paper";

const AllOrders = props => {
  const { mainText } = styles;

  const OrderItem = {
    item: {
      ingredients: [
        {
          id: 1,
          name: "salami",
          price: 1.5
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
      ],
      size: {
        id: 2,
        name: "średnia",
        price: 5,
        size: 32
      },
      thickness: true
    },
    userData: {
      address: "testowy adres",
      email: "email@email.com",
      phone: "123123123"
    }
  };
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
  }
};

export default AllOrders;
