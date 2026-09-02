import Link from "next/link";

export default function Consultation() {
  return (
    <section className="consultation" id="contact">
      <div className="site-container consultation__inner">
        <div className="consultation__content">
          <p className="consultation__eyebrow">
            Request a Consultation
          </p>

          <h2>
            Need clear, independent
            <br />
            advice?
          </h2>

          <p>
            Whether you need safeguarding support, an independent review,
            help with a complex complaint or guidance on regulatory
            responsibilities, Kawari can help you understand the next step.
          </p>
        </div>

        <div className="consultation__action">
          <Link href="#contact" className="consultation__button">
            Get started
          </Link>

          <p>
            Prefer to get in touch first?
          </p>

          <a href="mailto:hello@kawaricompany.co.uk">
            hello@kawaricompany.co.uk
          </a>
        </div>
      </div>
    </section>
  );
}