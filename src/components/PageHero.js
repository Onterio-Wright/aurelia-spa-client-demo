import { useEffect, useState } from "react";
import Button from "./Button";

export default function PageHero({ eyebrow, title, description, image, primary, secondary, compact = false }) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [image]);

  return (
    <section className={`page-hero ${compact ? "page-hero--compact" : ""}`}>
      <div className="shell page-hero__grid">
        <div className="page-hero__content">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>

          {(primary || secondary) && (
            <div className="button-row">
              {primary ? <Button to={primary.to}>{primary.label}</Button> : null}
              {secondary ? (
                <Button to={secondary.to} variant="secondary">
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          )}
        </div>

        {image ? (
          <div className="page-hero__image-wrap">
            {!imageFailed ? (
              <img src={image} alt={title} className="page-hero__image" onError={() => setImageFailed(true)} />
            ) : (
              <div className="page-hero__image page-hero__image--placeholder" aria-hidden="true" />
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
