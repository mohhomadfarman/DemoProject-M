import React from "react";
import { Link } from "react-router-dom";

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
                  <Link to="/top-hotels">Top 3 Appartements am Strand in Mallorca</Link>
                </li>
                <li>
                <Link to="/top-hotels">Die Top Wellness Hotels in Mallorca</Link>
                </li>
                <li>
                <Link to="/top-hotels">Top 3 Appartements am Strand in Mallorca</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <ul className="Footer-link">
                <p className="mb-0">Aktivitäten</p>
                <li>
                <Link to="/top-hotels">Top 3 Appartements am Strand in Mallorca</Link>
                </li>
                <li>
                <Link to="/top-hotels">Die Top Wellness Hotels in Mallorca</Link>
                </li>
                <li>
                <Link to="/top-hotels">Top 3 Appartements am Strand in Mallorca</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-12">
              <ul className="Footer-link">
                <li>
                  <Link to="#" className="text-decoration-none">
                    Partner werden
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-decoration-none">
                    Hilfe
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-decoration-none">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-decoration-none">
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="d-flex flex-row gap-3">
                <Link to="#">
                  <img src=" /facebook.svg" alt="" />
                </Link>
                <Link to="#">
                  <img src=" /whatsapp.svg" alt="" />
                </Link>
                <Link to="#">
                  <img src=" /facebookmessenger.svg" alt="" />
                </Link>
                <Link to="#">
                  <img src=" /instagram.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default MyFooter;
