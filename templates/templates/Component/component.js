import React from 'react';
import cssModules from 'react-css-modules';
import styles from './<%= componentName %>.module.scss';

const <%= componentName %> = (props) => (
  <div className={styles.container}>
    <h1><%= componentName %> Is working!</h1>
  </div>
);

export default cssModules(<%= componentName %>, styles);
