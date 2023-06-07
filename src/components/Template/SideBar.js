import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/ersel.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ersel Erbay</h2>
        <p><a href="mailto:erselerbay@live.com">erselerbay@live.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hey, I&apos;m Ersel, a lifelong gamer turned Software Engineer.
        During my software engineering degree in Turkey, I mainly focused on game development.
        This led me to pursue a Master&apos;s Degree in the US to further expand my knowledge.
        I started my career as a Technical Game Designer at Zygobot which was followed by an
        Associate Technical Level Designer role at Sledgehammer Games. Later, I
        joined Sumo Digital as a Level Designer in England. After considering various factors,
        I made the decision to transition back to software engineering.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ersel Erbay <Link to="/">erselerbay.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
