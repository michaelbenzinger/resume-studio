import { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

export default function UpdateButtons(props) {
  const [visible, setVisible] = useState(true);

  const { activeForm, setActiveForm } = props;

  useEffect(() => {
    if (activeForm === null) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [activeForm]);

  return (
    <div>
      {visible ? (
        <div className="update-buttons">
          <Button
            className="mb-2"
            onClick={() => {
              setActiveForm('PersonalInfoForm');
            }}
            block
            color="primary"
          >
            Update Personal Info
          </Button>
          <Button
            className="mb-2"
            onClick={() => {
              setActiveForm('WorkHistoryForm');
            }}
            block
            color="primary"
          >
            Update Work History
          </Button>
          <Button
            className="mb-2"
            onClick={() => {
              setActiveForm('SkillsForm');
            }}
            block
            color="primary"
          >
            Update Skills
          </Button>
          <Button
            className="mb-2"
            onClick={() => {
              setActiveForm('EducationForm');
            }}
            block
            color="primary"
          >
            Update Education
          </Button>
        </div>
      ) : null}
    </div>
  );
}
