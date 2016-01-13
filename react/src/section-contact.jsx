var React = require('react');
var Icon = require('./icon/icon');
var ProgressBar = require('./progress-bar/progress-bar');
var StyleSheet = require('react-style');

module.exports = React.createClass({
  render: function() {
    var children = [];
    for (var key in this.items) {
      var item = this.items[key];
      item.id = key;
      children.push(
        <div className="item alert" key={key}>
        <Icon iconClassName={item.icon} />
          <p>{item.text}</p>
        </div>
      );
    }
    
    return <div className={"panel panel-default " + this.props.className}>
      <Icon iconClassName={"icon-section black " + this.props.iconClassName} />
      <div className="col-md-11">
        <h2>{ this.props.title }</h2>
        <div className="items">
          {children}
        </div>
      </div>
    </div>
  },
  items: [
    {
      icon: "icon-contact glyphicon glyphicon-envelope",
      text: "danielmhair@gmail.com"
    },
    {
      icon: "icon-contact glyphicon glyphicon-phone",
      text: "(385)439-3214"
    },
    {
      icon: "icon-contact glyphicon glyphicon-globe",
      text: "danielmhair.com"
    },
    {
      icon: "icon-contact glyphicon glyphicon-map-marker",
      text: "2052 E. Fall Street, Eagle Mountain, Utah 84005"
    }
  ]
});