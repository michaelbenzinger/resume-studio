import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Navigation from './components/Navigation';
import UpdateButtons from './components/UpdateButtons';
import Info from './components/Info';
import Preview from './components/Preview';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

function App() {
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    tagline: '',
    email: '',
    phone: '',
    website: '',
  });

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <div className="App">
      <Navigation title="Resume Studio" />
      <Container>
        <Row sm="1" md="2">
          <Col>
            <UpdateButtons />
            <Info update={setInfo} />
          </Col>
          <Col>
            <Preview info={info} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
