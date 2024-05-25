import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function IBooking() {
  return (
    <div>
      <Row className="backgorund_IBooking_head aligen-item-center">
        <Col>
          {" "}
          <Container>
            {" "}
            <div className="container ">
              <ul className="IBooking_words  d-flex  ">
                <li>
                  <a>Home ></a>
                </li>
                <li>
                  <span>Become A Partner</span>
                </li>
              </ul>
            </div>
          </Container>
        </Col>
      </Row>

      <section className="partner_banner ">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 partner-form__left">
              <div className="become-form  ">
                <h2 className="title">Become A Partner</h2>
                <form
                  className="gmz-form-action"
                  action="https://demogswebtech.com/mallorca/become-a-partner"
                  method="POST"
                >
                  <div className="gmz-loader">
                    <div className="loader-inner">
                      <div className="spinner-grow text-info align-self-center loader-lg"></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <label for="first-name">
                        First Name<span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        className="form-control gmz-validation"
                        data-validation="required"
                        id="first-name"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label for="last-name">Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        className="form-control"
                        id="last-name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="email">
                      Email<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      className="form-control gmz-validation"
                      data-validation="required"
                      id="email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">
                      Password<span className="required">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control gmz-validation"
                      data-validation="required"
                      id="password"
                    />
                  </div>
                  <div className="form-group">
                    <label for="address">
                      Address<span className="required">*</span>
                    </label>
                    <textarea
                      name="address"
                      rows="3"
                      className="form-control"
                      id="address"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="agree" value="1" />
                      <span></span>I accept
                      <a
                        href="https://demogswebtech.com/mallorca/page/lorem-ipsum-passage"
                        className="link"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                  <div className="gmz-message"></div>
                  <button type="submit" className="btn btn-primary">
                    SUBMIT REQUEST
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-7 partner-form__right">
              <div className="become-intro">
                <h3>Why partner on iBooking?</h3>
                <p>
                  Join our community and start uploading your properties. We
                  make it simple and secure to host travelers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="icon-box">
        <div className="container">
          <h2 className="title">How does it work?</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="item">
                <div className="number">1</div>
                <h4 className="main-text">Set up your property</h4>
                <p className="sub-text">
                  Explain what’s unique, show off with photos, and set the right
                  price
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="number">2</div>
                <h4 className="main-text">Get the perfect match</h4>
                <p className="sub-text">
                  We’ll connect you with travelers from home and abroad
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item">
                <div className="number">3</div>
                <h4 className="main-text">Start earning</h4>
                <p className="sub-text">
                  We’ll help you collect payment, deduct a commission, and send
                  you the balance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-be-partner">
        <div className="container">
          <h2 className="title">Why be a Partner?</h2>
          <div className="item">
            <div className="left">
              <img src="/img/why-to-partner1.svg" alt="why-to-partner" />
            </div>
            <div className="right">
              <h4 className="main-text">Earn an additional income</h4>
              <p className="sub-text">
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="left">
              <img src="/img/why-to-partner2.svg" alt="why-to-partner" />
            </div>
            <div className="right">
              <h4 className="main-text">Open your network</h4>
              <p className="sub-text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="left">
              <img src="/img/why-to-partner3.svg" alt="why-to-partner" />
            </div>
            <div className="right">
              <h4 className="main-text">Practice your language</h4>
              <p className="sub-text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IBooking;
