import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",

  description:
    "Learn about The Kawari Company, an independent consultancy supporting organisations with reviews, safeguarding, governance, leadership and meaningful improvement.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About | Kawari Company",
    description:
      "Learn about The Kawari Company, an independent consultancy supporting organisations with reviews, safeguarding, governance, leadership and meaningful improvement.",
    url: "/about",
    siteName: "Kawari Company",
    type: "website",
  },
};

const expertise = [
  "Independent reviews, evaluations and organisational learning",
  "Safeguarding reviews and practice improvement",
  "Education, inspection and regulatory assurance",
  "Quality assurance frameworks and effectiveness reviews",
  "Governance, risk and Board assurance",
  "Leadership, strategy and organisational transformation",
  "Sensitive investigations and reviews following serious incidents",
  "Training, facilitation and leadership development",
  "Policy development and implementation",
  "Stakeholder engagement and partnership working",
];

const reasons = [
  "An independent and credible perspective",
  "Senior-level experience and sound professional judgement",
  "Confidence in handling complex, sensitive or high-profile issues",
  "Clear findings supported by evidence",
  "Constructive challenge delivered with integrity",
  "Practical recommendations that can be implemented",
  "Flexible access to specialist expertise",
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="about-eyebrow">About The Kawari Company</p>
        <h1>Independent insight. Experienced leadership. Meaningful change.</h1>
        <p>
          The Kawari Company is an independent consultancy helping organisations
          examine complex issues, strengthen their practice and turn learning
          into lasting improvement.
        </p>
      </section>

      <section className="about-section about-intro">
        <p>
          We work across public services, education, regulation and the faith
          sector. Our particular strengths lie in independent reviews,
          safeguarding, quality assurance, governance, organisational improvement
          and leadership development.
        </p>

        <p>
          Our work is grounded in a simple principle: a review should do more
          than describe what happened. It should help an organisation understand
          why it happened, what needs to change and how that change can be
          sustained.
        </p>

        <p>
          Whether we are conducting an independent review, evaluating the
          effectiveness of a service, supporting a leadership team or delivering
          specialist training, we bring independence, sound judgement and a clear
          focus on practical outcomes.
        </p>
      </section>

      <section className="about-section">
        <h2>Our approach</h2>

        <p>
          Every organisation is different. We therefore shape each assignment
          around the context, risks and outcomes that matter to the client.
        </p>

        <p>
          We begin by listening. We examine the available evidence, speak with
          the people closest to the issues and consider the experience of those
          affected by the organisation&apos;s work. We are comfortable working with
          sensitive information, competing perspectives and situations where the
          way forward is not immediately clear.
        </p>

        <p>
          Our reviews are rigorous, proportionate and evidence-led. We identify
          strengths as well as areas requiring improvement and present our
          findings clearly, constructively and without unnecessary jargon.
          Recommendations are designed to be realistic, prioritised and capable
          of being translated into action.
        </p>

        <p>
          Kawari operates through a flexible network of experienced consultants
          and associates. This enables us to assemble the right combination of
          expertise for each commission while retaining clear senior oversight
          and a consistent standard of delivery.
        </p>

        <p>
          All assignments are led or overseen by our founder, Alex
          Magloire-Thompson.
        </p>
      </section>

      <section className="about-section">
        <h2>Our expertise</h2>
        <p>We support organisations with:</p>

        <ul className="about-list">
          {expertise.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h2>Working with public services and education</h2>

        <p>
          We understand the responsibilities carried by organisations delivering
          services to children, families, professionals and the wider public.
        </p>

        <p>
          Our experience includes national inspection and regulation, education
          policy and frameworks, adjudication, safeguarding, quality assurance,
          operational delivery and organisational governance. We have worked with
          Boards, executive teams, government departments, regulators, education
          leaders, charities and frontline professionals.
        </p>

        <p>
          This breadth of experience allows us to look beyond whether policies
          and processes are in place. We consider how effectively they operate in
          practice, whether leaders have meaningful assurance and, most
          importantly, whether they improve the experience and outcomes of the
          people an organisation exists to serve.
        </p>
      </section>

      <section className="about-section">
        <h2>Supporting faith-led organisations</h2>

        <p>
          Faith-led organisations often work at the heart of their communities
          and hold significant responsibilities for children, adults at risk,
          volunteers, staff and congregations.
        </p>

        <p>
          We provide thoughtful, values-sensitive support that respects an
          organisation&apos;s identity while maintaining independence and professional
          rigour. Our work includes safeguarding reviews, governance support,
          policy evaluation and training for trustees, Board members, leaders,
          staff and volunteers.
        </p>

        <p>
          Our training is practical, engaging and tailored to the organisation.
          We create space for honest discussion, help participants understand
          their individual and collective responsibilities and translate policies
          and statutory expectations into confident everyday practice.
        </p>
      </section>

      <section className="about-section about-founder">
        <div>
          <p className="about-stat">25+ years</p>
          <p className="about-stat-label">
            Senior leadership experience across regulation, inspection,
            education, public service and the charitable sector.
          </p>
        </div>

        <div>
          <h2>Our founder</h2>

          <p>
            The Kawari Company was founded by Alex Magloire-Thompson, an
            executive leader with more than 25 years experience across national
            regulation, inspection, education, public service and the charitable
            sector.
          </p>

          <p>
            Alex has held senior leadership roles at the Solicitors Regulation
            Authority and Ofsted, including as Chief of Staff, senior His
            Majesty&apos;s Inspector and Deputy Director. Her roles included
            responsibility for national adjudication, quality assurance,
            regulatory practice, inspection methodology, educational frameworks
            and organisational improvement.
          </p>

          <p>
            Her work has included advising Boards, Chief Executives, senior
            officials and Ministers; leading sensitive investigations and serious
            incident reviews; developing national policy; and bringing together
            stakeholders across organisational and professional boundaries.
          </p>

          <p>
            Her approach combines independence with humanity: asking difficult
            questions where necessary, listening carefully to people&apos;s
            experiences and helping organisations move from findings to
            meaningful action.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2>Why Kawari?</h2>
        <p>Clients come to Kawari when they need:</p>

        <ul className="about-list">
          {reasons.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p>
          We do not arrive with predetermined answers. We work alongside
          organisations to understand the real issue, provide an honest
          assessment and help create the conditions for lasting improvement.
        </p>

        <p className="about-closing">
          Leadership | Consultancy | Strategy | Transformation
        </p>
      </section>
    </main>
  );
}