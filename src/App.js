import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import products from "./product";
import "./custom.css";
import Navbar from "./components/navbar/navbar";
import Card from "./components/card/card";
import "./mysass.scss";
import Toast from "./components/toasts/toast";
import SideBuy from "./components/sideBuy/sideBuy";
import DataContext from "./components/Context/dataContext";
import Test from "./components/test";

export default function App() {
  const [allProducts, setproductsConst] = useState(products);
  const [isShowToast, setIsShowToast] = useState(false);
  const [isShowCart, setIsShowcart] = useState(false);
  const [cardContent, setCardContent]=useState([])
  const [navCardCo, setNavCardCo]=useState(0)


  return (
    <DataContext.Provider
      value={{
        allProducts,
        isShowToast,
        setIsShowToast,
        isShowCart,
        setIsShowcart,cardContent,setCardContent,navCardCo,setNavCardCo,
      }}
    >
      <Navbar />

      <Toast />
      <SideBuy />
        <div className="container-max-width container d-flex justify-content-center mt-5">
          <div className="row justify-content-center">
            <Card />
          </div>
        </div>
        {/* <Test/> */}
    </DataContext.Provider>
  );
}
