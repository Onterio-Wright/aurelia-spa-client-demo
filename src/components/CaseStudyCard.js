export default function CaseStudyCard({ item }) {
  return (
    <article className="case-card">
      <p className="case-card__category">{item.category}</p>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="case-card__result">
        <strong>Result:</strong> {item.result}
      </div>
    </article>
  );
}
