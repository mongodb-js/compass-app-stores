import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { reset } from 'modules/instance/reset';

class TestPlugin extends Component {
  static displayName = 'TestPluginComponent';

  static propTypes = {
    dataService: PropTypes.object,
    errorMessage: PropTypes.string.isRequired,
    instance: PropTypes.object.isRequired,
    reset: PropTypes.func.isRequired
  };

  onReset() {
    this.props.reset();
  }

  refreshData() {
    global.hadronApp.appRegistry.emit('refresh-data');
  }

  /**
   * Render TestPlugin component.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <div>
        <h2>TestPlugin Plugin</h2>
        <p></p>
        <p>The errorMessage is: <code>{this.props.errorMessage}</code></p>
        <p>The instance.collections is: <code>{JSON.stringify(this.props.instance.collections)}</code></p>
        <p>The instance.databases is: <code>{JSON.stringify(this.props.instance.databases)}</code></p>
        <button onClick={this.onReset.bind(this)}>Reset</button>
        <button onClick={this.refreshData.bind(this)}>Refresh Data</button>
      </div>
    );
  }
}

/**
 * Map the store state to properties to pass to the components.
 *
 * @param {Object} state - The store state.
 *
 * @returns {Object} The mapped properties.
 */
const mapStateToProps = (state) => ({
  dataService: state.dataService,
  errorMessage: state.errorMessage,
  instance: state.instance
});

/**
 * Connect the redux store to the component.
 * (dispatch)
 */
const MappedTestPlugin = connect(
  mapStateToProps,
  {
    reset
  },
)(TestPlugin);

export default MappedTestPlugin;
export { TestPlugin };
