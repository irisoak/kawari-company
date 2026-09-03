"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          organisation: formData.get("organisation"),
          email: formData.get("email"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send enquiry.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

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

        <form
          className="contact__form"
          onSubmit={handleSubmit}
        >
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

            <select
              id="service"
              name="service"
              defaultValue=""
            >
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

              <option value="social-care-regulation-early-years">
                Social Care
              </option>

              <option value="social-care-regulation-early-years">
                Early Years
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
            <div className="contact__footer-copy">
              <p className="contact__notice">
                Please avoid including sensitive or confidential
                information at this stage.
              </p>

              <p className="contact__privacy">
                By submitting this form, you agree to the handling of
                your information as described in our{" "}
                <Link href="/privacy">
                  Privacy Notice
                </Link>.
              </p>

              {status === "success" && (
                <p
                  className="contact__status"
                  role="status"
                >
                  Thank you. Your enquiry has been sent.
                </p>
              )}

              {status === "error" && (
                <p
                  className="contact__status"
                  role="alert"
                >
                  Something went wrong. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="contact__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send enquiry"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}