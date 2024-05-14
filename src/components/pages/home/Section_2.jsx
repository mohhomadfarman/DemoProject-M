import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./css/HalfSlider.css";
import { Link } from 'react-router-dom';

function Section_2(props) {
  return (
    <section className="padding-990 position-relative">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="section-2-body">
            <h2>{props.title}</h2>
            {props.desc && <p>{props.desc}</p>}
          </div>
        </div>

        <div className="col-md-6 position-sub offset-md-1">
        <div className='hlf-slider'>
        <Swiper
       spaceBetween={20}
       slidesPerView={3}
       breakpoints={{
         // when window width is >= 640px
         300: {
            slidesPerView: 1,
          },
         640: {
           slidesPerView: 1,
         },
         // when window width is >= 768px
         768: {
           slidesPerView: 1,
         },
         // when window width is >= 1024px
         1024: {
           slidesPerView: 2,
         },
       }}
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
    >
            {" "}
            {Array.from({ length: 5 }, (_, i) => (
              <SwiperSlide>
                <div
                  key={i}
                  className="card border-0 rounded-0 w-100 fav-icon slide-content"
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
                        to="/AppartmentCenter"
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
    </div>
  </section>
  )
}

export default Section_2