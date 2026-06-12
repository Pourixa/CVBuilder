import { AddButton } from './addbutton'
import { SingleExps } from './singleExp'
import { Title } from './editTitle'
import { useState } from 'react'

const fields = [
  { label: 'Job', name: 'job', type: 'text', placeholder: 'Engineer' },
  { label: 'Company', name: 'company', type: 'text', placeholder: 'Microsoft' },
  { label: 'Start date', name: 'startDate', type: 'date', placeholder: '25/02/1998' },
  { label: 'End date', name: 'endDate', type: 'date', placeholder: '25/03/1998' }
]

function JobForm({ experiences, onExperienceChange , onExperienceAdd , onExperienceDelete}) {
    const [folded,setFolded] = useState(true);

    function handleFold ()
    {
      setFolded(!folded);
    }

  return <>
    <Title name = {"Experiences"} folded={folded} onToggle={handleFold}/>
    {(!folded && <div className="editExperience " >
            <AddButton addFunction = {onExperienceAdd}/>
      <SingleExps fields={fields} experiences = {experiences} onExperienceChange = {onExperienceChange} onExperienceDelete = {onExperienceDelete}/>
    </div>)}
  </>
}
export { JobForm }
