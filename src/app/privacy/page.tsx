import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="site-container privacy-page__inner">
        <p className="privacy-page__eyebrow">Privacy Notice</p>

        <h1>How we handle your information.</h1>

        <p className="privacy-page__intro">
          Kawari Company is committed to handling personal information
          responsibly and transparently.
        </p>

        <section>
          <h2>Information we collect</h2>
          <p>
            If you contact Kawari Company through this website, we may collect
            your name, email address, organisation, the service you are
            interested in, and any information you choose to include in your
            message.
          </p>
        </section>

        <section>
          <h2>How we use your information</h2>
          <p>
            We use the information you provide to respond to your enquiry,
            understand what support you may need, and communicate with you
            about relevant consultancy services.
          </p>
        </section>

        <section>
          <h2>Sharing your information</h2>
          <p>
            We do not sell your personal information. Information submitted
            through the website may be processed by service providers used to
            operate the website and deliver enquiries securely.
          </p>
        </section>

        <section>
          <h2>How long we keep your information</h2>
          <p>
            Enquiry information is retained only for as long as reasonably
            necessary to respond to your request, manage any resulting business
            relationship, and meet applicable legal or administrative
            requirements.
          </p>
        </section>

        <section>
          <h2>Your rights</h2>
          <p>
            You may contact Kawari Company if you would like to ask about,
            correct, or request deletion of personal information you have
            provided.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have any questions about how your information is handled,
            please contact Kawari Company using the contact details provided on
            this website.
          </p>
        </section>

        <p className="privacy-page__updated">
          Last updated: September 2026
        </p>

        <Link href="/" className="privacy-page__back">
          Back to Kawari Company
        </Link>
      </div>
    </main>
  );
}