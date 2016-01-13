var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
  render: function() {
    return <div>
      { this.renderList() }
    </div>
  },
  renderList: function() {
    if (!this.props.items || (this.props.items && Object.keys(this.props.items).length === 0)) {
      return <h4>Add a todo to get started</h4>
    } else {
      var children = [];
      for (var key in this.props.items) {
        var item = this.props.items[key];
        item.id = key;
        children.push(<ListItem item={item} key={key} />);
      }
    }
    
    return children;
  }
});