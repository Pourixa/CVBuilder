import { AddButton } from "./addbutton"
import { Title } from "./editTitle"
import { SingleEducation } from "./singleEducation"
import { useState } from "react"

const fields = [
  { label: 'Formation', name: 'formation', type: 'text', placeholder: 'Computer Science' },
  { label: 'Degree', name: 'degree', type: 'text', placeholder: 'Masters' },
  { label: 'University', name: 'university', type: 'text', placeholder: 'New York University' },
  { label: 'Start date', name: 'startDate', type: 'date', placeholder: '25/02/1998' },
  { label: 'End date', name: 'endDate', type: 'date', placeholder: '25/03/1998' }
]

function EducationForm({ educations, onEducationChange ,onEducationAdd , onEducationDelete}) {
     const [folded,setFolded] = useState(true);
 
 
  return (
    <>
    <Title name={"Educations"} folded={folded} onToggle={() => {setFolded(!folded)}}/>
    {!folded && <div className="editEducation">
      <AddButton addFunction={onEducationAdd}/>
      <SingleEducation educations= {educations} onEducationChange={onEducationChange} onEducationDelete = {onEducationDelete} fields= {fields}/>
    </div>}
  </>
  )
}

export { EducationForm }
