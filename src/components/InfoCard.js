export default function InfoCard({ icon: Icon, title, text, bullets }) {
  return (
    <article className="info-card">
      {Icon ? (
        <div className="info-card__icon">
          <Icon size={20} />
        </div>
      ) : null}
      <h3>{title}</h3>
      {text ? <p>{text}</p> : null}
      {bullets ? (
        <ul className="check-list">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
