// File that enables react_rails to prerender all the components
// You need to restart the server if any changes are made to
//   this file for them to show up in the prerendered html
//   Also, don't be afraid of using `rake tmp:clear`

require('../../../node_modules/traceur/bin/traceur-runtime.js');
window.React = require('react');

window.Blink = require('./components/Blink');
