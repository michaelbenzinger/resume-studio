import PersonalInfoForm from './forms/PersonalInfoForm';
import WorkHistoryForm from './forms/WorkHistoryForm';
import SkillsForm from './forms/SkillsForm';
import EducationForm from './forms/EducationForm';
import Preferences from './forms/Preferences';

export default function UpdateForms(props) {
  const {
    personalInfo,
    setPersonalInfo,
    workHistory,
    setWorkHistory,
    skills,
    setSkills,
    education,
    preferences,
    setPreferences,
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
    case 'Preferences':
      return (
        <Preferences
          preferences={preferences}
          setPreferences={setPreferences}
        />
      );
    default:
      return <div></div>;
  }
}
