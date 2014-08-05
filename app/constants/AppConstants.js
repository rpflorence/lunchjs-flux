var keyMirror = require('react/lib/keyMirror');

var HOST = 'https://lunchjs-flux.firebaseio.com';

module.exports = {

  FIREBASE_HOST: HOST,

  FIREBASE_STAMPS: HOST + '/stamps',

  ActionTypes: keyMirror({
    SIGN_IN: null,
    ADD_STAMP: null,
    RECEIVE_AUTH_ERROR: null,
    RECEIVE_AUTH_USER: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
