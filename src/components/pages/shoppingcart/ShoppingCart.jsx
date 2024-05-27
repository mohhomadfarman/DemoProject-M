import React from "react";
import { Link } from "react-router-dom";

function ShoppingCart() {
  return (
    <div>
      <main>
        <section className="padding-0-990">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="cart-title">
                  <a
                    to="#"
                    className="text-decoration-none d-block d-md-none"
                  >
                    <img src="/Group%20116.svg" alt="" /> Zurück
                  </a>
                  <h1>Warenkorb</h1>
                </div>
              </div>
              <div className="col-md-8">
                <div className="cart-card ">
                  <div className="row g-0 g-3">
                    <div className="col-md-12">
                      <div className="cart-card-title">
                        <h5 className="m-0">
                          Kathedralen von Palma de Mallorca
                        </h5>
                        <a to="#">
                          <img src="/Vectoaar.svg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5 mb-3 col-4 mt-0">
                      <img
                        className="img-fluid w-100 card-900"
                        src="/image.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-md-7 col-8 mt-0">
                      <div className="cart-item-details d-flex justify-content-between align-items-center">
                        <div className="items d-flex gap-3">
                          <img
                            src="/icon-park-solid_people-bottom.svg"
                            alt=""
                          />
                          <span>2 Erwachsene</span>
                        </div>
                        <a to="#">
                          <img width="28px" src="raphael_pensil.svg" alt="" />
                        </a>
                      </div>
                      <div className="cart-item-details d-flex justify-content-between align-items-center">
                        <div className="items d-flex gap-3">
                          <img src="/bxs_time.svg" alt="" />
                          <span>Dauer: 1/2 Tag</span>
                        </div>
                        <a to="#">
                          <img width="28px" src="/raphael_pensil.svg" alt="" />
                        </a>
                      </div>
                      <div className="cart-item-details d-flex justify-content-between align-items-center">
                        <div className="items d-flex gap-3">
                          <img src="/clarity_talk-bubbles-solid.svg" alt="" />
                          <span>Deutsch</span>
                        </div>
                        <a to="#">
                          <img width="28px" src="/raphael_pensil.svg" alt="" />
                        </a>
                      </div>
                      <div className="cart-item-details d-flex justify-content-between align-items-center">
                        <div className="items d-flex gap-3">
                          <img src="/uis_calender.svg" alt="" />
                          <span>18 Jun -So 24</span>
                        </div>
                        <a to="#">
                          <img width="28px" src="raphael_pensil.svg" alt="" />
                        </a>
                      </div>
                      <div className=" d-block d-md-none cart-item-details d-flex justify-content-between align-items-center">
                        <div className="items d-flex gap-3">
                          <span className="rate-none">58,00 EUR</span>
                        </div>
                      </div>
                      <div className="cart-item-details d-flex justify-content-between align-items-center">
                        <div className="items d-flex gap-3">
                          <img src="/favoriten.svg" alt="" />
                          <p>favoriten</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-card ">
                  <div className="row g-0 g-3">
                    <div className="col-md-12">
                      <div className="cart-card-title">
                        <h5 className="m-0">
                          Kathedralen von Palma de Mallorca
                        </h5>
                        <Link to="#">
                          <img src="Vectoaar.svg" alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-5 mb-3 col-4 mt-0">
                      <img
                        className="img-fluid w-100 card-900"
                        src="image.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-md-7 col-8 mt-0">
                      <div className="cart-item-details d-flex justify-content-between align-items-center">
                        <div className="items d-flex gap-3">
                          <img src="icon-park-solid_people-bottom.svg" alt="" />
                          <span>2 Erwachsene</span>
                        </div>
                        <Link to="#">
                          <img width="28px" src="raphael_pensil.svg" alt="" />
                        </Link>
                      </div>
                      <div className="cart-item-details d-flex justify-content-between align-items-center">
                        <div className="items d-flex gap-3">
                          <img src="bxs_time.svg" alt="" />
                          <span>Dauer: 1/2 Tag</span>
                        </div>
                        <Link to="#">
                          <img width="28px" src="raphael_pensil.svg" alt="" />
                        </Link>
                      </div>
                      <div className="cart-item-details d-flex justify-content-between align-items-center">
                        <div className="items d-flex gap-3">
                          <img src="clarity_talk-bubbles-solid.svg" alt="" />
                          <span>Deutsch</span>
                        </div>
                        <Link to="#">
                          <img width="28px" src="raphael_pensil.svg" alt="" />
                        </Link>
                      </div>
                      <div className="cart-item-details d-flex justify-content-between align-items-center">
                        <div className="items d-flex gap-3">
                          <img src="uis_calender.svg" alt="" />
                          <span>18 Jun -So 24</span>
                        </div>
                        <Link to="#">
                          <img width="28px" src="raphael_pensil.svg" alt="" />
                        </Link>
                      </div>
                      <div className=" d-block d-md-none cart-item-details d-flex justify-content-between align-items-center">
                        <div className="items d-flex gap-3">
                          <span className="rate-none">58,00 EUR</span>
                        </div>
                      </div>
                      <div className="cart-item-details d-flex justify-content-between align-items-center">
                        <div className="items d-flex gap-3">
                          <img src="/favoriten.svg" alt="" />
                          <p>favoriten</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="invoice-sec">
                  <label>2 Artikel insgesamt:</label>
                  <h3 className="d-none d-md-none">58,00 EUR</h3>
                  <a
                    to="#"
                    className="sec-btn width d-flex justify-content-center align-items-center"
                  >
                    Jetzt buchen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ShoppingCart;
