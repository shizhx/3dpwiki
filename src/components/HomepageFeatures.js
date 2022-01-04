import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';
import {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({id: "home.feature.everything.title", message: 'Everything You Need'}),
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate id="home.feature.everything.description">
        3D Printing Wiki would collect as much as possible documents.
      </Translate>
    ),
  },
  {
    title: translate({id: "home.feature.easy.title", message: 'Easy To Understand'}),
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate id="home.feature.easy.description">
        3D Printing Wiki would teach you step by step.
      </Translate>
    ),
  },
  {
    title: translate({id: "home.feature.collaboration.title", message: 'Collaboration'}),
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate id="home.feature.collaboration.description">
        3D Printing Wiki hosted on GitHub so that everyone could create, edit, talk about any documents.
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
