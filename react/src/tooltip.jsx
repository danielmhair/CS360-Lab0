var React = require('react');

module.exports = React.createClass({

  render: function() {
    return <div className="tooltip-wrapper">
      <div className="tooltip">{this.props.tooltipText}</div>
    </div>
  }

});