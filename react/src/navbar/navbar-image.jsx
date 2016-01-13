var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="image-header thumbnail">
    <div id={this.props.imageId} className="image-profile"></div>
      <div className="caption text-center" id="profile-caption">
        <h3 id="profile-name">Daniel Hair</h3>
        <p id="profile-sub-title">Application Developer</p>
      </div>
    </div>
  }
});