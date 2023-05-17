import React from "react";
import Footer from "./Footer";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

export default function Service() {
  return (
    <>
      <>
        {/* Topbar Start */}
       <Topbar/>
        {/* Topbar End */}
        {/* Navbar Start */}
        <Navbar/>
        {/* Navbar End */}
        {/* Header Start */}
        <div className="container-fluid page-header">
          <div className="container">
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ minHeight: 400 }}
            >
              <h3 className="display-4 text-white text-uppercase">Services</h3>
              <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase">
                  <a className="text-white" href="">
                    Home
                  </a>
                </p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">Services</p>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* Booking Start */}
        <div className="container-fluid booking mt-5 pb-5">
          <div className="container pb-5">
            <div className="bg-light shadow" style={{ padding: 30 }}>
              <div className="row align-items-center" style={{ minHeight: 60 }}>
                <div className="col-md-10">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="mb-3 mb-md-0">
                        <select
                          className="custom-select px-4"
                          style={{ height: 47 }}
                        >
                          <option selected="">Destination</option>
                          <option value={1}>Destination 1</option>
                          <option value={2}>Destination 1</option>
                          <option value={3}>Destination 1</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mb-3 mb-md-0">
                        <div
                          className="date"
                          id="date1"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control p-4 datetimepicker-input"
                            placeholder="Depart Date"
                            data-target="#date1"
                            data-toggle="datetimepicker"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mb-3 mb-md-0">
                        <div
                          className="date"
                          id="date2"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control p-4 datetimepicker-input"
                            placeholder="Return Date"
                            data-target="#date2"
                            data-toggle="datetimepicker"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mb-3 mb-md-0">
                        <select
                          className="custom-select px-4"
                          style={{ height: 47 }}
                        >
                          <option selected="">Duration</option>
                          <option value={1}>Duration 1</option>
                          <option value={2}>Duration 1</option>
                          <option value={3}>Duration 1</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    style={{ height: 47, marginTop: "-2px" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Booking End */}
        {/* Service Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Services
              </h6>
              <h1>Tours &amp; Travel Services</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-route mx-auto mb-4" />
                  <h5 className="mb-2">Travel Guide</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-ticket-alt mx-auto mb-4" />
                  <h5 className="mb-2">Ticket Booking</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-hotel mx-auto mb-4" />
                  <h5 className="mb-2">Hotel Booking</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-route mx-auto mb-4" />
                  <h5 className="mb-2">Travel Guide</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-ticket-alt mx-auto mb-4" />
                  <h5 className="mb-2">Ticket Booking</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-hotel mx-auto mb-4" />
                  <h5 className="mb-2">Hotel Booking</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Testimonial Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Testimonial
              </h6>
              <h1>What Say Our Clients</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              <div className="text-center pb-4">
                <img
                  className="img-fluid mx-auto"
                  src="img/testimonial-1.jpg"
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
              <div className="text-center">
                <img
                  className="img-fluid mx-auto"
                  src="img/testimonial-2.jpg"
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
              <div className="text-center">
                <img
                  className="img-fluid mx-auto"
                  src="img/testimonial-3.jpg"
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
              <div className="text-center">
                <img
                  className="img-fluid mx-auto"
                  src="img/testimonial-4.jpg"
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
        {/* Footer Start */}
        <Footer/>
      </>
    </>
  );
}
