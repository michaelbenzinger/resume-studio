import React, { useState } from 'react';
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

export default function SkillsForm(props) {
  const { skills, setSkills } = props;

  let numSkillsFromProps = null;
  if (skills.skills3 || skills.category3) numSkillsFromProps = 3;
  else if (skills.skills2 || skills.category2) numSkillsFromProps = 2;
  else numSkillsFromProps = 1;

  const [numSkills, setNumSkills] = useState(numSkillsFromProps || 1);

  const [skillsTemp, setSkillsTemp] = useState(
    JSON.parse(JSON.stringify(skills))
  );

  const onSubmitForm = e => {
    e.preventDefault();
    const newSkills = {
      title: skillsTemp.title,
    };
    for (let i = 1; i <= numSkills; i++) {
      newSkills[`category${i}`] = skillsTemp[`category${i}`];
      newSkills[`skills${i}`] = skillsTemp[`skills${i}`];
    }
    setSkills(newSkills);
  };

  const handleChange = e => {
    const newSkills = JSON.parse(JSON.stringify(skillsTemp));
    newSkills[e.target.name] = e.target.value;
    setSkillsTemp(newSkills);
  };

  const addCategory = () => {
    setNumSkills(numSkills + 1);
  };

  const removeCategory = () => {
    setNumSkills(numSkills - 1);
  };

  return (
    <div className="skills-form resume-form">
      <h3>{skillsTemp.title}</h3>
      <Form onSubmit={onSubmitForm}>
        <FormGroup>
          <Label for="title">Section Title</Label>
          <Input
            name="title"
            type="text"
            onChange={handleChange}
            value={skillsTemp.title || ''}
          />
        </FormGroup>
        <FormGroup>
          <Label for="category1">Category 1 (Optional)</Label>
          <Input
            name="category1"
            type="text"
            onChange={handleChange}
            value={skillsTemp.category1 || ''}
          />
        </FormGroup>
        <FormGroup>
          <Label for="skills1">{skillsTemp.title}</Label>
          <Input
            name="skills1"
            type="textarea"
            onChange={handleChange}
            value={skillsTemp.skills1 || ''}
          />
        </FormGroup>
        {numSkills > 1 ? (
          <div>
            <FormGroup>
              <Label for="category2">Category 2 (Optional)</Label>
              <Input
                name="category2"
                type="text"
                onChange={handleChange}
                value={skillsTemp.category2 || ''}
              />
            </FormGroup>
            <FormGroup>
              <Label for="skills2">{skillsTemp.title}</Label>
              <Input
                name="skills2"
                type="textarea"
                onChange={handleChange}
                value={skillsTemp.skills2 || ''}
              />
            </FormGroup>
          </div>
        ) : (
          <div />
        )}
        {numSkills > 2 ? (
          <div>
            <FormGroup>
              <Label for="category3">Category 3 (Optional)</Label>
              <Input
                name="category3"
                type="text"
                onChange={handleChange}
                value={skillsTemp.category3 || ''}
              />
            </FormGroup>
            <FormGroup>
              <Label for="skills3">{skillsTemp.title}</Label>
              <Input
                name="skills3"
                type="textarea"
                onChange={handleChange}
                value={skillsTemp.skills3 || ''}
              />
            </FormGroup>
          </div>
        ) : (
          <div />
        )}
        {numSkills < 3 ? (
          <span>
            <Button
              className="me-2 mb-2"
              type="button"
              color="dark"
              onClick={addCategory}
            >
              Add Category
            </Button>
          </span>
        ) : (
          <span />
        )}
        {numSkills > 1 ? (
          <span>
            <Button
              className="me-2 mb-2"
              type="button"
              color="danger"
              onClick={removeCategory}
            >
              Remove Category
            </Button>
          </span>
        ) : (
          <span />
        )}
        <Button className="me-2 mb-2" type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}
