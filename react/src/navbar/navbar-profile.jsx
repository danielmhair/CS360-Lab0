var React = require('react');
var NavBarInverse = require('./navbar-inverse');
var ProfileImage = require('./navbar-image');

module.exports = React.createClass({
  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },
  render: function() {
    return <div id="header" className="header">
      <NavBarInverse />
      <ProfileImage imageId="profile-image"/>
    </div>
  },
  handleScroll: function() {
    var profileImage = document.getElementById("profile-image");
    var profileCaption = document.getElementById("profile-caption");
    if (window.scrollY > 30) {
      if (!this.hasClass(profileImage, "nameOnly")) {
        profileImage.classList.add("nameOnly");
        profileCaption.classList.add("nameOnly");
      }
    } else {
      profileImage.classList.remove("nameOnly");
      profileCaption.classList.remove("nameOnly");
    }
  },
  hasClass: function(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
  }
});