var React = require('react');
var Icon = require('./icon/icon');

module.exports = React.createClass({
  render: function() {
    var children = [];
    var items = this.props.historyItems;
    for (var key in items) {
      var item = items[key];
      item.id = key;
      children.push(
        <div className="history-item" key={key}>
          <h3 className="resume-title">{item.job}</h3>
          <div className="history-details"><Icon iconClassName="icon-history glyphicon glyphicon-briefcase" /><span className="business">{item.business}</span><Icon iconClassName="icon-history glyphicon glyphicon-calendar" /><span className="date">{item.date}</span></div>
          {item.description()}
        </div>
      );
    }
    
    return <div className={"panel panel-default " + this.props.className}>
      <Icon iconClassName={"icon-section black " + this.props.iconClassName} />
      <div className="col-md-12">
        <h2>{ this.props.title }</h2>
        <div className="history-items">
          {children}
        </div>
      </div>
    </div>
  }
});