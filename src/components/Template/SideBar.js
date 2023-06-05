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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque non quam at mauris gravida bibendum vitae at libero.
        Nulla finibus elit sodales, ornare justo in, volutpat orci.
        Morbi vestibulum, nisi vitae ultrices aliquet, felis.
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
