const ContactPage = () => {
  return (
    <section className="contact-page">
      <div className="contact-hero">
        <div>
          <p className="section-label">Get in Touch</p>
          <h1 className="page-title">Professional Coffee Support</h1>
          <p className="page-subtitle">
            Reach out to Cafferium for expert guidance, wholesale enquiries, partnerships, or any coffee questions.
            Our team is ready to help with premium sourcing, brewing advice, and custom coffee experiences.
          </p>
        </div>
      </div>

      <div className="contact-grid container">
        <div className="contact-info-card">
          <h2>Contact Information</h2>
          <p>Whether you need business support or brewing advice, our team replies within one business day.</p>

          <div className="contact-details">
            <div>
              <span>Email</span>
              <strong>hello@cafferium.co</strong>
            </div>
            <div>
              <span>Phone</span>
              <strong>+1 (555) 123-6789</strong>
            </div>
            <div>
              <span>Address</span>
              <strong>430 Espresso Ave, Brewtown, CA</strong>
            </div>
          </div>

          <div className="contact-badges">
            <div>
              <h3>Business Hours</h3>
              <p>Mon - Fri: 8am - 6pm</p>
              <p>Sat: 9am - 4pm</p>
            </div>
            <div>
              <h3>Response Time</h3>
              <p>Within 24 hours</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="Your full name" />

          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" placeholder="you@example.com" />

          <label htmlFor="subject">Subject</label>
          <input id="subject" type="text" placeholder="How can we assist you?" />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="6" placeholder="Tell us about your request..."></textarea>

          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
