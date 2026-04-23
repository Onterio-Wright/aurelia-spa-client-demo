export default function TeamCard({ member }) {
  return (
    <article className="team-card">
      <img src={member.image} alt={member.name} className="team-card__image" />
      <div className="team-card__body">
        <h3>{member.name}</h3>
        <p className="team-card__role">{member.role}</p>
        <p>{member.bio}</p>
      </div>
    </article>
  );
}
