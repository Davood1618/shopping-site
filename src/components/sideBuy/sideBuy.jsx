import React, { useContext } from "react";
import DataContext from "../Context/dataContext";
import "./sideBuy.css";

export default function SideBuy() {
  const sideDate = useContext(DataContext);

  return (
    <div className="d-flex">
      <div
        className={`${
          sideDate.isShowCart ? " sidebar-show" : "sidebar-hidden"
        } z-4 end-0`}
      >
        <div className=" mainCard shadow-lg justify-content-center sidebar-sho" style={{ overflowY: 'auto' }}>
          <button
            className="btn btn-danger"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              sideDate.setIsShowcart(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
          {sideDate.cardContent.map((product) => (
            <div
              className="card shadow-lg d-flex align-items-center justify-content-center  mb-3"
              style={{
                maxWidth: "18rem",
                position: "flex",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                className="card-img-top"
                src={product.imgUrl}
                alt="Card image cap"
              />
              <div className="" style={{ display: "inline" }}>
                <h5
                  className="card-text bold"
                  style={{ color: "black", textAlign: "center" }}
                ></h5>
                <p
                  className="card-text text-justify"
                  style={{ color: "gray", textAlign: "center" }}
                >
                  {product.name}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{ color: "red" }}>
                  <b> {product.price} $ </b>
                </li>
                <li className="list-group-item">
                  <button type="button" class="btn btn-primary" disabled>
                    count:{" "}
                    <span class="badge bg-white text-dark">
                      {product.number}
                    </span>
                  </button>
                </li>
                <li className="list-group-item">more information</li>
              </ul>
              {/* <div className="card-body">
                <a href="#" className="card-link">
                  Add to card
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
