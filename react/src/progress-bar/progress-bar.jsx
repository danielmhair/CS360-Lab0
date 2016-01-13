var React = require('react');
var StyleSheet = require('react-style');

module.exports = React.createClass({
  render: function() {
    var progressBarWidth = StyleSheet.create({
        normal: {
            width: this.props.percent + '%',
        }
    });
    return <div className="progress">
      <div className={"progress-bar progress-bar-" + this.props.type} role="progressbar" aria-valuenow={this.props.percent} aria-valuemin="0" aria-valuemax="100" styles={progressBarWidth.normal}>
      <span className="sr-only">{this.props.percent}% Complete {this.props.type}</span>
      </div>
    </div>
  }
});