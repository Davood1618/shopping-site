import React, { useContext, useState, useEffect } from "react";
import DataContext from "../Context/dataContext";

export default function Card() {
  const cardData = useContext(DataContext);
  useEffect(() => {
    cardData.cardContent.length !== 0
      ? cardData.setShowEmpt(false)
      : cardData.setShowEmpt(true);
    cardData.setNavCardCo(cardData.cardContent.length);
  }, [cardData.cardContent]);

  const clickHandler = (product) => {
    // show toast
    cardData.setIsShowToast(true);
    setTimeout(() => {
      cardData.setIsShowToast(false);
    }, 1000);

    // passing product to sidebar
    const checkrepetition = cardData.cardContent.some(
      (checkP) => checkP.name === product.name
    );

    let newUserCard;

    if (!checkrepetition) {
      newUserCard = {
        id: cardData.cardContent.length + 1,
        title: product.title,
        imgUrl: product.imgUrl,
        name: product.name,
        price: product.price,
        number: 1,
      };

      cardData.setCardContent((prev) => [...prev, newUserCard]);
    } else {
      const newerUC = [...cardData.cardContent];
      newerUC.some(
        (checkpr) => checkpr.name === product.name && checkpr.number++
      );
    }
  };
  return (
    <>
      {cardData.allProducts.map((productsection) => (
        <>
          <h1 className="text-center">
            <spn className="badge bg-primary text-whaite">
              {productsection.title}
            </spn>
          </h1>
          {productsection.info.map((product) => (
            <div className="card m-4 shadow-lg" style={{ width: "12rem" }}>
              <img
                className="card-img-top"
                src={product.imgUrl}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5
                  className="card-text bold"
                  style={{ color: "black", textAlign: "center" }}
                ></h5>
                <p className="card-text" style={{ color: "gray" }}>
                  {product.name}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{ color: "red" }}>
                  <b> {product.price} $ </b>
                </li>
                <li className="list-group-item">
                  <button type="button" class="btn btn-primary" disabled>
                    left:{" "}
                    <span class="badge bg-white text-dark">
                      {product.number}
                    </span>
                  </button>
                </li>
                <li className="list-group-item">more information</li>
              </ul>
              <div className="card-body">
                <a
                  href="javascript:void(0)"
                  className="card-link toasts"
                  onClick={() => clickHandler(product)}
                  style={{ cursor: "pointer" }}
                >
                  Add to card
                </a>
              </div>
            </div>
          ))}
        </>
      ))}
    </>
  );
}
