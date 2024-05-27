import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { acttractionActionsingle } from "../../../redux/actions/attractions";
function AttDetails() {
  const id = useParams();
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state?.attractions?.attractionsListing?.data
  );
  const isLoading = useSelector(
    (state) => state?.attractions?.isLoading
  );

  useEffect(() => {
      dispatch(acttractionActionsingle(id))
      

      .then((res)=>{
        if(res?.payload?.data === undefined){
          navigate("/NotFound")
        }
      })

    
  }, []);

  

  return (
    <>
    {isLoading ? (<>
    
   <div className=" position-fixed  bg-white w-100 d-flex justify-content-center align-items-center" style={{height:"100dvh"}}>
    <div className="loader"></div>
    </div>
    </>) : (<>
    
      <div className="section-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10">
              <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                <div className="swiper-wrapper">
                  <div
                    className="swiper-slide swiper-slide-active"
                    // style="width: 776px;"
                  >
                    <div className="designer-color d-flex d-md-none">
                      <a className="text-decoration-none d-block d-md-none">
                        <img src="/Group%20116.svg" alt="" />{" "}
                        {data?.attributes?.Title}
                      </a>
                      <img src=" /favoriten.svg" alt="" />
                    </div>
                    <div className="Appartment-palma">
                      <h1>{data?.attributes?.Title}</h1>
                    </div>
                    <div className="location-address">
                      <span>{data?.attributes?.Select_Category}</span>

                      <span>Google Bewertung 4,8</span>
                    </div>
                  </div>
                </div>
              </div>
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
          {data?.attributes?.Gallery?.data.map((e) => {
            return (
              <>
                <SwiperSlide>
                  <img
                    style={{ objectFit: "cover", height: "600px" }}
                    src={e?.attributes?.url}
                    className="d-block img-fluid w-100"
                    alt="Slide 1"
                  />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p>
              {data?.attributes?.Content}
              </p>
            </div>
            <div className="col-md-4">
              <p className="price">
                <span>{data?.attributes?.Base_Price} EUR</span> pro Person
              </p>
              <div className="book-now">
                <Link to={""}> Send Enquiry</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlist_outer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="border-new col-lg-10">
                <div className="highlight">
                  <h2 className="section-title">Highlight</h2>
                  <div className="section-content">
                    <ul>
                      <li>
                        Visit eight villages showcasing Polynesian culture
                      </li>
                      <li>
                        Canoe ride, tattoos, spear throwing, ukulele lessons and
                        fishing
                      </li>
                      <li>
                        Spectacular Polynesian evening dinner show ‘Ha: Breath
                        of Life’
                      </li>
                      <li>Optional transportation from Waikiki hotels</li>
                    </ul>
                  </div>
                </div>
                <div className="description">
                  <h2 className="section-title">Detail</h2>
                  <div className="section-content">
                    <p>
                      Besuche die Kathedrale La Seu in Palma de Mallorca und
                      erkunde ihr atemberaubendes Inneres. Bewundere die
                      Mischung aus Architektur mit Beiträgen von Antoni Gaudí
                      und Miquel Barceló.
                    </p>
                  </div>
                </div>
                <div className="highlight">
                  <h2 className="section-title">Included</h2>
                  <div className="section-content">
                    <ul>
                      <li>
                        Einlass ohne Anstehen für die Kathedrale von Palma
                      </li>
                      <li> Besichtigung der Terrasse</li>
                    </ul>
                  </div>
                </div>
                <div className="description">
                  <h2 className="section-title">Meeting Point</h2>
                  <div className="section-content">
                    <p>
                      Bitte zeige deinen Voucher vor am Sicherheitseingang der
                      Kathedrale von Palma, Plaza de la Seu s/n, Palma de
                      Mallorca.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="content_with_image_outer" name="section">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="reading-section">
                <h3>
                  Visit the Cathedral Without Standing in Line for Tickets
                </h3>
                <p>
                  For me, it's like a feeling of "coming home" when I drive past
                  the cathedral after a vacation. My eyes never tire of the
                  sight—in fact, every time I look closely, I discover something
                  new.
                </p>
                <p>
                  I always rave about this building. I know no other cathedral
                  that stands right by the sea. Its free-standing location makes
                  the view of the church simply breathtaking. The cathedral can
                  be seen from miles away, even from the plane—unbelievably
                  beautiful and elegant!
                </p>
                <p>
                  In this article, I want to give you some information about the
                  cathedral. One could write novels to fully describe
                  everything. Here, I'll focus on the facts I find most
                  interesting. Of course, you'll also get tips on how to visit
                  the cathedral without having to stand in long lines for
                  tickets!
                </p>
                <div className="vertical-log">
                  <div className="reading_sec_img mb-4">
                    <img
                      className="img-fluid w-100"
                      src="https://demogswebtech.com/mallorca/public/images/custom-img/banner-image.png"
                      alt="Cathedral view"
                    />
                  </div>
                  <h3>Spectacular: Cathedral Terraces</h3>
                  <p>
                    Supposedly, there are 215 steps to the roof—I didn't count
                    because the breathtaking panoramic views along the way
                    distracted me. Imagine: I looked into the cathedral through
                    the huge Gothic rose window on the east side! I'm so
                    thrilled that it's hard to put into words. The cathedral
                    impresses me every day anew, but the visit to the rooftop
                    terraces took it to another level!
                  </p>
                  <p>
                    You can find the available dates for the terrace visit on
                    the official cathedral website. A maximum of 20 people can
                    participate per visit, so make sure to reserve in time!
                  </p>
                  <p>
                    The explanations are given only in Spanish. But don't worry,
                    while the information was very interesting, what makes the
                    tour so spectacular are the views of the old town and the
                    Bay of Palma. Simply breathtaking.
                  </p>
                  <p>
                    After visiting the terraces, you can spend as much time as
                    you like in the cathedral, so you don't need another ticket.
                    If you want to book an audio guide, head towards the exit.
                    Before you leave the cathedral through the official exit,
                    you'll end up in the souvenir shop, where you can also buy
                    the audio guide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>) }
      
    </>
  );
}
export default AttDetails;
