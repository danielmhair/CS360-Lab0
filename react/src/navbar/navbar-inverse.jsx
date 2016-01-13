var React = require('react');
var Icon = require('../icon/icon');

module.exports = React.createClass({
  render: function() {
    return <nav id="navigation" className="navbar navbar-inverse navbar-static-top">
        <div className="navbar-header">
          <button type="button" className="collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
          </button>
        </div>
        <div collapse="isCollapsed" className="navbar-collapse collapse" id="navbar">
          <ul className="nav navbar-nav">
          <li>
            <div className="home-button">
              <a href="#/">
                <Icon iconClassName="icon-home glyphicon glyphicon-home" />
                Home
              </a>
            </div>
          </li>
          </ul>
        </div>
      </nav>
  }
});