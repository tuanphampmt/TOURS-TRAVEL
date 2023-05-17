import React from "react";
import Footer from "./Footer";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

export default function Package() {
  return (
    <>
      <>
        {/* Topbar Start */}
        <Topbar />
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
              <h3 className="display-4 text-white text-uppercase">Packages</h3>
              <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase">
                  <a className="text-white" href="">
                    Home
                  </a>
                </p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">Packages</p>
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
        {/* Packages Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Packages
              </h6>
              <h1>Pefect Tour Packages</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src="img/package-1.jpg" alt="" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0">
                        <i className="fa fa-map-marker-alt text-primary mr-2" />
                        Thailand
                      </small>
                      <small className="m-0">
                        <i className="fa fa-calendar-alt text-primary mr-2" />3
                        days
                      </small>
                      <small className="m-0">
                        <i className="fa fa-user text-primary mr-2" />2 Person
                      </small>
                    </div>
                    <a className="h5 text-decoration-none" href="">
                      Discover amazing places of the world with us
                    </a>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">
                          <i className="fa fa-star text-primary mr-2" />
                          4.5 <small>(250)</small>
                        </h6>
                        <h5 className="m-0">$350</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src="img/package-2.jpg" alt="" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0">
                        <i className="fa fa-map-marker-alt text-primary mr-2" />
                        Thailand
                      </small>
                      <small className="m-0">
                        <i className="fa fa-calendar-alt text-primary mr-2" />3
                        days
                      </small>
                      <small className="m-0">
                        <i className="fa fa-user text-primary mr-2" />2 Person
                      </small>
                    </div>
                    <a className="h5 text-decoration-none" href="">
                      Discover amazing places of the world with us
                    </a>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">
                          <i className="fa fa-star text-primary mr-2" />
                          4.5 <small>(250)</small>
                        </h6>
                        <h5 className="m-0">$350</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src="img/package-3.jpg" alt="" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0">
                        <i className="fa fa-map-marker-alt text-primary mr-2" />
                        Thailand
                      </small>
                      <small className="m-0">
                        <i className="fa fa-calendar-alt text-primary mr-2" />3
                        days
                      </small>
                      <small className="m-0">
                        <i className="fa fa-user text-primary mr-2" />2 Person
                      </small>
                    </div>
                    <a className="h5 text-decoration-none" href="">
                      Discover amazing places of the world with us
                    </a>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">
                          <i className="fa fa-star text-primary mr-2" />
                          4.5 <small>(250)</small>
                        </h6>
                        <h5 className="m-0">$350</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src="img/package-4.jpg" alt="" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0">
                        <i className="fa fa-map-marker-alt text-primary mr-2" />
                        Thailand
                      </small>
                      <small className="m-0">
                        <i className="fa fa-calendar-alt text-primary mr-2" />3
                        days
                      </small>
                      <small className="m-0">
                        <i className="fa fa-user text-primary mr-2" />2 Person
                      </small>
                    </div>
                    <a className="h5 text-decoration-none" href="">
                      Discover amazing places of the world with us
                    </a>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">
                          <i className="fa fa-star text-primary mr-2" />
                          4.5 <small>(250)</small>
                        </h6>
                        <h5 className="m-0">$350</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src="img/package-5.jpg" alt="" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0">
                        <i className="fa fa-map-marker-alt text-primary mr-2" />
                        Thailand
                      </small>
                      <small className="m-0">
                        <i className="fa fa-calendar-alt text-primary mr-2" />3
                        days
                      </small>
                      <small className="m-0">
                        <i className="fa fa-user text-primary mr-2" />2 Person
                      </small>
                    </div>
                    <a className="h5 text-decoration-none" href="">
                      Discover amazing places of the world with us
                    </a>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">
                          <i className="fa fa-star text-primary mr-2" />
                          4.5 <small>(250)</small>
                        </h6>
                        <h5 className="m-0">$350</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src="img/package-6.jpg" alt="" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0">
                        <i className="fa fa-map-marker-alt text-primary mr-2" />
                        Thailand
                      </small>
                      <small className="m-0">
                        <i className="fa fa-calendar-alt text-primary mr-2" />3
                        days
                      </small>
                      <small className="m-0">
                        <i className="fa fa-user text-primary mr-2" />2 Person
                      </small>
                    </div>
                    <a className="h5 text-decoration-none" href="">
                      Discover amazing places of the world with us
                    </a>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">
                          <i className="fa fa-star text-primary mr-2" />
                          4.5 <small>(250)</small>
                        </h6>
                        <h5 className="m-0">$350</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Packages End */}
        {/* Destination Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Destination
              </h6>
              <h1>Explore Top Destination</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src="img/destination-1.jpg"
                    alt=""
                  />
                  <a
                    className="destination-overlay text-white text-decoration-none"
                    href=""
                  >
                    <h5 className="text-white">United States</h5>
                    <span>100 Cities</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src="img/destination-2.jpg"
                    alt=""
                  />
                  <a
                    className="destination-overlay text-white text-decoration-none"
                    href=""
                  >
                    <h5 className="text-white">United Kingdom</h5>
                    <span>100 Cities</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src="img/destination-3.jpg"
                    alt=""
                  />
                  <a
                    className="destination-overlay text-white text-decoration-none"
                    href=""
                  >
                    <h5 className="text-white">Australia</h5>
                    <span>100 Cities</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src="img/destination-4.jpg"
                    alt=""
                  />
                  <a
                    className="destination-overlay text-white text-decoration-none"
                    href=""
                  >
                    <h5 className="text-white">India</h5>
                    <span>100 Cities</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src="img/destination-5.jpg"
                    alt=""
                  />
                  <a
                    className="destination-overlay text-white text-decoration-none"
                    href=""
                  >
                    <h5 className="text-white">South Africa</h5>
                    <span>100 Cities</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src="img/destination-6.jpg"
                    alt=""
                  />
                  <a
                    className="destination-overlay text-white text-decoration-none"
                    href=""
                  >
                    <h5 className="text-white">Indonesia</h5>
                    <span>100 Cities</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Destination Start */}
        {/* Footer Start */}
        <Footer />
      </>
    </>
  );
}
