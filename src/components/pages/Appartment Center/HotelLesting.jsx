import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acttractionAction, acttractionActionSearch } from "../../../redux/actions/attractions";
import {  Link, useLocation } from "react-router-dom";

function HotelLesting() {
  const location = useLocation();
  const [dataBox, setDataBox] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state?.attractions?.BusinessListingss?.data);
  const dataNumber = useSelector((state) => state?.attractions?.BusinessListingss?.meta);
  const isLoading = useSelector((state) => state?.attractions?.isLoading);

  const getQueryParams = (search) => {
    return new URLSearchParams(search);
  };

  const queryParams = getQueryParams(location.search);
  const searchValue = queryParams.get('search');
  const radiusValue = queryParams.get('radius');
  const guestValue = queryParams.get('guest');

  useEffect(() => {
    if (searchValue || radiusValue || guestValue) {
      const payload = {
        location: searchValue,
        radius: radiusValue,
        guests: guestValue
      };
      setSearchLoading(true)
      dispatch(acttractionActionSearch(payload)).then((res) => {
        setDataBox(res.payload);
        setSearchLoading(false)
      });
    } else {
      dispatch(acttractionAction());
    }
  }, [dispatch, searchValue, radiusValue, guestValue]);


  return (
    <div>
      {isLoading || searchLoading ? (
        <div className="position-fixed bg-white w-100 d-flex justify-content-center align-items-center" style={{ height: "100dvh" }}>
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <section className="pb-0 padding-0-990 padd-images">
            <div className="container">
              <div className="row g-1">
                <div className="col-md-3">
                  <div className="input-form overflow-hidden" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    <img src="/fontistomapmarker.svg" alt="" />
                    <input type="text" className="border-0" placeholder="Location..." name="Location" />
                  </div>
                  {/* Modal */}
                  <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="input-form mb-4">
                            <img src="/fontistomapmarker.svg" alt="" />
                            <input type="text" className="border-0" placeholder="Palma" name="Location" />
                          </div>
                          <div className="input-form mb-4">
                            <img src="/ant-design_compass-filled.svg" alt="" />
                            <span>15km</span>
                            <input type="range" max="100" min="0" className="border-0 w-100" />
                          </div>
                          <div className="input-form mb-5">
                            <img src="/uis_calender.svg" alt="" />
                            <input type="text" id="datepicker" className="border-0 w-100" placeholder="18 Jun - So 24" />
                          </div>
                          <div className="mb-3">
                            <button type="button" className="sec-btn border-0 w-100">Suche</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 col-md-1 col-2">
                  <Link to="#" data-bs-toggle="modal" data-bs-target="#exampleModal3" className="d-flex align-items-center justify-content-center h-100">
                    <img src="/aktive.svg" alt="" />
                  </Link>
                  <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <h4 className="modal-heading">Filter</h4>
                          <div className="input-form mb-4">
                            <img src="/bxs_category.svg" alt="" />
                            <input type="text" className="border-0" placeholder="Palma" name="Kategorie" />
                          </div>
                          <div className="input-form mb-4">
                            <img src="/subway_like.svg" alt="" />
                            <input type="text" className="border-0 w-100" placeholder="Geeignet für" />
                          </div>
                          <div className="input-form mb-4">
                            <img src="/ant-design_euro-circle-filled.svg" alt="" />
                            <input type="text" className="border-0 w-100" placeholder="Preis" />
                          </div>
                          <div className="input-form mb-5">
                            <img src="/ant-design_compass-filled.svg" alt="" />
                            <input type="text" className="border-0 w-100" placeholder="Dauer" />
                          </div>
                          <div className="mb-3">
                            <button type="button" className="sec-btn border-0 w-75 m-auto">Suche</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-10 col-md-2 col-2">
                  <label htmlFor="location" className="Round-input-form dark">
                    <img src="https://demogswebtech.com/mallorca/public/images/custom-img/sighting.svg" alt="" />
                    <input type="radio" className="border-0" placeholder="Hotel" value="location" hidden name="listing" id="location" />
                    Searched results
                  </label>
                </div>
                <div className="col-sm-12 col-md-2 col-2">
                  <label htmlFor="apartments" className="Round-input-form">
                    <img src="https://demogswebtech.com/mallorca/public/images/custom-img/water-activity.svg" alt="" />
                    <input type="radio" className="border-0" hidden placeholder="Apartments" value="apartments" name="listing" id="apartments" />
                    Water activities
                  </label>
                </div>
                <div className="col-sm-12 col-md-2 col-2">
                  <label htmlFor="apartments" className="Round-input-form">
                    <img src="https://demogswebtech.com/mallorca/public/images/custom-img/tour.svg" alt="" />
                    <input type="radio" className="border-0" hidden placeholder="Apartments" value="apartments" name="listing" id="apartments" />
                    Tours & Adventures
                  </label>
                </div>
                <div className="col-sm-12 col-md-2 col-2">
                  <label htmlFor="apartments" className="Round-input-form">
                    <img src="https://demogswebtech.com/mallorca/public/images/custom-img/foods-drink.svg" alt="" />
                    <input type="radio" className="border-0" hidden placeholder="Apartments" value="apartments" name="listing" id="apartments" />
                    Food and Drink
                  </label>
                </div>
              </div>
            </div>
          </section>
          <section className="padding-0-990">
            <div className="container position-relative">
              <div className="row flex-column-reverse flex-md-row">
                <div className="col-md-7">
                  <h2 className="mein-headign-1">Your Mallorca Attractions</h2>
                  <p className="d-block d-md-none sub-head-1">Suchergebnisse: {dataNumber?.pagination?.total} tours</p>
                  <div className="row">
                    {dataBox?.length ? dataBox?.map((item) => (
                      <div key={item?.id} className="col-lg-6 mb-4">
                        <div className="card border-0 rounded-0 w-100 fav-icon">
                          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img style={{ objectFit: "cover", height: "200px" }} src={item?.attributes?.Featured_Image?.data?.attributes?.url} className="d-block w-100 card-img-top" alt={item?.attributes?.Name} />
                              </div>
                              <div className="carousel-item">
                                <img style={{ objectFit: "cover", height: "200px" }} src="https://demogswebtech.com/mallorca/public/images/custom-img/category-details-img.png" className="d-block w-100 card-img-top" alt={item?.attributes?.Name} />
                              </div>
                              <div className="carousel-item">
                                <img style={{ objectFit: "cover", height: "200px" }} src="https://demogswebtech.com/mallorca/public/images/custom-img/category-details-img.png" className="d-block w-100 card-img-top" alt={item?.attributes?.Name} />
                              </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                          <div className="card-body px-0 pb-0">
                          <Link style={{textDecoration:"none", color:"inherit"}} to={"/attractions/" + item?.id}><h5 className="card-title mt-3">
                          {item?.title}
                          </h5></Link>
                            <div className="d-flex justify-content-between">
                              <div className="f-12 f-bold">
                                <img src="https://demogswebtech.com/mallorca/public/images/custom-img/star.svg" alt="" />
                                <span>4.6</span>
                                <span> Google Bewertung</span>
                              </div>
                              <div>
                                <img src="https://demogswebtech.com/mallorca/public/images/custom-img/red-heart.svg" alt="" />
                              </div>
                            </div>
                           
                            <p className="card-text mb-1" style={{fontSize:"16px"}}>{JSON.parse(item?.real_address)?.address}</p>
                            {/* <p className="f-12 f-bold mb-2">
                              {item?.base_price} 
                            </p> */}
                          </div>
                        </div>
                      </div>
                    )) : (
                      !data && <p>No results found</p>
                    )}

{data?.length ? data?.map((item) => (
                      <div key={item?.id} className="col-lg-6 mb-4">
                        <div className="card border-0 rounded-0 w-100 fav-icon">
                          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img style={{ objectFit: "cover", height: "200px" }} src={item?.attributes?.Featured_Image?.data?.attributes?.url} className="d-block w-100 card-img-top" alt={item?.attributes?.Name} />
                              </div>
                              <div className="carousel-item">
                                <img style={{ objectFit: "cover", height: "200px" }} src="https://demogswebtech.com/mallorca/public/images/custom-img/category-details-img.png" className="d-block w-100 card-img-top" alt={item?.attributes?.Name} />
                              </div>
                              <div className="carousel-item">
                                <img style={{ objectFit: "cover", height: "200px" }} src="https://demogswebtech.com/mallorca/public/images/custom-img/category-details-img.png" className="d-block w-100 card-img-top" alt={item?.attributes?.Name} />
                              </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                          <div className="card-body px-0 pb-0">

                          
                          <Link style={{textDecoration:"none", color:"inherit"}} to={"/attractions/" + item?.id}><h5 className="card-title mt-3">{item?.attributes.Title}</h5></Link>
                            <div className="d-flex justify-content-between">
                              
                              <div className="f-12 f-bold">
                                <img src="https://demogswebtech.com/mallorca/public/images/custom-img/star.svg" alt="" />
                                <span>4.6</span>
                                <span> Google Bewertung</span>
                              </div>
                              <div>
                                <img src="https://demogswebtech.com/mallorca/public/images/custom-img/red-heart.svg" alt="" />
                              </div>
                            </div>
                            <p className="card-text mb-1" style={{fontSize:"16px"}}>{item?.attributes?.Real_Address?.address}</p>
                            <p className="f-12 f-bold mb-2">
                              {item?.base_price} 
                              {/* <span>person</span> */}
                            </p>
                          </div>
                        </div>
                      </div>
                    )) : (
                      !dataBox && <p>No results found</p>
                    )}
                  </div>
                </div>
                <div className="col-md-5 position-relative">
                  <div className="d-none d-md-block">
                    <div className="map-location-outer">
                      <img src="https://demogswebtech.com/mallorca/public/images/custom-img/category-map.png" alt="" className="img-fluid w-100" />
                    </div>
                  </div>
                  <p className="d-none d-md-block sub-head-1">Suchergebnisse: {dataNumber?.pagination?.total} tours</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default HotelLesting;
