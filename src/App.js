import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Navigation from './components/Navigation';
import UpdateButtons from './components/UpdateButtons';
import UpdateForms from './components/UpdateForms';
import Preview from './components/Preview';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'Shaggy',
    lastName: 'Rogers',
    tagline: 'Detective and Cowardly Slacker',
    email: 'shaggy@scoobydoo.com',
    phone: '(903) 412-3375',
    website: '',
    joinChar: ' • ',
  });

  const [workHistory, setWorkHistory] = useState([
    {
      employer: 'Mystery Incorporated',
      position: 'Co-Lead Detective',
      startDate: 'September 1969',
      endDate: 'Current',
      description:
        'Useful in ferreting out monsters and ghosts\nOccasionally has a running speed faster than Scooby',
    },
    {
      employer: 'The Daily Babbler',
      position: 'Junior Paper Boy',
      startDate: 'September 1988',
      endDate: 'July 1989',
      description:
        'Got up early (sometimes) to deliver the daily paper route\nAmbushed by a green ghost who stole the bike',
    },
  ]);

  const [skills, setSkills] = useState({
    title: 'Skills',
    category1: 'Skills and Abilities',
    skills1: `Acting as live bait for traps and providing necessary distractions
Unique abilities in disguise and ventriliquism
Flying planes and riding bikes
Playing the guitar and eating lots of snacks`,
  });

  const [education, setEducation] = useState([
    {
      school: 'Coolsville High School',
      startDate: 'September 1988',
      endDate: 'May 1992',
      description:
        'The best gymnast in school, according to Daphne Blake\nMotivated and encouraged by Scooby Snacks',
    },
  ]);

  const [preferences, setPreferences] = useState({
    font: 'Default',
  });

  const [activeForm, setActiveForm] = useState(null);

  useEffect(() => {
    setActiveForm(null);
  }, [personalInfo, workHistory, skills, education, preferences]);

  return (
    <div className="App">
      <Navigation title="Resume Studio" />
      <Container className="mt-4">
        <Row xs="1" md="2">
          <Col className="mb-4 button-col">
            <UpdateButtons
              activeForm={activeForm}
              setActiveForm={setActiveForm}
            />
            <UpdateForms
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
              workHistory={workHistory}
              setWorkHistory={setWorkHistory}
              skills={skills}
              setSkills={setSkills}
              education={education}
              setEducation={setEducation}
              preferences={preferences}
              setPreferences={setPreferences}
              activeForm={activeForm}
            />
          </Col>
          <Col className="preview-col">
            <Preview
              personalInfo={personalInfo}
              workHistory={workHistory}
              skills={skills}
              education={education}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
