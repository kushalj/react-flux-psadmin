window.$ = window.jQuery = require('jquery')
// require('bootstrap')

const React = require('react')
const ReactDOM = require('react-dom')
const Home = require('./components/homePage')

ReactDOM.render(<Home />, document.getElementById('app'))

