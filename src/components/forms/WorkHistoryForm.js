import React, { useState } from 'react';
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

export default function WorkHistoryForm(props) {
  const { workHistory, setWorkHistory } = props;

  const [workHistoryTemp, setWorkHistoryTemp] = useState(
    JSON.parse(JSON.stringify(workHistory))
  );

  const [page, setPage] = useState(0);

  const blankJob = {
    employer: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const filteredWorkHistory = workHistoryTemp.filter(
      job =>
        job.employer ||
        job.position ||
        job.startDate ||
        job.endDate ||
        job.description
    );
    if (filteredWorkHistory.length === 0) {
      filteredWorkHistory.push(blankJob);
    }
    setWorkHistory(filteredWorkHistory);
  };

  const nextPage = () => {
    if (!workHistoryTemp[page + 1]) {
      setWorkHistoryTemp([...workHistoryTemp, blankJob]);
    }
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };

  const deletePage = () => {
    const newWorkHistoryTemp = [];
    for (let i = 0; i < workHistoryTemp.length; i++) {
      if (i !== page) {
        newWorkHistoryTemp.push(workHistoryTemp[i]);
      }
    }
    if (newWorkHistoryTemp[0] === undefined) {
      newWorkHistoryTemp.push(blankJob);
    }
    setWorkHistoryTemp(newWorkHistoryTemp);
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleChange = e => {
    const newWorkHistory = JSON.parse(JSON.stringify(workHistoryTemp));
    newWorkHistory[page][e.target.name] = e.target.value;
    setWorkHistoryTemp(newWorkHistory);
  };

  return (
    <div className="work-history-form resume-form">
      <h3>Work History</h3>
      <Form onSubmit={onSubmitForm}>
        <FormText>Job {page + 1}</FormText>
        <FormGroup>
          <Label for="employer">Employer</Label>
          <Input
            name="employer"
            type="text"
            onChange={handleChange}
            value={workHistoryTemp[page].employer || ''}
          />
        </FormGroup>
        <FormGroup>
          <Label for="position">Position</Label>
          <Input
            name="position"
            type="text"
            onChange={handleChange}
            value={workHistoryTemp[page].position || ''}
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
                value={workHistoryTemp[page].startDate || ''}
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
                value={workHistoryTemp[page].endDate || ''}
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
            value={workHistoryTemp[page].description || ''}
          />
        </FormGroup>
        <Button
          disabled={!page}
          onClick={prevPage}
          type="button"
          color="dark"
          className="me-2 mb-2"
        >
          Previous Job
        </Button>
        <Button
          onClick={nextPage}
          disabled={isEmpty(workHistoryTemp[page])}
          type="button"
          color="dark"
          className="me-2 mb-2"
        >
          Next Job
        </Button>
        <Button className="me-2 mb-2" type="submit" color="primary">
          Submit
        </Button>
        <Button
          onClick={deletePage}
          disabled={isEmpty(workHistoryTemp[page])}
          type="button"
          color="danger"
          className="me-2 mb-2"
        >
          Delete Job
        </Button>
      </Form>
    </div>
  );
}
