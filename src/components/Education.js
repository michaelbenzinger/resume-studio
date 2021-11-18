export function isEmpty(obj) {
  let empty = true;
  Object.keys(obj).forEach(key => {
    if (obj[key]) empty = false;
  });
  return empty;
}

export default function Education(props) {
  const { education } = props;

  if (education.length > 0 && !isEmpty(education[0])) {
    return (
      <div>
        <hr />
        <h5>Education</h5>
        {education.map(program => (
          <div key={program.school} className="mt-2">
            <div className="job-top">
              <h3>{program.school}</h3>
              {program.startDate || program.endDate ? (
                <div>{program.startDate + ' – ' + program.endDate}</div>
              ) : (
                <div />
              )}
            </div>
            <h4>{program.degree}</h4>
            <div className="pre-wrap">{program.description}</div>
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
