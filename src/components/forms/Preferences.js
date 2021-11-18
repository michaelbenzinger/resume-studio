import { useState } from 'react';
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

export default function Preferences(props) {
  const { preferences, setPreferences } = props;

  const changeFont = font => {
    let newFont = font;
    if (font === 'Default') {
      newFont =
        'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
    }
    if (font === 'Helvetica') {
      newFont = 'Helvetica, Arial, sans-serif';
    }
    document.querySelector('.preview-window').style.fontFamily = newFont;
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const newPreferences = {
      font: e.target.font.value,
    };
    setPreferences(newPreferences);
  };

  return (
    <div className="preferences-form resume-form">
      <h3>Preferences</h3>
      <Form onSubmit={onSubmitForm}>
        <FormGroup>
          <Label for="font">Font</Label>
          <Input
            name="font"
            type="select"
            onChange={e => {
              changeFont(e.target.value);
            }}
            defaultValue={preferences.font || ''}
          >
            <option>Default</option>
            <option>Helvetica</option>
            <option>Inter</option>
            <option>Lato</option>
            <option>Open Sans</option>
            <option>Roboto</option>
            <option>Source Sans Pro</option>
          </Input>
        </FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
