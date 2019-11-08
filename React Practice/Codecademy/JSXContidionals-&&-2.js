import React from 'react';
import ReactDOM from 'react-dom';

const randomSkillGenerator = Math.random() < 0.5 ? true : false;

const whatAreYourSkills = (

  <div>
    <h1>My skills are:</h1>
    <p>Leadership</p>
    { !randomSkillGenerator && <p>Data Analytics</p>}
    { !randomSkillGenerator && <p>Python</p>}
    { !randomSkillGenerator && <p>Google Cloud</p>}
    { !randomSkillGenerator && <p>Data Science</p>}
    { randomSkillGenerator && <p>HTML</p>}
    { randomSkillGenerator && <p>CSS</p>}
    { randomSkillGenerator && <p>JavaScript</p>}
    { randomSkillGenerator && <p>React.js</p>}
    { randomSkillGenerator && <p>Node.js</p>}
    <p>Git</p>
    { randomSkillGenerator && <p>Command Line</p>}

  </div>
);

ReactDOM.render(whatAreYourSkills, document.getElementById('app'));
