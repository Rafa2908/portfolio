import { useState } from "react";
import "../components/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Replace with your actual form submission logic
    if (form.name && form.email && form.message) {
      setSent(true);
    }
  };

  return (
    <div className="contact-container">
      {/* HEADER */}
      <div className="contact-hero">
        <h1 className="contact-title">Let's Connect</h1>
        <p className="contact-subtitle">
          Have a project in mind, want to collaborate, or just want to say hi?
          Reach out.
        </p>
      </div>

      <div className="contact-grid">
        {/* LEFT — LINKS */}
        <div className="contact-links-col">
          <div className="contact-section-box">
            <h3 className="contact-section-label">
              <span>🔗</span> Find Me Online
            </h3>
            <div className="contact-links">
              <a
                className="contact-link-item"
                href="https://github.com/Rafa2908"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon">
                  <i className="fa-brands fa-github"></i>
                </span>
                <div>
                  <span className="contact-link-title">GitHub</span>
                  <span className="contact-link-sub">
                    github.com/josecalderon
                  </span>
                </div>
              </a>
              <a
                className="contact-link-item"
                href="https://www.linkedin.com/in/jose-calderon-623402117/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon">in</span>
                <div>
                  <span className="contact-link-title">LinkedIn</span>
                  <span className="contact-link-sub">
                    linkedin.com/in/josecalderon
                  </span>
                </div>
              </a>
              <a className="contact-link-item" href="mailto:papaus02@gmail.com">
                <span className="contact-link-icon">@</span>
                <div>
                  <span className="contact-link-title">Email</span>
                  <span className="contact-link-sub">papaus02@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* DOWNLOAD CV */}
          <div className="contact-section-box contact-cv-box">
            <h3 className="contact-section-label">
              <span>📄</span> Resume
            </h3>
            <p>
              Interested in working together? Download my CV to learn more about
              my background and experience.
            </p>
            <a
              className="contact-cv-btn"
              href="/assets/Jose_Calderon_CV.pdf"
              download
            >
              ⬇ Download CV
            </a>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="contact-section-box contact-form-box">
          <h3 className="contact-section-label">
            <span>✉️</span> Send a Message
          </h3>
          {sent ? (
            <div className="contact-success">
              <span>✅</span>
              <p>Message sent! I'll get back to you soon.</p>
            </div>
          ) : (
            <div className="contact-form">
              <div className="contact-field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-field">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="What's on your mind?"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button className="contact-submit-btn" onClick={handleSubmit}>
                Send Message →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
