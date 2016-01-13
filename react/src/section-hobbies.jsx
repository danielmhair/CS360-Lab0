var React = require('react');
var Icon = require('./icon/icon');
var ProgressBar = require('./progress-bar/progress-bar');

module.exports = React.createClass({
  render: function() {
    var children = [];
    console.log("in");
    for (var key in this.icons) {
      var icon = this.icons[key];
      children.push(
        <div className="" key={key}>
          <Icon iconClassName={"icon icon-group " +icon} />
        </div>
      );
    }
    
    return <div className={"panel panel-default icons " + this.props.className}>
    <h2>My Hobbies</h2>
        {children}
      </div>
  },
  icons: [
    "icon-bg glyphicon glyphicon-film",
    "icon-bg glyphicon glyphicon-road",
    "icon-bg glyphicon glyphicon-plane",
    "icon-bg glyphicon glyphicon-grain",
    "icon-bg glyphicon glyphicon-envelope"
  ]
});