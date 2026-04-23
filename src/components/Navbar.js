import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { company } from '../data/siteData';

export default function Navbar({ items, ctaLabel }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="shell navbar__row">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__eyebrow">{company.eyebrow}</span>
          <span className="brand__name">{company.name}</span>
        </NavLink>

        <nav className="nav-links nav-links--desktop">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-links--desktop">
          <Button to="/contact">{ctaLabel}</Button>
        </div>

        <button className="mobile-toggle" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="mobile-panel">
          <div className="shell mobile-panel__inner">
            {items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `mobile-link ${isActive ? 'mobile-link--active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Button to="/contact" onClick={() => setOpen(false)}>
              {ctaLabel}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
