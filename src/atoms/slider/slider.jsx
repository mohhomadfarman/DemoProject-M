import React from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate, useParams } from "react-router-dom";
function Slider(props) {
  const navigate = useNavigate();

  const id = props?.id;
  const clikcME = () => {
    console.log("object");

    navigate(`/Attrection/${id}`);
  };
  return (
    <div>
      <Swiper
        slidesPerView={props.slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {" "}
        {/* {Array.from({ length: length }, (_, i) => ( */}
        <SwiperSlide>
          <div
            className="card border-0 rounded-0 w-100 fav-icon"
            onClick={clikcME}
          >
            {/* Set up your HTML */}
            <div
              id={`carouselExampleAutoplaying`}
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target={`#carouselExampleIndicators `}
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target={`#carouselExampleIndicators`}
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target={`#carouselExampleIndicators`}
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={props.image}
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
                <a href="Details.html" className="text-decoration-none">
                  {props?.title}
                </a>
              </h5>
              <p className="card-text mb-0">2 Betten / 1 Schlafzimmer</p>
              <p className="card-text mb-0">
                <b>4,8</b> Google Bewertung
              </p>
              <p className="card-text price mb-0">
                <b>290 € </b>/ Nacht
              </p>
              <p className="card-text small mb-0">
                Gesamtpreis:{props?.price}€
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* ))} */}
      </Swiper>
    </div>
  );
}

export default Slider;
