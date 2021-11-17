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

export default function Info(props) {
  const { update } = props;

  const onSubmitForm = e => {
    e.preventDefault();
    const { firstName, lastName, tagline, email, phone, website } = e.target;
    update({
      firstName: firstName.value,
      lastName: lastName.value,
      tagline: tagline.value,
      email: email.value,
      phone: phone.value,
      website: website.value,
    });
  };

  return (
    <div className="mt-4">
      <h3>Peronsal Info</h3>
      <Form onSubmit={onSubmitForm}>
        <Label for="name">Full Name</Label>
        <Row xs="1" sm="2">
          <Col>
            <FormGroup>
              <Input name="firstName" type="text" />
              <FormText>First</FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input name="lastName" type="text" />
              <FormText>Last</FormText>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="tagline">Tagline</Label>
          <Input name="tagline" type="textarea" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input name="email" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input name="phone" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="website">Website</Label>
          <Input name="website" type="text" />
        </FormGroup>
        <Button type="submit" color="primary">
          Update
        </Button>
      </Form>
    </div>
  );
}
