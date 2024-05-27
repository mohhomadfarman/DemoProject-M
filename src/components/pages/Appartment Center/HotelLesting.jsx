import React, { useEffect } from "react";
import Slider from "../../../atoms/slider/slider";
import { useDispatch, useSelector } from "react-redux";
import { acttractionAction } from "../../../redux/actions/attractions";
import { Link } from "react-router-dom";
function HotelLesting() {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state?.attractions?.BusinessListingss?.data
  );
  const dataNumber = useSelector(
    (state) => state?.attractions?.BusinessListingss?.meta
  );

  const isLoading = useSelector(
    (state) => state?.attractions?.isLoading
  );
  useEffect(() => {
      dispatch(acttractionAction());
  }, []);
  return (
    <div>

{isLoading ? (<>
    
    <div className=" position-fixed  bg-white w-100 d-flex justify-content-center align-items-center" style={{height:"100dvh"}}>
  <div className="loader"></div>
     </div>
     </>):
(<>
      <section className="pb-0 padding-0-990 padd-images">
        <div className="container">
          <div className="row g-1">
            <div className="col-md-3">
              <div
                className="input-form overflow-hidden"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                <img
                  src="
                /fontistomapmarker.svg"
                  alt=""
                />
                <input
                  type="text"
                  className="border-0"
                  placeholder="Location..."
                  name="Location"
                  id=""
                />
              </div>
              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="input-form mb-4">
                        <img
                          src="
                        /fontistomapmarker.svg"
                          alt=""
                        />
                        <input
                          type="text"
                          className="border-0"
                          placeholder="Palma"
                          name="Location"
                          id=""
                        />
                      </div>
                      <div className="input-form mb-4">
                        <img src="/ant-design_compass-filled.svg" alt="" />
                        <span>15km</span>
                        <input
                          type="range"
                          max="100"
                          min="0"
                          className="border-0 w-100"
                          placeholder="Palma"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="input-form mb-5">
                        <img src="/uis_calender.svg" alt="" />
                        <input
                          type="text"
                          id="datepicker"
                          className="border-0 w-100"
                          placeholder="18 Jun - So 24 "
                          name=""
                        />
                      </div>
                      <div className=" mb-3">
                        <button
                          type="button"
                          className="sec-btn border-0 w-100"
                        >
                          Suche
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 col-md-1 col-2">
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
                className="d-flex align-items-center justify-content-center h-100"
              >
                <img src="/aktive.svg" alt="" />
              </Link>

              <div
                className="modal fade"
                id="exampleModal3"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <h4 className="modal-heading">Filter</h4>
                      <div className="input-form mb-4">
                        <img src="/bxs_category.svg" alt="" />
                        <input
                          type="text"
                          className="border-0"
                          placeholder="Palma"
                          name="Kategorie"
                          id=""
                        />
                      </div>
                      <div className="input-form mb-4">
                        <img src="/subway_like.svg" alt="" />
                        <input
                          type="text"
                          className="border-0 w-100"
                          placeholder="Geeignet für"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="input-form mb-4">
                        <img src="/ant-design_euro-circle-filled.svg" alt="" />
                        <input
                          type="text"
                          className="border-0 w-100"
                          placeholder="Preis"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="input-form mb-5">
                        <img src="/ant-design_compass-filled.svg" alt="" />
                        <input
                          type="text"
                          className="border-0 w-100"
                          placeholder="Dauer"
                          name=""
                          id=""
                        />
                      </div>
                      <div className=" mb-3">
                        <button
                          type="button"
                          className="sec-btn border-0 w-75 m-auto"
                        >
                          Suche
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-2 col-2">
              <label htmlFor="location" className="Round-input-form dark">
                <img
                  src="https://demogswebtech.com/mallorca/public/images/custom-img/sighting.svg"
                  alt=""
                />
                <input
                  type="radio"
                  className="border-0"
                  placeholder="Hotel"
                  value={"location"}
                  hidden={true}
                  name="listing"
                  id="location"
                />
                Searched results
              </label>
            </div>
            <div className="col-sm-12 col-md-2 col-2">
              <label htmlFor="apartments" className="Round-input-form ">
                <img
                  src="https://demogswebtech.com/mallorca/public/images/custom-img/water-activity.svg"
                  alt=""
                />
                <input
                  type="radio"
                  className="border-0"
                  hidden={true}
                  placeholder="Apartments"
                  value={"apartments"}
                  name="listing"
                  id="apartments"
                />
                Water activities
              </label>
            </div>
            <div className="col-sm-12 col-md-2 col-2">
              <label htmlFor="apartments" className="Round-input-form ">
                <img
                  src="https://demogswebtech.com/mallorca/public/images/custom-img/tour.svg"
                  alt=""
                />
                <input
                  type="radio"
                  className="border-0"
                  hidden={true}
                  placeholder="Apartments"
                  value={"apartments"}
                  name="listing"
                  id="apartments"
                />
                Tours & Adventures
              </label>
            </div>
            <div className="col-sm-12 col-md-2 col-2">
              <label htmlFor="apartments" className="Round-input-form ">
                <img
                  src="https://demogswebtech.com/mallorca/public/images/custom-img/foods-drink.svg"
                  alt=""
                />
                <input
                  type="radio"
                  className="border-0"
                  hidden={true}
                  placeholder="Apartments"
                  value={"apartments"}
                  name="listing"
                  id="apartments"
                />
                Food and Drink
              </label>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      <section class="padding-0-990">
        <div class="container position-relative">
          <div class="row flex-column-reverse  flex-md-row ">
            <div class="col-md-7 ">
              <h2 class="mein-headign-1">Your Mallorca Attractions</h2>
              <p class="d-block d-md-none sub-head-1">
                Suchergebnisse: {dataNumber?.pagination?.total} tours
              </p>
              <div class="row">
                {data?.map((item) => {
                      return (
                        <>
                          <div key={item?.id} class="col-lg-6 mb-4">
                            <div className="card border-0 rounded-0 w-100 fav-icon">
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
                                      style={{
                                        objectFit: "cover",
                                        height: "200px",
                                      }}
                                      src={
                                        item?.attributes?.Featured_Image?.data
                                          ?.attributes?.url
                                      }
                                      className="d-block w-100 card-img-top rounded-0"
                                      alt="..."
                                    />
                                  </div>
                                  {item?.attributes?.Gallery?.data.map((e) => {
                                    <div className="carousel-item">
                                      <img
                                        style={{
                                          objectFit: "cover",
                                          height: "200px",
                                        }}
                                        src={e?.attributes?.url}
                                        className="d-block w-100 card-img-top rounded-0"
                                        alt="..."
                                      />
                                    </div>;
                                  })}
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
                                    to={`${item?.id}`}
                                    className="text-decoration-none"
                                  >
                                    {item?.attributes?.Title}
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
                                  Gesamtpreis:{item?.attributes?.Base_Price}€
                                </p>
                              </div>
                            </div>

                            
                          </div>
                        </>
                      );
                    })
                 }

                {/* <div class="col-lg-12 mb-4">

                  <Slider slidesPerView={2} length={2} />
                </div>
                <div class="col-lg-12 mb-4">

                  <Slider slidesPerView={2} length={2} />
                </div>
                <div class="col-lg-12 mb-4">

                  <Slider slidesPerView={2} length={2} />
                </div> */}
                {/* pagination */}
                <div class="col-md-12">
                  <nav aria-label="Page navigation example w-100 Pagination-points">
                    <ul class="pagination">
                      <li class="page-item border-0">
                        <Link class="page-link border-0" to="#">
                          <i class="bi bi-arrow-left"></i>
                        </Link>
                      </li>
                      <li class="page-item border-0">
                        <Link class="page-link border-0" to="#">
                          1
                        </Link>
                      </li>
                      <li class="page-item border-0">
                        <Link class="page-link border-0" to="#">
                          2
                        </Link>
                      </li>
                      <li class="page-item border-0">
                        <Link class="page-link border-0" to="#">
                          3
                        </Link>
                      </li>
                      <li class="page-item border-0">
                        <Link class="page-link border-0" to="#">
                          3
                        </Link>
                      </li>
                      <li class="page-item border-0">
                        <Link class="page-link border-0" to="#">
                          <i class="bi bi-arrow-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* map */}
            <div class="col-md-5">
              <h2 class="d-driver">Search Results: {dataNumber?.pagination?.total} Tours</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13728.259644989432!2d76.8224!3d30.6603006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb44dcadeca1%3A0x7b7f65a69081f6e8!2sGS%20Web%20Technologies%3A%20Website%2C%20Mobile%20App%20Development%2C%20Graphic%20Designing%20%26%20Digital%20Marketing%20Company%20in%20Zirakpur%2C%20India!5e0!3m2!1sen!2sin!4v1698444804230!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
</>)}
    </div>
  );
}

export default HotelLesting;
