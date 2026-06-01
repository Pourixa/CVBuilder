import { Date } from './date'

function Education({ formation, degree, university, startDate, endDate }) {
  return (
    <div className="education">
      <div className="formDate">
        <h3>{formation}</h3>
        <Date startDate={startDate} endDate={endDate} />
      </div>
      <div className="uniDeg">
        <h3>{university}</h3>
        <h3>{degree}</h3>
      </div>
    </div>
  )
}

function Educations({ educations }) {
  return (
    <div className="educations">
      <h2>EDUCATION</h2>
      {educations.map(item => (
        <Education key={item.id} {...item} />
      ))}
    </div>
  )
}

export { Educations }
