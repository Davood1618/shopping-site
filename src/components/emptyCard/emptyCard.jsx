import React from "react";
import { BsBasket3 } from "react-icons/bs";
import "./emptyCard.css";

export default function emptyCard() {
  return (
    <>
      <div className="mainEmptyCardWrapper">
        <BsBasket3 className="icon" />
        <p className="emptyCardText">your basket is empty yet :) </p>
        
      </div>
    </>
  );
}
