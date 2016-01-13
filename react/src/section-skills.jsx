var React = require('react');
var Icon = require('./icon/icon');
var ProgressBar = require('./progress-bar/progress-bar');
var StyleSheet = require('react-style');

module.exports = React.createClass({
  render: function() {
    var children = [];
    for (var key in this.skills) {
      var skill = this.skills[key];
      skill.id = key;
      children.push(<div className="skill" key={key}><Icon iconClassName={skill.icon} styles={this.getPercentPosition(skill).position} />
        <h4>{skill.name}</h4>
        <ProgressBar type={skill.type} percent={skill.percent} />
      </div>);
    }
    
    return <div className={"panel panel-default " + this.props.className}>
      <Icon iconClassName={"icon-section black " + this.props.iconClassName} />
      <div className="col-md-11">
        <h2>{ this.props.title }</h2>
        <div className="skills">
          {children}
        </div>
      </div>
    </div>
  },
  getPercentPosition: function(skill) {
    var pos = skill.percent;
    pos = (95 - pos);
    
    var posStyle = StyleSheet.create({
      position: {
        marginRight: pos + '%'
      }
    });
    
    return posStyle;
  },
  skills: [
    {
      name: "Java",
      type: "success",
      percent: 80,
      icon: "java-logo-sm"
    },
    {
      name: "Javascript",
      type: "success",
      percent: 75,
      icon: "javascript-logo-sm"
    },
    {
      name: "NodeJS",
      type: "success",
      percent: 70,
      icon: "nodejs-logo-sm"
    },
    {
      name: "AngularJS",
      type: "success",
      percent: 60,
      icon: "angularjs-logo-sm"
    },
    {
      name: "React",
      type: "success",
      percent: 30,
      icon: "reactjs-logo-sm"
    }
  ]
});