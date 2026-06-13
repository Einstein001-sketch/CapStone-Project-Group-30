import "./ContactForm.css";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const form = new URLSearchParams();

      form.append("fullName", formData.fullName);
      form.append("phoneNumber", formData.phoneNumber);
      form.append("email", formData.email);
      form.append("message", formData.message);
      console.log(form.toString());

      const response = await fetch("https://whitebricks.com/tsacademy.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: form.toString(),
      });

      console.log("STATUS:", response.status);

      const text = await response.text();
      console.log("RESPONSE TEXT:", text);

      if (response.status === 200) {
        alert("We've received your message! We'll get back to you soon");

        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } else {
        alert("Message not sent. Try again!");
      }
    } catch (error) {
      console.log("ERROR:", error);
      alert("Something went wrong.");
    }
  };
  return (
    <>
      <div className="form-container">
        <div className="form-text">
          <h2>Have Questions About Planetary Science?</h2>
          <p>
            Interested in learning more about space, astronomy, or how planetary
            data is collected and analyzed? <br /> Reach out and we'll get back
            to you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label htmlFor="fullName">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Please enter a valid phone number"
              required
              minLength={11}
              maxLength={11}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              maxLength={100}
            />
            <span className="muted-text">
              {100 - formData.message.length} characters
            </span>
          </div>

          <button type="submit" id="submit-btn">
            <span>Submit</span>
            <span>&gt;</span>
          </button>
        </form>
      </div>
    </>
  );
}
