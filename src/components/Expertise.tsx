const expertise = [
  {
    title: "Safeguarding",
    description:
      "Board and senior-level advice and support on safeguarding responsibilities and practice.",
  },
  {
    title: "Independent Reviews",
    description:
      "Independent, fair and thorough reviews of complex or sensitive matters.",
  },
  {
    title: "Complaints & Investigations",
    description:
      "Third-tier complaint handling, investigation and independent scrutiny.",
  },
  {
    title: "Board & Leadership Training",
    description:
      "Governance training for Boards and senior leaders, with practical support across safeguarding and organisational responsibilities.",
  },
  {
    title: "Social Care, Regulation & Early Years",
    description:
      "Social care regulation and early years education, regulation and compliance.",
  },
];

export default function Expertise() {
  return (
    <section className="expertise" id="expertise">
      <div className="site-container expertise__inner">
        <div className="expertise__header">
          <p className="expertise__eyebrow">
            How we help
          </p>
        </div>

        <div className="expertise__grid">
          {expertise.map((item, index) => (
            <article
              className="expertise__item"
              key={item.title}
            >
              <span
                className="expertise__number"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>{item.title}</h2>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}