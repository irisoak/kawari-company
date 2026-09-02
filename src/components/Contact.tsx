export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="site-container contact__inner">
        <div className="contact__intro">
          <p className="contact__eyebrow">
            Request a Consultation
          </p>

          <h2>
            Tell us what
            <br />
            you need.
          </h2>

          <p>
            If your organisation needs independent advice, review,
            investigation or safeguarding support, send a short
            enquiry and Kawari will get back to you.
          </p>
        </div>

        <form className="contact__form">
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="organisation">Organisation</label>
            <input
              id="organisation"
              name="organisation"
              type="text"
              autoComplete="organization"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="service">
              What do you need help with?
            </label>

            <select id="service" name="service" defaultValue="">
              <option value="" disabled>
                Select an area
              </option>
              <option value="safeguarding">
                Safeguarding
              </option>
              <option value="independent-review">
                Independent Review
              </option>
              <option value="complaints">
                Complaints & Investigations
              </option>
              <option value="training">
                Board & Leadership Training
              </option>
              <option value="early-years">
                Early Years & Regulation
              </option>
              <option value="other">
                Something else
              </option>
            </select>
          </div>

          <div className="contact__field contact__field--full">
            <label htmlFor="message">
              Tell us a little about your enquiry
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              required
            />
          </div>

          <div className="contact__footer">
            <p>
              Please avoid including sensitive or confidential
              information at this stage.
            </p>

            <button type="submit">
              Send enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}