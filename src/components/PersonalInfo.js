export default function PersonalInfo(props) {
  const { personalInfo } = props;

  const contactProps = [
    personalInfo.website,
    personalInfo.email,
    personalInfo.phone,
  ].filter(item => item);

  return (
    <div>
      <h2>{personalInfo.firstName + ' ' + personalInfo.lastName}</h2>
      <div>{personalInfo.tagline}</div>
      <div>{contactProps.join(personalInfo.joinChar)}</div>
    </div>
  );
}
