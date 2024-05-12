import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Home() {
  return (
    <div>
      <section className="hero-banner">
        <div className="container">
          <div className="row">
            <div className="banner-heading">
              <h1>
                Entdecke Mallorcas <br />
                beste Unterkünfte.
              </h1>
              <p className="d-none d-md-block">
                Suche nach einer Stadt, einem Hotel, einem <br />
                Appatment oder Unterkunft in Mallorca.
              </p>
              <p className="d-block d-md-none">
                Suche nach einer Stadt, einem Hotel, einem Appatment oder
                Unterkunft in Mallorca.
              </p>
              <div
                className="d-flex lable-block rounded overflow-hidden mt-1"
                style={{ width: "fit-content" }}
              >
                <div className="py-2 px-3">Aktivitäten</div>
                <div className="py-2 px-3">Unterkünfte</div>
              </div>

              <div className="row g-1">
                <div className="col-md-3">
                  <div className="input-form">
                    <img src="/fontistomapmarker.svg" alt="" />
                    <input
                      type="text"
                      className="border-0"
                      placeholder="Location..."
                      name="Location"
                      id=""
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="input-form">
                    <img src=" /uiscalender.svg" alt="" />
                    <input
                      type="text"
                      id="datepicker"
                      className="border-0"
                      placeholder="Mo, 18 Jun - So 24"
                      name="Location"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="input-form">
                    <img src=" /bipeoplefill.svg" alt="" />
                    <input
                      type="text"
                      className="border-0"
                      placeholder="Gäste"
                      name="Location"
                      id=""
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-3">
                  <a
                    className="sec-btn text-decoration-none"
                    href="listing.html"
                  >
                    Jetzt finden
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 2 --> */}

      <section className="padding-990 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="section-2-body">
                <h2>Die Appartments von West-Mallorca</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>

            <div className="col-md-7 position-sub">
              <Swiper
                slidesPerView={3}
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
                          <a
                            href="Details.html"
                            className="text-decoration-none"
                          >
                            Appartment Palma Center
                          </a>
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
      {/* section 3 */}
      <section
        className="full-md-img"
        style={{ backgroundImage: "url( /unter.jpg)" }}
      >
        <a href="top10.html" className="text-decoration-none">
          <div className="container">
            <h2>
              Top 10 Appartments <br /> am Strand
            </h2>
          </div>
        </a>
      </section>
      <section
        className="py-0 new_oder line-wellness position-relative d-lg-block d-none"
        style={{ height: "478.67px;" }}
      >
        <div className="container-fluid px-0 d-xl-block d-none ">
          <div className="row g-0">
            <div
              className="col-md-6 d-flex pr-0"
              style={{ height: "height:478.67px;" }}
            >
              <div
                className="w-100 h-100 full-sm-img"
                style={{ backgroundImage: "url( /highlights.jpg)" }}
              ></div>
            </div>
            <div
              className="col-md-6 d-flex pl-0"
              style={{ height: "478.67px;" }}
            >
              <div
                className="w-100 h-100 full-sm-img"
                style={{ backgroundImage: "url(/highlights.jpg)" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="container px-0 const-positon d-xl-block d-none  ">
          <div className="row g-0">
            <div className="col-md-6 d-flex pr-0">
              <div
                className="w-100 h-100 full-sm-img justify-content-start"
                style={{ paddingLeft: "0px" }}
              >
                <a href="https://demogswebtech.com/mallorca/hotel">
                  <h2>
                    The top <br />
                    wellness hotels <br />
                    in Mallorca
                  </h2>
                </a>
              </div>
            </div>
            <div className="col-md-6 d-flex pl-0">
              <div className="w-100 h-100 full-sm-img justify-content-start">
                <h2>
                  The top <br />
                  wellness hotels <br />
                  in Mallorca
                </h2>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Home;
