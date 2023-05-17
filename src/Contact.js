import React from "react";
import Footer from "./Footer";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

export default function Contact() {
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
              <h3 className="display-4 text-white text-uppercase">Contact</h3>
              <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase">
                  <a className="text-white" href="">
                    Home
                  </a>
                </p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">Contact</p>
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
        {/* Contact Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Contact
              </h6>
              <h1>Contact For Any Query</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="contact-form bg-white" style={{ padding: 30 }}>
                  <div id="success" />
                  <form
                    name="sentMessage"
                    id="contactForm"
                    noValidate="novalidate"
                  >
                    <div className="form-row">
                      <div className="control-group col-sm-6">
                        <input
                          type="text"
                          className="form-control p-4"
                          id="name"
                          placeholder="Your Name"
                          required="required"
                          data-validation-required-message="Please enter your name"
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="control-group col-sm-6">
                        <input
                          type="email"
                          className="form-control p-4"
                          id="email"
                          placeholder="Your Email"
                          required="required"
                          data-validation-required-message="Please enter your email"
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        id="subject"
                        placeholder="Subject"
                        required="required"
                        data-validation-required-message="Please enter a subject"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <textarea
                        className="form-control py-3 px-4"
                        rows={5}
                        id="message"
                        placeholder="Message"
                        required="required"
                        data-validation-required-message="Please enter your message"
                        defaultValue={""}
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-primary py-3 px-4"
                        type="submit"
                        id="sendMessageButton"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
        {/* Footer Start */}
        <Footer/>
      </>
    </>
  );
}
