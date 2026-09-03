import Link from "next/link";

export const metadata = {
  title: "Privacy Notice | Kawari Company",
  description:
    "Privacy information for visitors and people contacting Kawari Company.",
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="site-container privacy-page__inner">
        <Link href="/" className="privacy-page__back">
          ← Back to Kawari Company
        </Link>

        <p className="privacy-page__eyebrow">Privacy Notice</p>

        <h1>How we handle your information.</h1>

        <div className="privacy-page__content">
          <section>
            <h2>About this notice</h2>
            <p>
              This privacy notice explains how Kawari Company handles
              personal information submitted through this website.
            </p>
          </section>

          <section>
            <h2>Information we collect</h2>
            <p>
              When you contact Kawari Company through the website, we may
              collect your name, organisation, email address, the area you
              need support with, and the information you provide in your
              enquiry.
            </p>
          </section>

          <section>
            <h2>How we use your information</h2>
            <p>
              We use the information you provide to understand your enquiry,
              respond to you, and communicate with you about potential
              consultancy services.
            </p>
          </section>

          <section>
            <h2>Sensitive information</h2>
            <p>
              Please do not include sensitive, confidential or case-specific
              information in the initial website enquiry. If this information
              is required, Kawari Company will advise you on an appropriate
              way to provide it.
            </p>
          </section>

          <section>
            <h2>How your information is handled</h2>
            <p>
              Information submitted through the contact form is sent to
              Kawari Company by email so that the enquiry can be reviewed
              and responded to.
            </p>

            <p>
              Kawari Company currently uses Resend as an email delivery
              service to process and deliver website enquiries. This means
              information submitted through the contact form may be processed
              by Resend for the purpose of transmitting the enquiry email.
            </p>
          </section>

          <section>
            <h2>How long we keep your information</h2>
            <p>
              Personal information is kept only for as long as it is
              reasonably required for the purpose for which it was collected,
              including responding to and managing enquiries. Kawari Company
              may update this notice as its enquiry and record-retention
              processes develop.
            </p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>
              You may contact Kawari Company if you have questions about
              personal information you have provided through this website or
              wish to request access to, correction of, or deletion of that
              information where applicable.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              For privacy enquiries, contact{" "}
              <a href="mailto:alex@kawaricompany.com">
                alex@kawaricompany.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}