var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var Footer = require('./footer/footer');
var ProfileHeader = require('./navbar/navbar-profile')
var SectionGeneral = require('./section-general')
var SectionSkills = require('./section-skills')
var SectionContact = require('./section-contact');
var SectionHobbies = require('./section-hobbies');
var SectionHistory = require('./section-history');
var EducationClasses = require('./education-classes');
var List = require('./list');
var rootUrl = 'https://blinding-heat-4585.firebaseio.com/';

var Main = React.createClass({
  render: function() {
    return <div className="container">
      <div className="row">
        <SectionGeneral className="col-lg-12 col-md-12 col-sm-12 col-xs-12" iconClassName="glyphicon glyphicon-user" title="About Me" subTitle="Hi! I'm Dan. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>

        <SectionContact className="contact col-lg-6 col-md-12 col-sm-12 col-xs-12" iconClassName="glyphicon glyphicon-list-alt" title="Contact"/>
        <SectionHistory className="experience col-lg-6 col-md-12 col-sm-12 col-xs-12" iconClassName="glyphicon glyphicon-list" historyItems={this.experience} title="Experience" />
        <SectionSkills className="mySkills col-lg-6 col-md-12 col-sm-12 col-xs-12" iconClassName="glyphicon glyphicon-console" title="My Skills"/>
        <SectionHistory className="education col-lg-6 col-md-12 col-sm-12 col-xs-12" iconClassName="glyphicon glyphicon-education" historyItems={this.education} title="Education" />
        <SectionHobbies className="hobbies col-lg-6 col-md-12 col-sm-12 col-xs-12" iconClassName="glyphicon glyphicon-list-alt" title="Hobbies"/>
      </div>
    </div>
  },
  experience: [
    {
      job: "Application Developer",
      business: "Raizzle, Inc",
      date: "2015 - Present",
      description: function() {
        return <ul className="resume-list">
            <li>MEAN Stack Development</li>
            <li>Agile Development</li>
          </ul>
      }
    },
    {
      job: "Software Developer Intern",
      business: "FamilySearch",
      date: "2015 - Present",
      description: function() {
        return <ul className="resume-list">
            <li>Developed software for over 3 million users worldwide</li>
            <li>Java, Spring, SQL using Maven and IntelliJ</li>
            <li>REST Architecture - Created a Research Log API: https://familysearch.org/research-log</li>
            <li>Agile Development</li>
          </ul>
      }
    },
    {
      job: "Drupal Web Developer",
      business: "Brigham Young University",
      date: "2015 - Present",
      description: function() {
        return <ul className="resume-list">
            <li>Developed/Maintaining more than 5 responsive websites in Drupal and Wordpress</li>
          </ul>
      }
    }
  ],
  education: [
    {
      job: "Bachelors of Computer Science",
      business: "Brigham Young University",
      date: "April 2017",
      description: function() {
        var classesCompleted = [
          {
            title: "CS 240",
            languages: ["Java", "SQL"],
            description: "Advanced software development with an object-oriented focus. Development and testing of several 1500 to 2000 line modules from formal specifications. Java environment."
          },
          {
            title: "CS 312",
            subtitle: "Algorithm Analysis",
            languages: ["C#"],
            description: "Analysis of algorithms from both a practical (programming) and theoretical (mathematical) point of view.  Understanding of algorithm efficiency in terms of both time and space."
          },
          {
            title: "CS 340",
            languages: ["Java"],
            description: "Principles of software design, design patterns, design representation, refactoring.  Principles of software quality assurance and testing.  Development and testing of tools."
          },
          {
            title: "CS 360",
            languages: ["HTML", "CSS", "Javascript", "NodeJS", "AngularJS", "MongoDB"],
            description: "Internet application programming, including client-server and web applications."
          }
        ];
        
        var tooltipText = function() {
          return <h2>Hello</h2>
        };
        
        return <div className="description">
            <ul className="resume-list">
              <li>GPA: 3.60</li>
            </ul>
            <EducationClasses title="Classes Completed" classesCompleted={classesCompleted} />
          </div>
      }
    }
  ]
});


var resume = React.createElement(ProfileHeader, {});
ReactDOM.render(resume, document.querySelector('header'));

var section = React.createElement(Main, {});
ReactDOM.render(section, document.querySelector('.section'));

var footer = React.createElement(Footer, {});
ReactDOM.render(footer, document.querySelector('footer'));
