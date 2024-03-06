import React from "react";
import { useState } from "react";
import "../contactForm/contactForm.css";

function ContactForm() {
  // Define state variables for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Event handler for input changes
  const handleChange = (e) => {
    // Extract name and value from the input field
    const { name, value } = e.target;
    console.log(value);

    // Update the corresponding property in formData
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setSubmitted(true);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col text-start my-5">
            <h6>CONTACT</h6>
            <h3>Get In Touch</h3>
          </div>
        </div>
      </div>
      <div className="formDiv ">
        <form onSubmit={handleSubmit} className="form text-start">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@react.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="6"
              placeholder="Message here.."
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="btn-div text-center p-1">
            <button type="submit" className="submit-btn p-2 rounded-3">
              {" "}
              Submit
            </button>
            {submitted && <p className="m-3">Form successfully submitted!</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
