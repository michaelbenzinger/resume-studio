export default function Preview(props) {
  const { info } = props;

  const contactProps = [info.website, info.email, info.phone].filter(
    item => item
  );

  return (
    <div className="mt-4 preview-window">
      <h2>{info.firstName + ' ' + info.lastName}</h2>
      <div>{info.tagline}</div>
      <div>{contactProps.join(' • ')}</div>
    </div>
  );
}
