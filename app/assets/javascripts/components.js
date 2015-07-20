// File that enables react_rails to prerender all the components
// You need to restart the server if any changes are made to
//   this file for them to show up in the prerendered html
//   Also, don't be afraid of using `rake tmp:clear`

require('babel-core/register');

// React_ujs needs all components to be available on window.
// Since manually requiring is too much work, we just use this globify shortcut
Object.assign(window, require('./components/*.js', {mode: 'hash'}));
