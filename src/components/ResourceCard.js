export default function ResourceCard({ item }) {
  return (
    <article className="resource-card">
      <p className="resource-card__tag">{item.tag}</p>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <span className="resource-card__link">Learn more</span>
    </article>
  );
}
