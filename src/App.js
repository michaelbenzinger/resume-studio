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
    firstName: 'Michael',
    lastName: 'Benzinger',
    tagline: 'Frontend Web Developer',
    email: 'michael@benzinger.co',
    phone: '(111) 222-3333',
    website: 'http://benzinger.co',
    joinChar: ' • ',
  });

  const [workHistory, setWorkHistory] = useState([
    {
      employer: 'AllState Corporation',
      position: 'Web Developer',
      startDate: 'March 2021',
      endDate: 'Current',
      description:
        'Developed novel user experiences for various web applications',
    },
  ]);

  const [skills, setSkills] = useState({
    title: 'Skills',
    category1: 'Technical',
    skills1: 'Microsoft Office, Microsoft Excel\nHTML, CSS, JavaScript',
  });

  const [education, setEducation] = useState({});

  const [activeForm, setActiveForm] = useState(null);

  useEffect(() => {
    setActiveForm(null);
  }, [personalInfo, workHistory, skills, education]);

  return (
    <div className="App">
      <Navigation title="Resume Studio" />
      <Container className="mt-4">
        <Row sm="1" md="2">
          <Col className="mb-4">
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
              activeForm={activeForm}
            />
          </Col>
          <Col>
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
