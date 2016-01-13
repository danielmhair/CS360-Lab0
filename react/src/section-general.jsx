var React = require('react');
var Icon = require('./icon/icon');

module.exports = React.createClass({
  render: function() {
    return <div className={"panel panel-default " + this.props.className}>
    <Icon iconClassName={"icon-section black " + this.props.iconClassName} />
      <div className="col-md-11">
      <h2>{ this.props.title }</h2>
      <p>{ this.props.subTitle }</p>
      </div>
    </div>
  }
});