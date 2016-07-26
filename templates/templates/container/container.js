import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './<%= componentName %>.module.scss';
import cssModules from 'react-css-modules';

class <%= componentName %> extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Hello from <%= componentName %> Container</h1>
      </div>
    );
  }
}

<%= componentName %>.propTypes = {
  // Enter your prop types here
};

const mapStateToProps = (state) => ({
  // Map your state to props here
  state
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch to props here
  dispatch
});

const StyledComponent = cssModules(<%= componentName %>, styles)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledComponent);
