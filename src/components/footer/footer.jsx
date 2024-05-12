import React from "react";

function MyFooter() {
  return (
    <footer>
      <section>
        <div className="container">
          <div className="row align-items-end justify-content-start g-3 flex-wrap">
            <div className="col-lg-4 col-md-4 col-12">
              <ul className="Footer-link">
                <img style={{ marginBottom: "39px" }} src=" /logo.svg" alt="" />
                <p className="mb-0">Unterkünfte</p>
                <li>
                  <a href="#">Top 3 Appartements am Strand in Mallorca</a>
                </li>
                <li>
                  <a href="#">Die Top Wellness Hotels in Mallorca</a>
                </li>
                <li>
                  <a href="#">Top 3 Appartements am Strand in Mallorca</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <ul className="Footer-link">
                <p className="mb-0">Aktivitäten</p>
                <li>
                  <a href="#">Top 3 Appartements am Strand in Mallorca</a>
                </li>
                <li>
                  <a href="#">Die Top Wellness Hotels in Mallorca</a>
                </li>
                <li>
                  <a href="#">Top 3 Appartements am Strand in Mallorca</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-12">
              <ul className="Footer-link">
                <li>
                  <a href="#" className="text-decoration-none">
                    Partner werden
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Hilfe
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Datenschutz
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="d-flex flex-row gap-3">
                <a href="#">
                  <img src=" /facebook.svg" alt="" />
                </a>
                <a href="#">
                  <img src=" /whatsapp.svg" alt="" />
                </a>
                <a href="#">
                  <img src=" /facebookmessenger.svg" alt="" />
                </a>
                <a href="#">
                  <img src=" /instagram.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default MyFooter;
