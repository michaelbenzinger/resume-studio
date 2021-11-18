import { Container, Row, Col } from 'reactstrap';

export default function Skills(props) {
  const { skills } = props;

  let numSkills = null;
  if (skills.skills3 || skills.category3) numSkills = 3;
  else if (skills.skills2 || skills.category2) numSkills = 2;
  else numSkills = 1;

  if (skills.skills1 || skills.category1) {
    return (
      <Container fluid="true">
        <hr />
        <h5 className="skills-title">{skills.title}</h5>
        <Row xs={1} sm={numSkills}>
          <Col>
            <h4 className="skills-category">{skills.category1}</h4>
            <p className="pre-wrap skills-skills">{skills.skills1}</p>
          </Col>
          {skills.skills2 || skills.category2 ? (
            <Col>
              <h4 className="skills-category">{skills.category2}</h4>
              <p className="pre-wrap skills-skills">{skills.skills2}</p>
            </Col>
          ) : (
            <div />
          )}
          {skills.skills3 || skills.category3 ? (
            <Col>
              <h4 className="skills-category">{skills.category3}</h4>
              <p className="pre-wrap skills-skills">{skills.skills3}</p>
            </Col>
          ) : (
            <div />
          )}
        </Row>
      </Container>
    );
  } else {
    return <div />;
  }
}
