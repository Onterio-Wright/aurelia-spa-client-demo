import { useState } from "react";

export default function TeamCard({ member }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="team-card">
      {!imageFailed ? (
        <img src={member.image} alt={member.name} className="team-card__image" onError={() => setImageFailed(true)} />
      ) : (
        <div className="team-card__image team-card__image--placeholder" aria-hidden="true" />
      )}

      <div className="team-card__body">
        <h3>{member.name}</h3>
        <p className="team-card__role">{member.role}</p>
        <p>{member.bio}</p>
      </div>
    </article>
  );
}
