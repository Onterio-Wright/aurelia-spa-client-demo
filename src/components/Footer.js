import { Link } from 'react-router-dom';
import { company, footerNote } from '../data/siteData';

export default function Footer({ items }) {
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div>
          <div className="brand brand--footer">
            <span className="brand__eyebrow">{company.eyebrow}</span>
            <span className="brand__name">{company.name}</span>
          </div>
          <p className="footer__copy">{footerNote}</p>
        </div>

        <div>
          <h4 className="footer__heading">Pages</h4>
          <div className="footer__links">
            {items.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="footer__heading">Contact</h4>
          <div className="footer__links footer__links--stacked">
            <span>{company.phone}</span>
            <span>{company.email}</span>
            <span>{company.location}</span>
          </div>
        </div>
      </div>
      <div className="shell footer__bottom">© 2026 {company.name}. All rights reserved.</div>
    </footer>
  );
}
