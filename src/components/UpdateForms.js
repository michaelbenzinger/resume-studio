import PersonalInfoForm from './forms/PersonalInfoForm';
import WorkHistoryForm from './forms/WorkHistoryForm';
import SkillsForm from './forms/SkillsForm';
import EducationForm from './forms/EducationForm';

export default function UpdateForms(props) {
  const {
    personalInfo,
    setPersonalInfo,
    workHistory,
    setWorkHistory,
    skills,
    setSkills,
    education,
    setEducation,
    activeForm,
  } = props;

  switch (activeForm) {
    case 'PersonalInfoForm':
      return (
        <PersonalInfoForm
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
      );
    case 'WorkHistoryForm':
      return (
        <WorkHistoryForm
          workHistory={workHistory}
          setWorkHistory={setWorkHistory}
        />
      );
    case 'SkillsForm':
      return <SkillsForm skills={skills} setSkills={setSkills} />;
    case 'EducationForm':
      return (
        <EducationForm education={education} setEducation={setEducation} />
      );
    default:
      return <div></div>;
  }
}
