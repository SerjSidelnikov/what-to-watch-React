const enzyme = require(`enzyme`);
const Adapter = require(`enzyme-adapter-react-16`);

window.React = require(`react`);
window.ReactDOM = require(`react-dom`);
window.PropTypes = require(`prop-types`);

enzyme.configure({adapter: new Adapter()});
