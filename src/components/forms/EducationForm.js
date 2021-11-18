import { useState } from 'react';
import { isEmpty } from '../WorkHistory';
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Button,
} from 'reactstrap';

export default function EducationForm(props) {
  const { education, setEducation } = props;

  const [educationTemp, setEducationTemp] = useState(
    JSON.parse(JSON.stringify(education))
  );

  const [page, setPage] = useState(0);

  const blankProgram = {
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    description: '',
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const filteredEducation = educationTemp.filter(
      program =>
        program.school ||
        program.degree ||
        program.startDate ||
        program.endDate ||
        program.description
    );
    if (filteredEducation.length === 0) {
      filteredEducation.push(blankProgram);
    }
    setEducation(filteredEducation);
  };

  const nextPage = () => {
    if (!educationTemp[page + 1]) {
      setEducationTemp([...educationTemp, blankProgram]);
    }
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };

  const deletePage = () => {
    const newEducationTemp = [];
    for (let i = 0; i < educationTemp.length; i++) {
      if (i !== page) {
        newEducationTemp.push(educationTemp[i]);
      }
    }
    if (newEducationTemp[0] === undefined) {
      newEducationTemp.push(blankProgram);
    }
    setEducationTemp(newEducationTemp);
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleChange = e => {
    const newEducation = JSON.parse(JSON.stringify(educationTemp));
    newEducation[page][e.target.name] = e.target.value;
    setEducationTemp(newEducation);
  };

  return (
    <div className="education-form resume-form">
      <h3>Education</h3>
      <Form onSubmit={onSubmitForm}>
        <FormText>Program {page + 1}</FormText>
        <FormGroup>
          <Label for="school">School/Organization</Label>
          <Input
            name="school"
            type="text"
            onChange={handleChange}
            value={educationTemp[page].school || ''}
          />
        </FormGroup>
        <FormGroup>
          <Label for="degree">Degree/Certification</Label>
          <Input
            name="degree"
            type="text"
            onChange={handleChange}
            value={educationTemp[page].degree || ''}
          />
        </FormGroup>
        <Row xs="1" sm="2">
          <Col>
            <FormGroup>
              <Label for="startDate">Start Date</Label>
              <Input
                name="startDate"
                type="text"
                onChange={handleChange}
                value={educationTemp[page].startDate || ''}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="endDate">End Date</Label>
              <Input
                name="endDate"
                type="text"
                onChange={handleChange}
                value={educationTemp[page].endDate || ''}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            onChange={handleChange}
            value={educationTemp[page].description || ''}
          />
        </FormGroup>
        <Button
          disabled={!page}
          onClick={prevPage}
          type="button"
          color="dark"
          className="me-2 mb-2"
        >
          Previous Program
        </Button>
        <Button
          onClick={nextPage}
          disabled={isEmpty(educationTemp[page])}
          type="button"
          color="dark"
          className="me-2 mb-2"
        >
          Next Program
        </Button>
        <Button className="me-2 mb-2" type="submit" color="primary">
          Submit
        </Button>
        <Button
          onClick={deletePage}
          disabled={isEmpty(educationTemp[page])}
          type="button"
          color="danger"
          className="me-2 mb-2"
        >
          Delete Program
        </Button>
      </Form>
    </div>
  );
}
