import React from "react";
import Footer from "./Footer";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

export default function Guide() {
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
              <h3 className="display-4 text-white text-uppercase">Guides</h3>
              <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase">
                  <a className="text-white" href="">
                    Home
                  </a>
                </p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">Guides</p>
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
        {/* Team Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Guides
              </h6>
              <h1>Our Travel Guides</h1>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/team-1.jpg"
                      alt=""
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-instagram" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/team-2.jpg"
                      alt=""
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-instagram" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/team-3.jpg"
                      alt=""
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-instagram" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/team-4.jpg"
                      alt=""
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-instagram" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/team-1.jpg"
                      alt=""
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-instagram" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/team-2.jpg"
                      alt=""
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-instagram" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/team-3.jpg"
                      alt=""
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-instagram" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/team-4.jpg"
                      alt=""
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-instagram" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
        {/* Footer Start */}
        <Footer/>
      </>
    </>
  );
}
