export function isEmpty(obj) {
  let empty = true;
  Object.keys(obj).forEach(key => {
    if (obj[key]) empty = false;
  });
  return empty;
}

export default function WorkHistory(props) {
  const { workHistory } = props;

  if (workHistory.length > 0 && !isEmpty(workHistory[0])) {
    return (
      <div>
        <hr />
        <h5>Work History</h5>
        {workHistory.map(job => (
          <div key={job.employer} className="mt-2">
            <div className="job-top">
              <h3>{job.position}</h3>
              {job.startDate || job.endDate ? (
                <div>{job.startDate + ' – ' + job.endDate}</div>
              ) : (
                <div />
              )}
            </div>
            <h4>{job.employer}</h4>
            <div className="pre-wrap">{job.description}</div>
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
