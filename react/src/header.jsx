var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      title: "", 
      done: false
    }
  },
  render: function() {
    return <div className="input-group">
      <input 
        value={this.state.title}
        onChange={this.handleInputChange}
        type="text" 
        className="form-control" />
      <span className="input-group-btn">
        <button 
          onClick={this.handleClick} 
          className="btn btn-primary" 
          type="button">Add</button>
      </span>
    </div>
  },
  handleClick: function() {
    this.props.itemsStore.push({
      title: this.state.title,
      done: false
    });
    
    this.setState({
      title: "",
      done: false
    });
  },
  handleInputChange: function(event) {
    this.setState({
      title: event.target.value,
      done: false
    });
  }
})