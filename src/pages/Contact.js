import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Ersel Erbay via email @ erselerbay@live.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at:</p>
        <br />
        <p><a href="mailto:erselerbay@live.com">erselerbay@live.com</a></p>
        <br />
        <p>or use any of the social media links down below.</p>

      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
