var React = require('react');
var NavBarInverse = require('./navbar-inverse');
var ProfileImage = require('./navbar-image');

module.exports = React.createClass({
  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScrollAndResize);
    window.addEventListener('resize', this.handleScrollAndResize);
    //Set the initial state
    this.handleScrollAndResize();
  },
  render: function() {
    return <div id="header" className="header">
      <NavBarInverse />
      <ProfileImage imageId="profile-image"/>
    </div>
  },
  handleScrollAndResize: function() {
    var profileImage = document.getElementById("profile-image");
    var profileCaption = document.getElementById("profile-caption");
    var title = document.getElementById("title");
    var navbarBrand = document.getElementById("navbar-nav");
    var navigation = document.getElementById("navigation");
    if (window.scrollY > 30 || window.innerWidth < 1080) {
      if (!this.hasClass(profileImage, "nameOnly")) {
        profileImage.classList.add("nameOnly");
        profileCaption.classList.add("nameOnly");
        title.classList.add("nameOnly");
        navbarBrand.classList.add("nameOnly");
        navigation.classList.add("nameOnly");
      }
    } else {
      profileImage.classList.remove("nameOnly");
      profileCaption.classList.remove("nameOnly");
      title.classList.remove("nameOnly");
      navbarBrand.classList.remove("nameOnly");
      navigation.classList.remove("nameOnly");
      document.getElementById("navbar").classList.remove("in");
    }
  },
  hasClass: function(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
  },
  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScrollAndResize);
    window.removeEventListener('resize', this.handleScrollAndResize);
  },
});