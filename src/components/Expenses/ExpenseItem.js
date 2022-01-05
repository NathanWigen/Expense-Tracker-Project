import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'

export default function ExpenseItem(props) {
  // function clickHandler() {
  // console.log("clicked");
  // }

  // Fat Arrow function
  // const clickHandler = () => {
  //   setTitle('Updated')
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
  );
}
