import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Safeguarding · Regulation · Independent Review
          </p>

          <h1>
            Expert advice.
            <br />
            Impacting practice.
          </h1>

          <p className="hero__intro">
            Helping organisations understand and apply safeguarding,
            regulatory and governance requirements with confidence.
          </p>

          <div className="hero__actions">
            <Link href="#expertise" className="hero__button hero__button--primary">
              Our Expertise
            </Link>

            <Link href="#contact" className="hero__button hero__button--secondary">
              Request a Consultation
            </Link>
          </div>
        </div>

        <div className="hero__media">
          <Image
            src="/images/hero-architecture.jpg"
            alt="Calm architectural interior"
            fill
            priority
            className="hero__image"
            sizes="(max-width: 768px) 100vw, 48vw"
          />
        </div>
      </div>
    </section>
  );
}