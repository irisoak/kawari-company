const sectors = [
  {
    title: "Faith-led organisations",
    description:
      "Supporting Boards and leadership teams with safeguarding advice, governance and independent scrutiny.",
  },
  {
    title: "Social Care, Regulation & Early Years",
    description:
      "Consultancy across early years education, regulation, compliance and organisational practice.",
  },
  {
    title: "Regulated Organisations",
    description:
      "Helping organisations interpret regulatory expectations and translate them into clear, workable practice.",
  },
  {
    title: "Public Sector",
    description:
      "Independent advice, review and investigation support for organisations operating within complex public-service environments.",
  },
];

export default function Sectors() {
  return (
    <section className="sectors" id="sectors">
      <div className="site-container">
        <div className="sectors__header">
          <p className="sectors__eyebrow">
            Sectors
          </p>

          <h2>
            Specialist support across complex and regulated environments.
          </h2>

          <p>
            Kawari works with organisations where safeguarding,
            governance, regulation and accountability need to be
            handled with care and clarity.
          </p>
        </div>

        <div className="sectors__grid">
          {sectors.map((sector, index) => (
            <article
              className="sectors__item"
              key={sector.title}
            >
              <span className="sectors__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{sector.title}</h3>

              <p>{sector.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}