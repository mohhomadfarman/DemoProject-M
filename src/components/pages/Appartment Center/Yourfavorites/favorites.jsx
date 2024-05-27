import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
function Favorites() {
  return (
    <div>
      <section className="pb-0 padding-0-990">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fav-section">
                <Link to="#" className="text-decoration-none d-block d-md-none">
                  <img src="img/Group%20116.svg" alt="" /> Zurück
                </Link>
                <h2>Deine Favoriten</h2>
                <div className="fav-body d-flex gap-3 align-items-start">
                  <img src="img/ph_smiley-wink-fill.svg" alt="" />
                  <div className="img-text">
                    <h5>Hey, verliere nicht deine Favoriten.</h5>
                    <p className="d-block d-md-none">
                      Damit du alle deine Favoriten behalten kannst musst du
                      dich bitte registrieren.
                    </p>
                    <p className="d-none d-md-block">
                      Damit du alle deine Favoriten behalten kannst <br /> musst
                      du dich bitte registrieren.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      <section className="pt-0 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="Add-fav-post">
                <img src="/Plus%20vector.svg" alt="" />
                <span>
                  <Link to="#">Neue Liste anlegen</Link>
                </span>
              </div>
              <div className="post-heading d-flex justify-content-between">
                <h2>Liste 01</h2>
                <div className="edit-ad-post">
                  <span>4 Favoriten</span>
                  <span>
                    <Link to="#">
                      <img src="/raphael_pensil.svg" alt="" />
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <img src="/Vectoaar.svg" alt="" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              {/* <!-- Slider main container --> */}

              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                {" "}
                {Array.from({ length: 5 }, (_, i) => (
                  <SwiperSlide>
                    <div
                      key={i}
                      className="card border-0 rounded-0 w-100 fav-icon"
                    >
                      {/* Set up your HTML */}
                      <div
                        id={`carouselExampleAutoplaying${i}`}
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target={`#carouselExampleIndicators${i}`}
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target={`#carouselExampleIndicators${i}`}
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target={`#carouselExampleIndicators${i}`}
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
                      <img
                        src="/favoriten.svg"
                        className="fav-icon-img"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title body mb-0">
                          <Link
                            to="Details.html"
                            className="text-decoration-none"
                          >
                            Appartment Palma Center
                          </Link>
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="Add-fav-post">
                <img src="/Plus%20vector.svg" alt="" />
                <span>
                  <Link to="#">Neue Liste anlegen</Link>
                </span>
              </div>
              <div className="post-heading d-flex justify-content-between">
                <h2>Liste 01</h2>
                <div className="edit-ad-post">
                  <span>4 Favoriten</span>
                  <span>
                    <Link to="#">
                      <img src="/raphael_pensil.svg" alt="" />
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <img src="/Vectoaar.svg" alt="" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              {/* <!-- Slider main container --> */}

              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                {" "}
                {Array.from({ length: 5 }, (_, i) => (
                  <SwiperSlide>
                    <div
                      key={i}
                      className="card border-0 rounded-0 w-100 fav-icon"
                    >
                      {/* Set up your HTML */}
                      <div
                        id={`carouselExampleAutoplaying${i}`}
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target={`#carouselExampleIndicators${i}`}
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target={`#carouselExampleIndicators${i}`}
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target={`#carouselExampleIndicators${i}`}
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
                      <img
                        src="/favoriten.svg"
                        className="fav-icon-img"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title body mb-0">
                          <Link
                            to="Details.html"
                            className="text-decoration-none"
                          >
                            Appartment Palma Center
                          </Link>
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="Add-fav-post">
                <img src="/Plus%20vector.svg" alt="" />
                <span>
                  <Link to="#">Neue Liste anlegen</Link>
                </span>
              </div>
              <div className="post-heading d-flex justify-content-between">
                <h2>Liste 01</h2>
                <div className="edit-ad-post">
                  <span>4 Favoriten</span>
                  <span>
                    <Link to="#">
                      <img src="/raphael_pensil.svg" alt="" />
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <img src="/Vectoaar.svg" alt="" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              {/* <!-- Slider main container --> */}

              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                {" "}
                {Array.from({ length: 5 }, (_, i) => (
                  <SwiperSlide>
                    <div
                      key={i}
                      className="card border-0 rounded-0 w-100 fav-icon"
                    >
                      {/* Set up your HTML */}
                      <div
                        id={`carouselExampleAutoplaying${i}`}
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target={`#carouselExampleIndicators${i}`}
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target={`#carouselExampleIndicators${i}`}
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target={`#carouselExampleIndicators${i}`}
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
                      <img
                        src="/favoriten.svg"
                        className="fav-icon-img"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title body mb-0">
                          <Link
                            to="Details.html"
                            className="text-decoration-none"
                          >
                            Appartment Palma Center
                          </Link>
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Favorites;
