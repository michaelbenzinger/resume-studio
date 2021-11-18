import PersonalInfo from './PersonalInfo';
import WorkHistory from './WorkHistory';
import Skills from './Skills';
import Education from './Education';

export default function Preview(props) {
  const { personalInfo, workHistory, skills, education } = props;

  return (
    <div className="preview-window">
      <PersonalInfo personalInfo={personalInfo} />
      <WorkHistory workHistory={workHistory} />
      <Skills skills={skills} />
      <Education education={education} />
    </div>
  );
}
