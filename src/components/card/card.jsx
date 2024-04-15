import React, { useContext, useState } from "react";
import DataContext from "../Context/dataContext";

export default function Card() {
  const CloseToast = useContext(DataContext);
  const cardData = useContext(DataContext);
  const navCardCon=useContext(DataContext);
  const [count, setCount]=useState(0)
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
                  onClick={(e) => {
                    CloseToast.setIsShowToast(true);
                    setTimeout(() => {
                      CloseToast.setIsShowToast(false);
                    }, 1000);

                    navCardCon.setNavCardCo(count)
                    setCount((prev)=>prev+1)

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
              
                    } 
                    else {
                      const newerUC=[...cardData.cardContent];
                      newerUC.find(checkpr=>checkpr.name===product.name&& checkpr.number++)
                    
               
                    }

                  }}
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
