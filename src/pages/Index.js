import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Ersel Erbay's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome to my personal website</Link></h2>
          <p>
            Use one of the links below or up top to continue
          </p>
        </div>
      </header>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source code for the page is available <a href="https://github.com/jetdoctor/Personal-Site-Final">here</a>.</p>
    </article>
  </Main>
);

export default Index;
