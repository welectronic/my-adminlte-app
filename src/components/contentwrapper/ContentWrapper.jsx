import React from "react";
import ContactForm from '../contactform/ContactForm';

function ContentWrapper() {
  return (

    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default ContentWrapper;