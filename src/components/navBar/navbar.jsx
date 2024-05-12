import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
function NavBar() {
  const [open,setOpen]=useState(false)
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
        <Link to='/'
            className="navbar-brand"
            style={{ marginTop: "22px", marginBottom: "22px" }}
          >
            <img src="/group-158.svg" alt="" />
          </Link>

          {/* <a href="#" className="d-block d-lg-none">
            <img src="/group-158.svg" />
          </a> */}
          <div className="d-flex gap-3 d-lg-none">
            {" "}
            <Link to='/ShoppingCart'>
            <img src="/tablershoppingcart.svg   " alt="" />
            </Link>
            <Link to='/Favorites'>
            <img src="/favoriten.svg" alt="" /> 
            </Link>
            <button
            className="navbar-toggler d-lg-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="burger" onClick={()=>setOpen(true)}>
              <div className="burger-child"></div>
              <div className="burger-child"></div>
              <div className="burger-child"></div>
            </div>
            <IoMdClose onClick={()=>setOpen(false)} className={open? "d-block" :"d-none"} size={28}/>
          </button>
          </div>
        
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul
              className="navbar-nav ms-auto mt-2 mt-lg-0 align-items-center"
              style={{ gap: " 25px" }}
            >
              <li className="nav-item d-none d-lg-block">
                <Link
                  className="nav-link active menu-top-header"
                  to="Favorites"
                  aria-current="page"
                >
                  <img src="/favoriten.svg" alt="" /> Favoriten
                </Link>
              </li>
              <li className="nav-item d-none d-lg-block">
              <Link to='/ShoppingCart' className="nav-link menu-top-header" href="Warenkorb.html">
                  <img src="/tablershoppingcart.svg" alt="" />
                  Warenkorb
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <a href="# " className="nav-link">
                  <div className="frst-btn">Login</div>
                </a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a href="#" className="nav-link">
                  <div className="burger">
                    <div className="burger-child"></div>
                    <div className="burger-child"></div>
                    <div className="burger-child"></div>
                  </div>
                </a>
              </li>
            </ul>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Anmelden oder Registrieren</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <ul
                      className="nav top-tabs nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Anmelden
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Account erstellen
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabindex="0"
                      >
                        <h4 className="form-heading">Anmelden</h4>
                        <form action="" className="mein-form">
                          <div className="mb-3">
                            <label for="" className="w-100">
                              Email
                            </label>
                            <input
                              className="from-inputs"
                              type="email"
                              name=""
                              placeholder="Email"
                            />
                          </div>
                          <div className="mb-3">
                            <label for="" className="w-100">
                              Password
                            </label>
                            <input
                              className="from-inputs"
                              type="password"
                              name=""
                              placeholder=" Password"
                            />
                          </div>
                          <div className="mb-3">
                            <button
                              type="submit"
                              className="sec-btn border-0"
                              style={{ padding: "10px  50px" }}
                            >
                              {" "}
                              Anmelden
                            </button>
                          </div>
                        </form>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabindex="0"
                      >
                        <h4 className="form-heading">Account erstellen</h4>
                        <form action="" className="mein-form">
                          <div className="mb-3">
                            <label for="" className="w-100">
                              Email
                            </label>
                            <input
                              className="from-inputs"
                              type="text"
                              name=""
                              placeholder="Name"
                            />
                          </div>
                          <div className="mb-3">
                            <label for="" className="w-100">
                              Password
                            </label>
                            <input
                              className="from-inputs"
                              type="email"
                              name=""
                              placeholder=" Email address"
                            />
                          </div>
                          <div className="mb-3">
                            <label for="" className="w-100">
                              Password
                            </label>
                            <input
                              className="from-inputs"
                              type="password"
                              name=""
                              placeholder="Passwort"
                            />
                          </div>
                          <div className="mb-3">
                            <label for="" className="w-100">
                              Password
                            </label>
                            <input
                              className="from-inputs"
                              type="password"
                              name=""
                              placeholder="Passwort wiederholen"
                            />
                          </div>
                          <div className="mb-3">
                            <input type="checkbox" className="mr-2" />{" "}
                            <span>
                              Ich habe die Datenschutzbestimmungen gelesen und
                              stimme diesen zu
                            </span>
                          </div>
                          <div className="mb-3">
                            <button
                              type="submit"
                              className="sec-btn border-0"
                              style={{ padding: "10px  50px" }}
                            >
                              {" "}
                              Anmelden
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
