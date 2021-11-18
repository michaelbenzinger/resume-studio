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
  const { info, setInfo } = props;

  const onSubmitForm = e => {
    e.preventDefault();
    const { firstName, lastName, tagline, email, phone, website } = e.target;
    setInfo({
      firstName: firstName.value,
      lastName: lastName.value,
      tagline: tagline.value,
      email: email.value,
      phone: phone.value,
      website: website.value,
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
                value={info.firstName || null}
              />
              <FormText>First</FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                name="lastName"
                type="text"
                value={info.lastName || null}
              />
              <FormText>Last</FormText>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="tagline">Tagline</Label>
          <Input name="tagline" type="textarea" value={info.tagline || null} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input name="email" type="text" value={info.email || null} />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input name="phone" type="text" value={info.phone || null} />
        </FormGroup>
        <FormGroup>
          <Label for="website">Website</Label>
          <Input name="website" type="text" value={info.website || null} />
        </FormGroup>
        <Button type="submit" color="primary">
          Update
        </Button>
      </Form>
    </div>
  );
}
