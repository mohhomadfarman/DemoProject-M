import React from "react";
import Slider from "../../../atoms/slider/slider";
function Accommodation() {
  return (
    <div>
      <section className="pb-0 padding-0-990 padd-images">
        <div className="container">
          <div className="row g-1">
            <div className="col-md-4">
              <div
                className="input-form"
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
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
                className="d-flex align-items-center justify-content-center h-100"
              >
                <img src="/aktive.svg" alt="" />
              </a>

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
            <div className="col-sm-10 col-md-3 col-5">
              <div className="Round-input-form">
                <img src="/fa-solid_hotel.svg" alt="" />
                <input
                  type="text"
                  className="border-0"
                  placeholder="Hotel"
                  name="Location"
                  id=""
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-5">
              <div className="Round-input-form white">
                <img src="/ion_haus.svg" alt="" />
                <input
                  type="text"
                  className="border-0"
                  placeholder="Apartments."
                  name="Location"
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      <section class="padding-0-990">
        <div class="container position-relative">
          <div class="row flex-column-reverse  flex-md-row ">
            <div class="col-md-7 ">
              <h2 class="mein-headign-1">Mallorca Unterkünfte</h2>
              <p class="d-block d-md-none sub-head-1">
                Suchergebnisse: 100 Appartments
              </p>
              <div class="row">
                <div class="col-lg-12 mb-4">
                  {/* <!-- Set up your HTML --> */}

                  <Slider slidesPerView={2} length={2} />
                </div>
                <div class="col-lg-12 mb-4">
                  {/* <!-- Set up your HTML --> */}

                  <Slider slidesPerView={2} length={2} />
                </div>
                <div class="col-lg-12 mb-4">
                  {/* <!-- Set up your HTML --> */}

                  <Slider slidesPerView={2} length={2} />
                </div>
                <div class="col-lg-12 mb-4">
                  {/* <!-- Set up your HTML --> */}

                  <Slider slidesPerView={2} length={2} />
                </div>
                {/* pagination */}
                <div class="col-md-12">
                  <nav aria-label="Page navigation example w-100 Pagination-points">
                    <ul class="pagination justify-content-between">
                      <li class="page-item border-0">
                        <a class="page-link border-0" href="#">
                          <i class="bi bi-arrow-left"></i>
                        </a>
                      </li>
                      <li class="page-item border-0">
                        <a class="page-link border-0" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item border-0">
                        <a class="page-link border-0" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item border-0">
                        <a class="page-link border-0" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item border-0">
                        <a class="page-link border-0" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item border-0">
                        <a class="page-link border-0" href="#">
                          <i class="bi bi-arrow-left"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* map */}
            <div class="col-md-5">
              <h2 class="d-driver">Suchergebnisse: 100 Hotels</h2>
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
    </div>
  );
}

export default Accommodation;
