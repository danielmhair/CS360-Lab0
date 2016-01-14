var React = require('react');
var Icon = require('./icon/icon')
var Tooltip = require('./tooltip');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      show: false
    }
  },
  render: function() {
    return <div className="panel panel-success">
      <div onClick={this.handleClick} className="panel-heading">
        <div onClick={this.handleClick} className="panel-title">{this.props.title}<span className="icon-panel glyphicon glyphicon-check"></span></div>
      </div>
      {this.body()}
    </div>
  },
  handleClick: function() {
    this.setState({ show: !this.state.show });
  },
  body: function() {
    if (this.state.show) {
      var children = [];
      var classes = this.props.classesCompleted;
      console.log(classes);
      for (var key in classes) {
        var item = classes[key];
        item.id = key;
        children.push(
        <div className="btn-group" role="group" key={key}>
            <button type="button" className="btn btn-default">{item.title}</button>
            <Tooltip tooltipText={item.description} />
          </div>
        );
      }
      
      return <div className="panel-body">
          <div className="btn-group btn-group-justified" role="group" aria-label="">
            {children}
          </div>
        </div>
    } else {
      return;
    }
  }
});