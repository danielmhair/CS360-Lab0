var React = require('react');

module.exports = React.createClass({
  render: function() {
  return <div className="icon-wrapper">
  <span className={"icon " + this.props.iconClassName} styles={this.props.styles}></span>
    </div>
  }
});