import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Digital Business Card",
  description: "Contact details for Kawari Company.",

  robots: {
    index: false,
    follow: true,
  },
};

export default function CardPage() {
  return (
    <main className="business-card-page">
      <article className="business-card">
        <div className="business-card__logo">
          <Image
            src="/images/kawari-logo.jpg"
            alt="Kawari Company"
            width={280}
            height={110}
            priority
          />
        </div>

        <div className="business-card__identity">
          <h1>Alex</h1>
          <p>Founder &amp; Managing Director</p>
        </div>

        <p className="business-card__strapline">
          Leadership · Consultancy · Strategy · Transformation
        </p>

        <a
          href="mailto:alex@kawaricompany.com"
          className="business-card__email"
        >
          alex@kawaricompany.com
        </a>

        <div className="business-card__actions">
          <a
            href="mailto:alex@kawaricompany.com"
            className="business-card__button business-card__button--primary"
          >
            Email
          </a>

          <Link
            href="/"
            className="business-card__button business-card__button--secondary"
          >
            Visit Website
          </Link>

          <a
            href="/contact/alex-kawari.vcf"
            className="business-card__button business-card__button--secondary"
          >
            Save Contact
          </a>
        </div>
      </article>
    </main>
  );
}