/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;
var AuthStore = require('../stores/AuthStore');
var AuthActionCreators = require('../actions/AuthActionCreators');

function getStateFromStores() {
  return {
    auth: AuthStore.get()
  };
}

var App = module.exports = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    AuthStore.addChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  },

  signIn: function() {
    AuthActionCreators.signIn();
  },

  render: function() {
    return (
      <div>
        <h1>STAMPS!</h1>
        <div>authenticated: {this.state.auth.authenticated ? 'yes' : 'no'}</div>
        <div>authenticating: {this.state.auth.authenticating ? 'yes' : 'no'}</div>
        <ul>
          {this.renderAuthLink()}
        </ul>
        {this.props.activeRouteHandler() || this.renderIndex()}
      </div>
    );
  },

  renderAuthLink: function() {
    return this.state.auth.authenticated ?
      <li><Link to="logout">Logout</Link></li> :
      <li><button onClick={this.signIn}>Sign in</button></li>;
  },

  renderIndex: function() {
    return (
      <div>
        <h2>Index</h2>
      </div>
    );
  }

});

