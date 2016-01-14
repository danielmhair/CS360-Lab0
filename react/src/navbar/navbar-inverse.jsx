var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <nav id="navigation" className="navbar navbar-inverse navbar-static-top">
        <div className="navbar-header">
          <a href="/" id="title" className="navbar-brand">
            <h3 className="color-white">Daniel Hair</h3>
          </a>
        </div>
        <div collapse="isCollapsed" className="navbar-collapse collapse" id="navbar">
          <ul id="navbar-nav" className="nav navbar-nav">
            <li><a href="/CS360/lab0-resume/barebones">Home</a></li>
            <li className="active"><a href="/CS360/lab0-resume/react">Resume</a></li>
            <li><a href="/CS360/lab0-resume/barebones/city.html">Weather Forecast</a></li>
            <li><a href="/CS360/lab0-resume/barebones/currentweather.html">Today's Weather</a></li>
          </ul>
        </div>
        <div className="nav navbar-right">
          <span className="glyphicon glyphicon-menu-hamburger"></span>
        </div>
      </nav>
  }
});