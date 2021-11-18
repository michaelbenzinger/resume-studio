import React from 'react';
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

export default function PersonalInfoForm(props) {
  const { personalInfo, setPersonalInfo } = props;

  const onSubmitForm = e => {
    e.preventDefault();
    const { firstName, lastName, tagline, email, phone, website } = e.target;
    setPersonalInfo({
      firstName: firstName.value,
      lastName: lastName.value,
      tagline: tagline.value,
      email: email.value,
      phone: phone.value,
      website: website.value,
      joinChar: personalInfo.joinChar,
    });
  };

  return (
    <div className="personal-info-form resume-form">
      <h3>Peronsal Info</h3>
      <Form onSubmit={onSubmitForm}>
        <Label for="name">Full Name</Label>
        <Row xs="1" sm="2">
          <Col>
            <FormGroup>
              <Input
                name="firstName"
                type="text"
                defaultValue={personalInfo.firstName || ''}
              />
              <FormText>First</FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                name="lastName"
                type="text"
                defaultValue={personalInfo.lastName || ''}
              />
              <FormText>Last</FormText>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="tagline">Tagline</Label>
          <Input
            name="tagline"
            type="textarea"
            defaultValue={personalInfo.tagline || ''}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            name="email"
            type="text"
            defaultValue={personalInfo.email || ''}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input
            name="phone"
            type="text"
            defaultValue={personalInfo.phone || ''}
          />
        </FormGroup>
        <FormGroup>
          <Label for="website">Website</Label>
          <Input
            name="website"
            type="text"
            defaultValue={personalInfo.website || ''}
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}
