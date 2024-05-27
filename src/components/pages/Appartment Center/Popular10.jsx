import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";
function WellssMallorcasl() {
  return (
    <div>
      <section className="py-0">
        <div className="container-fluid hero-slider ">
          <div className="row">
            <div id="carouselExample" className="carousel slide p-0">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src=" /unter.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption ">
                    <h5>
                      TOP 20 <br /> Wellss Hotels <br />
                      in Mallorcasl
                    </h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src=" /unter.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption ">
                    <h5>
                      TOP 20 <br /> Wellss Hotels <br />
                      in Mallorcasl
                    </h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src=" /unter.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption ">
                    <h5>
                      TOP 20 <br /> Wellss Hotels <br />
                      in Mallorcasl
                    </h5>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="pb-0">
        <div className="container">
          <div className="row margin-bottom-84">
            <div className="col-md-12">
              <div className="sub-heading margin-bottom-65">
                <h2>
                  Mallorca: <br /> Unsere idyllische Hotels{" "}
                </h2>
              </div>
            </div>
            <div className=" col-md-6 col-lg-3 mb-3">
              <div className="card border-0 rounded-0 w-100 fav-icon">
                {/* <!-- Set up your HTML --> */}
                <div
                  id="carouselExampleAutoplaying"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>

                <img src="/favoriten.svg" className="fav-icon-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title body mb-0">
                    Appartment Palma Center
                  </h5>
                  <p className="card-text mb-0">2 Betten / 1 Schlafzimmer</p>
                  <p className="card-text mb-0">
                    <b>4,8</b> Google Bewertung
                  </p>
                  <p className="card-text price mb-0">
                    <b>290 € </b>/ Nacht
                  </p>
                  <p className="card-text small mb-0">Gesamtpreis: 1160 €</p>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-lg-3 mb-3">
              <div className="card border-0 rounded-0 w-100 fav-icon">
                {/* <!-- Set up your HTML --> */}
                <div
                  id="carouselExampleAutoplaying"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>

                <img src="/favoriten.svg" className="fav-icon-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title body mb-0">
                    Appartment Palma Center
                  </h5>
                  <p className="card-text mb-0">2 Betten / 1 Schlafzimmer</p>
                  <p className="card-text mb-0">
                    <b>4,8</b> Google Bewertung
                  </p>
                  <p className="card-text price mb-0">
                    <b>290 € </b>/ Nacht
                  </p>
                  <p className="card-text small mb-0">Gesamtpreis: 1160 €</p>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-lg-3 mb-3">
              <div className="card border-0 rounded-0 w-100 fav-icon">
                {/* <!-- Set up your HTML --> */}
                <div
                  id="carouselExampleAutoplaying"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>

                <img src="/favoriten.svg" className="fav-icon-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title body mb-0">
                    Appartment Palma Center
                  </h5>
                  <p className="card-text mb-0">2 Betten / 1 Schlafzimmer</p>
                  <p className="card-text mb-0">
                    <b>4,8</b> Google Bewertung
                  </p>
                  <p className="card-text price mb-0">
                    <b>290 € </b>/ Nacht
                  </p>
                  <p className="card-text small mb-0">Gesamtpreis: 1160 €</p>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-lg-3 mb-3">
              <div className="card border-0 rounded-0 w-100 fav-icon">
                {/* <!-- Set up your HTML --> */}
                <div
                  id="carouselExampleAutoplaying"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>

                <img src="/favoriten.svg" className="fav-icon-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title body mb-0">
                    Appartment Palma Center
                  </h5>
                  <p className="card-text mb-0">2 Betten / 1 Schlafzimmer</p>
                  <p className="card-text mb-0">
                    <b>4,8</b> Google Bewertung
                  </p>
                  <p className="card-text price mb-0">
                    <b>290 € </b>/ Nacht
                  </p>
                  <p className="card-text small mb-0">Gesamtpreis: 1160 €</p>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-lg-3 mb-3">
              <div className="card border-0 rounded-0 w-100 fav-icon">
                {/* <!-- Set up your HTML --> */}
                <div
                  id="carouselExampleAutoplaying"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>

                <img src="/favoriten.svg" className="fav-icon-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title body mb-0">
                    Appartment Palma Center
                  </h5>
                  <p className="card-text mb-0">2 Betten / 1 Schlafzimmer</p>
                  <p className="card-text mb-0">
                    <b>4,8</b> Google Bewertung
                  </p>
                  <p className="card-text price mb-0">
                    <b>290 € </b>/ Nacht
                  </p>
                  <p className="card-text small mb-0">Gesamtpreis: 1160 €</p>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-lg-3 mb-3">
              <div className="card border-0 rounded-0 w-100 fav-icon">
                {/* <!-- Set up your HTML --> */}
                <div
                  id="carouselExampleAutoplaying"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>

                <img src="/favoriten.svg" className="fav-icon-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title body mb-0">
                    Appartment Palma Center
                  </h5>
                  <p className="card-text mb-0">2 Betten / 1 Schlafzimmer</p>
                  <p className="card-text mb-0">
                    <b>4,8</b> Google Bewertung
                  </p>
                  <p className="card-text price mb-0">
                    <b>290 € </b>/ Nacht
                  </p>
                  <p className="card-text small mb-0">Gesamtpreis: 1160 €</p>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-lg-3 mb-3">
              <div className="card border-0 rounded-0 w-100 fav-icon">
                {/* <!-- Set up your HTML --> */}
                <div
                  id="carouselExampleAutoplaying"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>

                <img src="/favoriten.svg" className="fav-icon-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title body mb-0">
                    Appartment Palma Center
                  </h5>
                  <p className="card-text mb-0">2 Betten / 1 Schlafzimmer</p>
                  <p className="card-text mb-0">
                    <b>4,8</b> Google Bewertung
                  </p>
                  <p className="card-text price mb-0">
                    <b>290 € </b>/ Nacht
                  </p>
                  <p className="card-text small mb-0">Gesamtpreis: 1160 €</p>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-lg-3 mb-3">
              <div className="card border-0 rounded-0 w-100 fav-icon">
                {/* <!-- Set up your HTML --> */}
                <div
                  id="carouselExampleAutoplaying"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/unterkuenfteimage%402x.png"
                        className="d-block w-100 card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>

                <img src="/favoriten.svg" className="fav-icon-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title body mb-0">
                    Appartment Palma Center
                  </h5>
                  <p className="card-text mb-0">2 Betten / 1 Schlafzimmer</p>
                  <p className="card-text mb-0">
                    <b>4,8</b> Google Bewertung
                  </p>
                  <p className="card-text price mb-0">
                    <b>290 € </b>/ Nacht
                  </p>
                  <p className="card-text small mb-0">Gesamtpreis: 1160 €</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="frst-btn m-auto" style={{ width: "fit-content" }}>
              Alle anzeigen
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="section-2-body top10">
                <h2>Beliebte Unterkünfte in Palma Center</h2>
              </div>
            </div>
            <div className="col-md-7">
              {/* <!-- Slider main container --> */}

              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <SwiperSlide>
                    <div
                      key={i}
                      className="card border-0 rounded-0 w-100 fav-icon"
                    >
                      {/* Set up your HTML */}
                      <div className="swiper-slide">
                        <div className="card border-0 rounded-0 w-100 fav-icon">
                          {/* <!-- Set up your HTML --> */}
                          <div
                            id="carouselExampleAutoplaying"
                            className="carousel slide"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img
                                  src=" /unterkuenfteimage%402x.png"
                                  className="d-block w-100 card-img-top rounded-0"
                                  alt="..."
                                />
                              </div>
                              <div className="carousel-item">
                                <img
                                  src=" /unterkuenfteimage%402x.png"
                                  className="d-block w-100 card-img-top rounded-0"
                                  alt="..."
                                />
                              </div>
                              <div className="carousel-item">
                                <img
                                  src=" /unterkuenfteimage%402x.png"
                                  className="d-block w-100 card-img-top rounded-0"
                                  alt="..."
                                />
                              </div>
                            </div>
                          </div>

                          <img
                            src="/favoriten.svg"
                            className="fav-icon-img"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title body mb-0">
                              Appartment Palma Center
                            </h5>
                            <p className="card-text mb-0">
                              2 Betten / 1 Schlafzimmer
                            </p>
                            <p className="card-text mb-0">
                              <b>4,8</b> Google Bewertung
                            </p>
                            <p className="card-text price mb-0">
                              <b>290 € </b>/ Nacht
                            </p>
                            <p className="card-text small mb-0">
                              Gesamtpreis: 1160 €
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {/* Add more SwiperSlides as needed */}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="section-2-body top10">
                <h2>Beliebte Unterkünfte in Palma Center</h2>
              </div>
            </div>
            <div className="col-md-7">
              {/* <!-- Slider main container --> */}

              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <SwiperSlide>
                    <div
                      key={i}
                      className="card border-0 rounded-0 w-100 fav-icon"
                    >
                      {/* Set up your HTML */}
                      <div className="swiper-slide">
                        <div className="card border-0 rounded-0 w-100 fav-icon">
                          {/* <!-- Set up your HTML --> */}
                          <div
                            id="carouselExampleAutoplaying"
                            className="carousel slide"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img
                                  src=" /unterkuenfteimage%402x.png"
                                  className="d-block w-100 card-img-top rounded-0"
                                  alt="..."
                                />
                              </div>
                              <div className="carousel-item">
                                <img
                                  src=" /unterkuenfteimage%402x.png"
                                  className="d-block w-100 card-img-top rounded-0"
                                  alt="..."
                                />
                              </div>
                              <div className="carousel-item">
                                <img
                                  src=" /unterkuenfteimage%402x.png"
                                  className="d-block w-100 card-img-top rounded-0"
                                  alt="..."
                                />
                              </div>
                            </div>
                          </div>

                          <img
                            src="/favoriten.svg"
                            className="fav-icon-img"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title body mb-0">
                              Appartment Palma Center
                            </h5>
                            <p className="card-text mb-0">
                              2 Betten / 1 Schlafzimmer
                            </p>
                            <p className="card-text mb-0">
                              <b>4,8</b> Google Bewertung
                            </p>
                            <p className="card-text price mb-0">
                              <b>290 € </b>/ Nacht
                            </p>
                            <p className="card-text small mb-0">
                              Gesamtpreis: 1160 €
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {/* Add more SwiperSlides as needed */}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="reading-section">
                <h3>Spa-Rituale in Mallorca</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="vertical-log">
                  <img
                    className="img-fluid w-100"
                    src="/unsplash_Jyg7xHRmXiU.jpg"
                    alt=""
                  />
                  <a to="#" className="d-block">
                    Spa Hotel Adrana am Strand entdecken
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="vertical-log">
                  <img
                    className="img-fluid w-100"
                    src="/unsplash_1_kitfaK5Jo.jpg"
                    alt=""
                  />
                  <Link to="#" className="d-block">
                    Spa Hotel Adrana am Strand entdecken
                  </Link>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WellssMallorcasl;
