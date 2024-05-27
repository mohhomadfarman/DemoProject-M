import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Tab, Tabs } from "react-bootstrap";
import Search from "./Search";
import Section_2 from "./Section_2";
import { Link } from "react-router-dom";


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

              <Tabs
                defaultActiveKey="Aktivitäten"
                id="uncontrolled-tab-example"
                className=" tabs-mein"
              >
                <Tab eventKey="Aktivitäten" title="Aktivitäten">
                  <Search />
                </Tab>
                <Tab eventKey="Unterkünfte" title="Unterkünfte">
                  <Search />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 2 --> */}

      <Section_2
        title="Beliebte Unterkünfte in Palma Center"
        desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      />
      {/* section 3 */}
      <section
        className="full-md-img"
        style={{ backgroundImage: "url( /unter.jpg)" }}
      >
        <Link to="/top-hotels" className="text-decoration-none">
          <div className="container">
            <h2>
              Top 10 Appartments <br /> am Strand
            </h2>
          </div>
        </Link>
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
                style={{ backgroundImage: "url(/highlights.png)" }}
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

      <section
        class="d-flex align-items-center full-md-img new_oder list-apartments d-space-none-xxl d-lg-none d-block"
        style={{ backgroundImage: "url(/highlights.jpg)", height: "242px" }}
      >
        <a
          class="text-decoration-none w-100"
          href="https://demogswebtech.com/mallorca/apartment"
        >
          <div class="container">
            <h2 className="fs-24">
              The top <br />
              wellness hotels <br />
              in Mallorca
            </h2>
          </div>
        </a>
      </section>
      <section
        class=" d-flex align-items-center full-md-img new_oder list-apartments d-space-none-xxl d-lg-none d-block"
        style={{ backgroundImage: "url(/highlights.png)", height: "242px" }}
      >
        <a
          class="text-decoration-none w-100"
          href="https://demogswebtech.com/mallorca/apartment"
        >
          <div class="container">
            <h2 className="fs-24">
              The top <br />
              wellness hotels <br />
              in Mallorca
            </h2>
          </div>
        </a>
      </section>
    </div>
  );
}

export default Home;
