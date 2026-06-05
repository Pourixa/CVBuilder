import { SingleEducation } from "./singleEducation"

const fields = [
  { label: 'Formation', name: 'formation', type: 'text', placeholder: 'Computer Science' },
  { label: 'Degree', name: 'degree', type: 'text', placeholder: 'Masters' },
  { label: 'University', name: 'university', type: 'text', placeholder: 'New York University' },
  { label: 'Start date', name: 'startDate', type: 'date', placeholder: '25/02/1998' },
  { label: 'End date', name: 'endDate', type: 'date', placeholder: '25/03/1998' }
]

function EducationForm({ educations, onEducationChange }) {
  return (
    <div className="editEducation">
      <SingleEducation educations= {educations} onEducationChange={onEducationChange} fields= {fields}/>
    </div>
  )
}

export { EducationForm }
