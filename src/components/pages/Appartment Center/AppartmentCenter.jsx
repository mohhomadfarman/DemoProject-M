import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";

function AppartmentCenter() {
  const faqItems = [
    {
      id: "One",
      question: "Was sind die Check-in- und Check-out-Zeiten im Palma Center?",
      answer: "Lorem Ipsum has been the industry's standard dummy text...",
    },
    {
      id: "Two",
      question: "Was sind die Check-in- und Check-out-Zeiten im Palma Center?",
      answer: "Lorem Ipsum has been the industry's standard dummy text...",
    },
    {
      id: "Three",
      question: "Was sind die Check-in- und Check-out-Zeiten im Palma Center?",
      answer: "Lorem Ipsum has been the industry's standard dummy text...",
    },
    {
      id: "Four",
      question: "Was sind die Check-in- und Check-out-Zeiten im Palma Center?",
      answer: "Lorem Ipsum has been the industry's standard dummy text...",
    },
    {
      id: "five",
      question: "Was sind die Check-in- und Check-out-Zeiten im Palma Center?",
      answer: "Lorem Ipsum has been the industry's standard dummy text...",
    },
  ];
  return (
    <div>
      <div className="section-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10">
              <Swiper slidesPerView={1} pagination={{ clickable: true }}>
                <SwiperSlide>
                  <div className="designer-color d-flex d-md-none">
                    <Link className="text-decoration-none d-block d-md-none">
                      <img src="/Group%20116.svg" alt="" /> Zurück
                    </Link>
                    <img src=" /favoriten.svg" alt="" />
                  </div>
                  <div className="Appartment-palma">
                    <h1>Appartment Palma Center</h1>
                  </div>
                  <div className="location-address">
                    <span>Eusebio Pascual, 10, 07192 Estellencs, Spain</span>
                    <span>
                      <strong>Excellent location</strong>
                    </span>
                    <span>Google Bewertung 4,8</span>
                  </div>
                </SwiperSlide>
                {/* Add more SwiperSlides as needed */}
              </Swiper>
            </div>
            <div className="col-md-2 d-none d-md-block">
              <div>
                <Link to="#">
                  <img src="/favoriten.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container-fluid p-0">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {" "}
          {Array.from({ length: 5 }, (_, i) => (
            <SwiperSlide>
              <img
                src="img/image.jpg"
                className="d-block img-fluid w-100"
                alt="Slide 1"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/*  */}
      <div className="section-2">
        <div className="container section-2-edit">
          <div className="row">
            <div className="col-md-8 order-2 order-md-1">
              <div className="Services-head">
                <h5>Ausstattung und Services</h5>
              </div>
              <div className="Services-list">
                <ul>
                  <li>
                    <span>
                      <img src="img/fa-solid_parking.svg" alt="" /> Kostenloser
                      Parkplatz
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src="img/material-symbols_pool-sharp.svg" alt="" />{" "}
                      Außenpool
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src="img/mdi_air-conditioner.svg" alt="" />{" "}
                      Klimanalage
                    </span>
                  </li>
                  <li>
                    <span>
                      <img
                        src="img/material-symbols_free-cancellation-rounded.svg"
                        alt=""
                      />{" "}
                      WLAN inklusive
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 order-1 order-md-2">
              <div className="book-now">
                <Link to="">Jetzt buchen</Link>
              </div>
            </div>
            <div className="col-md-10 order-3">
              <div className="gesamte-services">
                <h3>Gesamte Ausstattung und Services zeigen</h3>
                <p>
                  Diese Unterkunft ist 11 Gehminuten vom Strand entfernt.
                  Entdecken Sie den Luxus des Maristel Hotel, das in den Bergen
                  im Norden Mallorcas und nur 1 km vom schönen Strand Cala d‘
                  Estellencs gelegen ist.
                  <br />
                  <br />
                  Nutzen Sie den Außenpool oder entspannen Sie auf einer
                  Sonnenliege auf der Terrasse. Der überdachte Pool im Hotel
                  gehört zu den Wellnesseinrichtungen des Maristel. Genießen Sie
                  den unbegrenzten Zugang zum Spa, das Ihnen einen Whirlpool,
                  eine Sauna und ein Türkisches Bad bietet. Einige Zimmer
                  umfassen einen Balkon mit Blick auf die Berge oder die Küste.
                  Zum Frühstück und zum Abendessen stehen regionale und
                  internationale Speisen zur Wahl. Die
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card-top-heading">
                <h3>Verfügbare Zimmer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="section-3">
        <div className="container" style={{ maxwidth: "1440px" }}>
          <div className="row">
            <div className="col-md-4">
              <div className="card ">
                <img
                  src="img/image-card-1.png"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body card-padding">
                  <h4 className="card-title card-head">
                    Doppelzimmer mit Balkon und kostenfreiem Zugang zum
                    Wellnessbereich
                  </h4>
                  <div className="card-text">
                    <div className="price-room">
                      <h6>
                        Preis für bis zu{" "}
                        <span>
                          <img src="img/Group-1.svg" alt="" />
                        </span>
                        <span>
                          <img src="img/Group-1.svg" alt="" />
                        </span>
                        <span className="img-plus">
                          <img src="img/%20.svg" alt="" />
                        </span>
                        <span>
                          <img src="img/Group-1.svg" alt="" />
                        </span>
                      </h6>
                    </div>

                    <div className="bed-2">
                      <h6>
                        Betten: 2 Einzelbetten{" "}
                        <span>
                          <img src="img/Vector-1.svg" alt="" />
                        </span>
                        <span>
                          <img src="img/Vector-1.svg" alt="" />
                        </span>
                      </h6>
                    </div>

                    <div className="select-choose">
                      <select className="col-md-3">
                        <option value="" selected="">
                          Gesamte Ausstatung zeigen
                        </option>
                        <option value="">Gesamte Ausstatung zeigen1</option>
                        <option value="">Gesamte Ausstatung zeigen2</option>
                      </select>
                    </div>

                    <div className="coffee-serv">
                      <h6>
                        Frühstück im Preis inbegrieffen{" "}
                        <span>
                          <img src="img/jam_coffee-cup-f.svg" alt="" />
                        </span>
                      </h6>
                    </div>

                    <div className="final-price-room">
                      <h4>
                        290 € <span>/ 1 Nacht</span>
                      </h4>
                      <p>Einschließlich Steuern und Gebüren</p>
                    </div>
                  </div>
                </div>
                <div className="reserve-room">
                  <Link to="#" className="btn btn-primary">
                    <p>Reservieren</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card section-3-card">
                <img
                  src="img/image-card-1.png"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body card-padding">
                  <h4 className="card-title card-head">
                    Doppelzimmer mit Balkon und kostenfreiem Zugang zum
                    Wellnessbereich
                  </h4>
                  <div className="card-text">
                    <div className="price-room">
                      <h6>
                        Preis für bis zu{" "}
                        <span>
                          <img src="img/Group-1.svg" alt="" />
                        </span>
                        <span>
                          <img src="img/Group-1.svg" alt="" />
                        </span>
                        <span className="img-plus">
                          <img src="img/%20.svg" alt="" />
                        </span>
                        <span>
                          <img src="img/Group-1.svg" alt="" />
                        </span>
                      </h6>
                    </div>

                    <div className="bed-2">
                      <h6>
                        Betten: 2 Einzelbetten{" "}
                        <span>
                          <img src="img/Vector-1.svg" alt="" />
                        </span>
                        <span>
                          <img src="img/Vector-1.svg" alt="" />
                        </span>
                      </h6>
                    </div>

                    <div className="select-choose">
                      <select className="col-md-3">
                        <option value="" selected="">
                          Gesamte Ausstatung zeigen
                        </option>
                        <option value="">Gesamte Ausstatung zeigen1</option>
                        <option value="">Gesamte Ausstatung zeigen2</option>
                      </select>
                    </div>

                    <div className="coffee-serv">
                      <h6>
                        Frühstück im Preis inbegrieffen{" "}
                        <span>
                          <img src="img/jam_coffee-cup-f.svg" alt="" />
                        </span>
                      </h6>
                    </div>

                    <div className="final-price-room">
                      <h4>
                        290 € <span>/ 1 Nacht</span>
                      </h4>
                      <p>Einschließlich Steuern und Gebüren</p>
                    </div>
                  </div>
                </div>
                <div className="reserve-room">
                  <Link to="#" className="btn btn-primary">
                    <p>Reservieren</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card section-3-card">
                <img
                  src="img/image-card-1.png"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body card-padding">
                  <h4 className="card-title card-head">
                    Doppelzimmer mit Balkon und kostenfreiem Zugang zum
                    Wellnessbereich
                  </h4>
                  <div className="card-text">
                    <div className="price-room">
                      <h6>
                        Preis für bis zu{" "}
                        <span>
                          <img src="img/Group-1.svg" alt="" />
                        </span>
                        <span>
                          <img src="img/Group-1.svg" alt="" />
                        </span>
                        <span className="img-plus">
                          <img src="img/%20.svg" alt="" />
                        </span>
                        <span>
                          <img src="img/Group-1.svg" alt="" />
                        </span>
                      </h6>
                    </div>

                    <div className="bed-2">
                      <h6>
                        Betten: 2 Einzelbetten{" "}
                        <span>
                          <img src="img/Vector-1.svg" alt="" />
                        </span>
                        <span>
                          <img src="img/Vector-1.svg" alt="" />
                        </span>
                      </h6>
                    </div>

                    <div className="select-choose">
                      <select className="col-md-3">
                        <option value="" selected="">
                          Gesamte Ausstatung zeigen
                        </option>
                        <option value="">Gesamte Ausstatung zeigen1</option>
                        <option value="">Gesamte Ausstatung zeigen2</option>
                      </select>
                    </div>

                    <div className="coffee-serv">
                      <h6>
                        Frühstück im Preis inbegrieffen{" "}
                        <span>
                          <img src="img/jam_coffee-cup-f.svg" alt="" />
                        </span>
                      </h6>
                    </div>

                    <div className="final-price-room">
                      <h4>
                        290 € <span>/ 1 Nacht</span>
                      </h4>
                      <p>Einschließlich Steuern und Gebüren</p>
                    </div>
                  </div>
                </div>
                <div className="reserve-room">
                  <Link to="#" className="btn btn-primary">
                    <p>Reservieren</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="section-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="section-4-hero-body">
                <h3>Kundenbewertungen</h3>
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <div className="rating-head d-flex justify-content-center">
                <div>
                  <img src="img/star%201.svg" alt="" />
                  <img src="img/star%201.svg" alt="" />
                  <img src="img/star%201.svg" alt="" />
                  <img src="img/star%201.svg" alt="" />
                  <img src="img/star%205.svg" alt="" />
                </div>
                <div>
                  <h3>4,8 Gesamtbewertung</h3>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card card-boder-remove">
                          <div className="card-body yellow-star-para">
                            <div className="yellow-star">
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%20533.svg" alt="" />
                            </div>
                            <p className="card-text">
                              Sehr schöne Kathedrale, sehr imposant und bei
                              einem Besuch in Palma, meiner Meinung nach ein
                              Muss. Ich musste jedoch trotzdem etwas anstehen,
                              da viele Sch
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card card-boder-remove">
                          <div className="card-body yellow-star-para">
                            <div className="yellow-star">
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%20533.svg" alt="" />
                            </div>
                            <p className="card-text">
                              Sehr schöne Kathedrale, sehr imposant und bei
                              einem Besuch in Palma, meiner Meinung nach ein
                              Muss. Ich musste jedoch trotzdem etwas anstehen,
                              da viele Sch
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card card-boder-remove">
                          <div className="card-body yellow-star-para">
                            <div className="yellow-star">
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%20533.svg" alt="" />
                            </div>
                            <p className="card-text">
                              Sehr schöne Kathedrale, sehr imposant und bei
                              einem Besuch in Palma, meiner Meinung nach ein
                              Muss. Ich musste jedoch trotzdem etwas anstehen,
                              da viele Sch
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card card-boder-remove">
                          <div className="card-body yellow-star-para">
                            <div className="yellow-star">
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%20533.svg" alt="" />
                            </div>
                            <p className="card-text">
                              Sehr schöne Kathedrale, sehr imposant und bei
                              einem Besuch in Palma, meiner Meinung nach ein
                              Muss. Ich musste jedoch trotzdem etwas anstehen,
                              da viele Sch
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card card-boder-remove">
                          <div className="card-body yellow-star-para">
                            <div className="yellow-star">
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%20533.svg" alt="" />
                            </div>
                            <p className="card-text">
                              Sehr schöne Kathedrale, sehr imposant und bei
                              einem Besuch in Palma, meiner Meinung nach ein
                              Muss. Ich musste jedoch trotzdem etwas anstehen,
                              da viele Sch
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card card-boder-remove">
                          <div className="card-body yellow-star-para">
                            <div className="yellow-star">
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%20533.svg" alt="" />
                            </div>
                            <p className="card-text">
                              Sehr schöne Kathedrale, sehr imposant und bei
                              einem Besuch in Palma, meiner Meinung nach ein
                              Muss. Ich musste jedoch trotzdem etwas anstehen,
                              da viele Sch
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card card-boder-remove">
                          <div className="card-body yellow-star-para">
                            <div className="yellow-star">
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%20533.svg" alt="" />
                            </div>
                            <p className="card-text">
                              Sehr schöne Kathedrale, sehr imposant und bei
                              einem Besuch in Palma, meiner Meinung nach ein
                              Muss. Ich musste jedoch trotzdem etwas anstehen,
                              da viele Sch
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card card-boder-remove">
                          <div className="card-body yellow-star-para">
                            <div className="yellow-star">
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%20533.svg" alt="" />
                            </div>
                            <p className="card-text">
                              Sehr schöne Kathedrale, sehr imposant und bei
                              einem Besuch in Palma, meiner Meinung nach ein
                              Muss. Ich musste jedoch trotzdem etwas anstehen,
                              da viele Sch
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card card-boder-remove">
                          <div className="card-body yellow-star-para">
                            <div className="yellow-star">
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%20533.svg" alt="" />
                            </div>
                            <p className="card-text">
                              Sehr schöne Kathedrale, sehr imposant und bei
                              einem Besuch in Palma, meiner Meinung nach ein
                              Muss. Ich musste jedoch trotzdem etwas anstehen,
                              da viele Sch
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card card-boder-remove">
                          <div className="card-body yellow-star-para">
                            <div className="yellow-star">
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%20533.svg" alt="" />
                            </div>
                            <p className="card-text">
                              Sehr schöne Kathedrale, sehr imposant und bei
                              einem Besuch in Palma, meiner Meinung nach ein
                              Muss. Ich musste jedoch trotzdem etwas anstehen,
                              da viele Sch
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card card-boder-remove">
                          <div className="card-body yellow-star-para">
                            <div className="yellow-star">
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%20533.svg" alt="" />
                            </div>
                            <p className="card-text">
                              Sehr schöne Kathedrale, sehr imposant und bei
                              einem Besuch in Palma, meiner Meinung nach ein
                              Muss. Ich musste jedoch trotzdem etwas anstehen,
                              da viele Sch
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card card-boder-remove">
                          <div className="card-body yellow-star-para">
                            <div className="yellow-star">
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%201%20yellow.svg" alt="" />
                              <img src="img/star%20533.svg" alt="" />
                            </div>
                            <p className="card-text">
                              Sehr schöne Kathedrale, sehr imposant und bei
                              einem Besuch in Palma, meiner Meinung nach ein
                              Muss. Ich musste jedoch trotzdem etwas anstehen,
                              da viele Sch
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
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
                  data-bs-target="#carouselExampleAutoplaying"
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
        </div>
      </div>

      {/*  */}
      <div className="section-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-none d-md-block">
              <div className="section-5-hero-body">
                <h3>Bewertung schreiben</h3>
              </div>
            </div>
            <div className="col-md-12">
              <div className="faq-heading">
                <h3>FAQ</h3>
              </div>

              <div className="mb-5">
                {faqItems.map((item) => (
                  <div
                    className="accordion fqa-main-accordion"
                    id="accordionExample"
                  >
                    <div className="accordion-item faq-accordion-item">
                      
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed faq-accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.id}`}
                          aria-expanded="false"
                          aria-controls={`collapse${item.id}`}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse${item.id}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body faq-accordion-body">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <Swiper
                slidesPerView={2}
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
                          <b>4,8</b> Google rating
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

export default AppartmentCenter;
