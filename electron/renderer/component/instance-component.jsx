import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MongoDBInstance from 'mongodb-instance-model';

import { reset } from 'modules/instance/reset';
import { changeErrorMessage } from 'modules/instance/error-message';
import { changeInstance } from 'modules/instance/instance';

class TestPlugin extends Component {
  static displayName = 'InstanceComponent';

  static propTypes = {
    dataService: PropTypes.object,
    errorMessage: PropTypes.string.isRequired,
    instance: PropTypes.any.isRequired,
    reset: PropTypes.func.isRequired,
    changeErrorMessage: PropTypes.func.isRequired,
    changeInstance: PropTypes.func.isRequired
  };

  onReset() {
    global.hadronApp.instance = new MongoDBInstance();
    this.props.reset();
  }

  setErr() {
    this.props.changeErrorMessage('New error');
  }


  refreshData() {
    global.hadronApp.appRegistry.emit('refresh-data');
    this.props.changeInstance(JSON.stringify(this.props.instance.toJSON()));
  }

  renderModels() {
    if (!this.props.instance.toJSON) {
      return 'initial state';
    }
    return JSON.stringify(this.props.instance.toJSON());
  }

  /**
   * Render TestPlugin component.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <div style={{backgroundColor: '#66adff'}}>
        <h2> InstanceStore Tester</h2>
        <p></p>
        <p>The errorMessage is: <code>{this.props.errorMessage}</code></p>
        <p key={this.key}>The instance.collections is: <code>{this.renderModels()}</code></p>
        <button onClick={this.onReset.bind(this)}>Reset</button>
        <button onClick={this.refreshData.bind(this)}>Refresh Instance</button>
        <button onClick={this.setErr.bind(this)}>Set Error</button>
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
    reset,
    changeErrorMessage,
    changeInstance
  },
)(TestPlugin);

export default MappedTestPlugin;
export { TestPlugin };
