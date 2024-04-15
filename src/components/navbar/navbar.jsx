import { useContext } from "react";
import DataContext from "../Context/dataContext";
import "./navbar.css";


export default function Navbar() {
  const showCart = useContext(DataContext)
  const navCon= useContext(DataContext)

  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-light sticky-top z--1">
        <div class="container-fluid">
          <a class="navbar-brand ps-4" href="#">
            sooshad
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  me
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  address
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  cv
                </a>
              </li>
            </ul>
            {/* shopping card */}
            <div className="me-5" onClick={()=>{
              showCart.isShowCart? showCart.setIsShowcart(false): showCart.setIsShowcart(true)
            }}>
              <button
                type="button"
                class="btn btn-primary position-relative btn-sm"
                // style={{ height: "40px", width: "40px" }}
              >
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {navCon.navCardCo}<span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
