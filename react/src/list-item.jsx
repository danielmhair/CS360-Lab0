var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://blinding-heat-4585.firebaseio.com/';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      title: this.props.item.title,
      done: this.props.item.done,
      inputChanged: false
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + "/items/" + this.props.item.id );
  },
  render: function() {
    return <div className="input-group">
      <span className="input-group-addon">
        <input type="checkbox" value={this.state.done} onChange={this.handleCheckboxChange} />
      </span>
      <input type="text"
            className={"form-control" + (this.state.done ? " completed" : "")} 
            disabled={this.state.done}
            value={this.state.title}
            onChange={this.handleInputChange}/>
      <span className="input-group-btn">
        {this.changesButtons()}
        <button className="btn btn-danger" onClick={this.handleDeleteClick}>
          Delete
        </button>
      </span>
    </div>
  },
  changesButtons: function() {
    if (!this.state.inputChanged) {
      return null
    } else {
      return [
        <button className="btn btn-primary" onClick={this.handleSaveClick}>Save</button>,
        <button className="btn btn-warning" onClick={this.handleUndoClick}>Undo</button>
      ]
    }
  },
  handleInputChange: function(event) {
    this.setState({
      title: event.target.value, 
      inputChanged: true
    });
  },
  handleCheckboxChange: function(event) {
    var update = {done: event.target.checked};
    this.setState(update);
    this.fb.update(update);
  },
  handleDeleteClick: function() {
    this.fb.remove();
  },
  handleUndoClick: function() {
    this.setState({
      title: this.props.item.title,
      inputChanged: false
    })
  },
  handleSaveClick: function() {
    this.fb.update({title: this.state.title});
    this.setState({inputChanged: false});
  }
});