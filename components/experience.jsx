import { Date } from './date'

function Experience({ job, company, startDate, endDate, achievements }) {
  return (
    <div className="experience">
      <div className="jobDate">
        <h3>{job}</h3>
        <Date startDate={startDate} endDate={endDate} />
      </div>
      <h4>{company}</h4>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  )
}

function Experiences({ experiences }) {
  return <>
    {experiences.length > 0 && 
      <div className="experiences">
        <h2>EXPERIENCE</h2>
        {experiences.map(item => (
          <Experience key={item.id} {...item} />
        ))}
      </div>
   }
 </>
}

export { Experiences }
