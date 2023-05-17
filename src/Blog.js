import React from "react";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Blog() {
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
              <h3 className="display-4 text-white text-uppercase">Blog</h3>
              <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase">
                  <a className="text-white" href="">
                    Home
                  </a>
                </p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">Blog</p>
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
        {/* Blog Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8">
                <div className="row pb-3">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                      <div className="position-relative">
                        <img
                          className="img-fluid w-100"
                          src="img/blog-1.jpg"
                          alt=""
                        />
                        <div className="blog-date">
                          <h6 className="font-weight-bold mb-n1">01</h6>
                          <small className="text-white text-uppercase">
                            Jan
                          </small>
                        </div>
                      </div>
                      <div className="bg-white p-4">
                        <div className="d-flex mb-2">
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Admin
                          </a>
                          <span className="text-primary px-2">|</span>
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Tours &amp; Travel
                          </a>
                        </div>
                        <a className="h5 m-0 text-decoration-none" href="">
                          Dolor justo sea kasd lorem clita justo diam amet
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                      <div className="position-relative">
                        <img
                          className="img-fluid w-100"
                          src="img/blog-2.jpg"
                          alt=""
                        />
                        <div className="blog-date">
                          <h6 className="font-weight-bold mb-n1">01</h6>
                          <small className="text-white text-uppercase">
                            Jan
                          </small>
                        </div>
                      </div>
                      <div className="bg-white p-4">
                        <div className="d-flex mb-2">
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Admin
                          </a>
                          <span className="text-primary px-2">|</span>
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Tours &amp; Travel
                          </a>
                        </div>
                        <a className="h5 m-0 text-decoration-none" href="">
                          Dolor justo sea kasd lorem clita justo diam amet
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                      <div className="position-relative">
                        <img
                          className="img-fluid w-100"
                          src="img/blog-3.jpg"
                          alt=""
                        />
                        <div className="blog-date">
                          <h6 className="font-weight-bold mb-n1">01</h6>
                          <small className="text-white text-uppercase">
                            Jan
                          </small>
                        </div>
                      </div>
                      <div className="bg-white p-4">
                        <div className="d-flex mb-2">
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Admin
                          </a>
                          <span className="text-primary px-2">|</span>
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Tours &amp; Travel
                          </a>
                        </div>
                        <a className="h5 m-0 text-decoration-none" href="">
                          Dolor justo sea kasd lorem clita justo diam amet
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                      <div className="position-relative">
                        <img
                          className="img-fluid w-100"
                          src="img/blog-1.jpg"
                          alt=""
                        />
                        <div className="blog-date">
                          <h6 className="font-weight-bold mb-n1">01</h6>
                          <small className="text-white text-uppercase">
                            Jan
                          </small>
                        </div>
                      </div>
                      <div className="bg-white p-4">
                        <div className="d-flex mb-2">
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Admin
                          </a>
                          <span className="text-primary px-2">|</span>
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Tours &amp; Travel
                          </a>
                        </div>
                        <a className="h5 m-0 text-decoration-none" href="">
                          Dolor justo sea kasd lorem clita justo diam amet
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                      <div className="position-relative">
                        <img
                          className="img-fluid w-100"
                          src="img/blog-2.jpg"
                          alt=""
                        />
                        <div className="blog-date">
                          <h6 className="font-weight-bold mb-n1">01</h6>
                          <small className="text-white text-uppercase">
                            Jan
                          </small>
                        </div>
                      </div>
                      <div className="bg-white p-4">
                        <div className="d-flex mb-2">
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Admin
                          </a>
                          <span className="text-primary px-2">|</span>
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Tours &amp; Travel
                          </a>
                        </div>
                        <a className="h5 m-0 text-decoration-none" href="">
                          Dolor justo sea kasd lorem clita justo diam amet
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                      <div className="position-relative">
                        <img
                          className="img-fluid w-100"
                          src="img/blog-3.jpg"
                          alt=""
                        />
                        <div className="blog-date">
                          <h6 className="font-weight-bold mb-n1">01</h6>
                          <small className="text-white text-uppercase">
                            Jan
                          </small>
                        </div>
                      </div>
                      <div className="bg-white p-4">
                        <div className="d-flex mb-2">
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Admin
                          </a>
                          <span className="text-primary px-2">|</span>
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Tours &amp; Travel
                          </a>
                        </div>
                        <a className="h5 m-0 text-decoration-none" href="">
                          Dolor justo sea kasd lorem clita justo diam amet
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                      <div className="position-relative">
                        <img
                          className="img-fluid w-100"
                          src="img/blog-1.jpg"
                          alt=""
                        />
                        <div className="blog-date">
                          <h6 className="font-weight-bold mb-n1">01</h6>
                          <small className="text-white text-uppercase">
                            Jan
                          </small>
                        </div>
                      </div>
                      <div className="bg-white p-4">
                        <div className="d-flex mb-2">
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Admin
                          </a>
                          <span className="text-primary px-2">|</span>
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Tours &amp; Travel
                          </a>
                        </div>
                        <a className="h5 m-0 text-decoration-none" href="">
                          Dolor justo sea kasd lorem clita justo diam amet
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                      <div className="position-relative">
                        <img
                          className="img-fluid w-100"
                          src="img/blog-2.jpg"
                          alt=""
                        />
                        <div className="blog-date">
                          <h6 className="font-weight-bold mb-n1">01</h6>
                          <small className="text-white text-uppercase">
                            Jan
                          </small>
                        </div>
                      </div>
                      <div className="bg-white p-4">
                        <div className="d-flex mb-2">
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Admin
                          </a>
                          <span className="text-primary px-2">|</span>
                          <a
                            className="text-primary text-uppercase text-decoration-none"
                            href=""
                          >
                            Tours &amp; Travel
                          </a>
                        </div>
                        <a className="h5 m-0 text-decoration-none" href="">
                          Dolor justo sea kasd lorem clita justo diam amet
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <nav aria-label="Page navigation">
                      <ul
                        className="pagination pagination-lg justify-content-center bg-white mb-0"
                        style={{ padding: 30 }}
                      >
                        <li className="page-item disabled">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-5 mt-lg-0">
                {/* Author Bio */}
                <div className="d-flex flex-column text-center bg-white mb-5 py-5 px-4">
                  <img
                    src="img/user.jpg"
                    className="img-fluid mx-auto mb-3"
                    style={{ width: 100 }}
                  />
                  <h3 className="text-primary mb-3">John Doe</h3>
                  <p>
                    Conset elitr erat vero dolor ipsum et diam, eos dolor lorem,
                    ipsum sit no ut est ipsum erat kasd amet elitr
                  </p>
                  <div className="d-flex justify-content-center">
                    <a className="text-primary px-2" href="">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="text-primary px-2" href="">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="text-primary px-2" href="">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="text-primary px-2" href="">
                      <i className="fab fa-instagram" />
                    </a>
                    <a className="text-primary px-2" href="">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
                {/* Search Form */}
                <div className="mb-5">
                  <div className="bg-white" style={{ padding: 30 }}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        placeholder="Keyword"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-primary border-primary text-white">
                          <i className="fa fa-search" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Category List */}
                <div className="mb-5">
                  <h4
                    className="text-uppercase mb-4"
                    style={{ letterSpacing: 5 }}
                  >
                    Categories
                  </h4>
                  <div className="bg-white" style={{ padding: 30 }}>
                    <ul className="list-inline m-0">
                      <li className="mb-3 d-flex justify-content-between align-items-center">
                        <a className="text-dark" href="#">
                          <i className="fa fa-angle-right text-primary mr-2" />
                          Web Design
                        </a>
                        <span className="badge badge-primary badge-pill">
                          150
                        </span>
                      </li>
                      <li className="mb-3 d-flex justify-content-between align-items-center">
                        <a className="text-dark" href="#">
                          <i className="fa fa-angle-right text-primary mr-2" />
                          Web Development
                        </a>
                        <span className="badge badge-primary badge-pill">
                          131
                        </span>
                      </li>
                      <li className="mb-3 d-flex justify-content-between align-items-center">
                        <a className="text-dark" href="#">
                          <i className="fa fa-angle-right text-primary mr-2" />
                          Online Marketing
                        </a>
                        <span className="badge badge-primary badge-pill">
                          78
                        </span>
                      </li>
                      <li className="mb-3 d-flex justify-content-between align-items-center">
                        <a className="text-dark" href="#">
                          <i className="fa fa-angle-right text-primary mr-2" />
                          Keyword Research
                        </a>
                        <span className="badge badge-primary badge-pill">
                          56
                        </span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <a className="text-dark" href="#">
                          <i className="fa fa-angle-right text-primary mr-2" />
                          Email Marketing
                        </a>
                        <span className="badge badge-primary badge-pill">
                          98
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Recent Post */}
                <div className="mb-5">
                  <h4
                    className="text-uppercase mb-4"
                    style={{ letterSpacing: 5 }}
                  >
                    Recent Post
                  </h4>
                  <a
                    className="d-flex align-items-center text-decoration-none bg-white mb-3"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="img/blog-100x100.jpg"
                      alt=""
                    />
                    <div className="pl-3">
                      <h6 className="m-1">
                        Diam lorem dolore justo eirmod lorem dolore
                      </h6>
                      <small>Jan 01, 2050</small>
                    </div>
                  </a>
                  <a
                    className="d-flex align-items-center text-decoration-none bg-white mb-3"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="img/blog-100x100.jpg"
                      alt=""
                    />
                    <div className="pl-3">
                      <h6 className="m-1">
                        Diam lorem dolore justo eirmod lorem dolore
                      </h6>
                      <small>Jan 01, 2050</small>
                    </div>
                  </a>
                  <a
                    className="d-flex align-items-center text-decoration-none bg-white mb-3"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="img/blog-100x100.jpg"
                      alt=""
                    />
                    <div className="pl-3">
                      <h6 className="m-1">
                        Diam lorem dolore justo eirmod lorem dolore
                      </h6>
                      <small>Jan 01, 2050</small>
                    </div>
                  </a>
                </div>
                {/* Tag Cloud */}
                <div className="mb-5">
                  <h4
                    className="text-uppercase mb-4"
                    style={{ letterSpacing: 5 }}
                  >
                    Tag Cloud
                  </h4>
                  <div className="d-flex flex-wrap m-n1">
                    <a href="" className="btn btn-light m-1">
                      Design
                    </a>
                    <a href="" className="btn btn-light m-1">
                      Development
                    </a>
                    <a href="" className="btn btn-light m-1">
                      Marketing
                    </a>
                    <a href="" className="btn btn-light m-1">
                      SEO
                    </a>
                    <a href="" className="btn btn-light m-1">
                      Writing
                    </a>
                    <a href="" className="btn btn-light m-1">
                      Consulting
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog End */}
        {/* Footer Start */}
        <Footer/>
      </>
    </>
  );
}
