import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate from '@docusaurus/Translate';
import {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate id="home.header.title" description="Title of home page header">
            3D Printing Wiki
          </Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate id="home.header.subtitle" description="Subtitle of home page header">
          Ocean of 3D printing knowledge
          </Translate>
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`${translate({id: "home.title", message: "3D Printing Wiki", description: "home title"})}`}
      description={`${translate({id: "home.description", message: "3D printing", description: "home description"})}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
