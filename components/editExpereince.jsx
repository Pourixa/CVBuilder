import { AddButton } from './addbutton'
import { SingleExps } from './singleExp'
const fields = [
  { label: 'Job', name: 'job', type: 'text', placeholder: 'Engineer' },
  { label: 'Company', name: 'company', type: 'text', placeholder: 'Microsoft' },
  { label: 'Start date', name: 'startDate', type: 'date', placeholder: '25/02/1998' },
  { label: 'End date', name: 'endDate', type: 'date', placeholder: '25/03/1998' }
]

function JobForm({ experiences, onExperienceChange , onExperienceAdd , onExperienceDelete}) {
  return (
    <div className="editExperience">
            <AddButton addFunction = {onExperienceAdd}/>
      <SingleExps fields={fields} experiences = {experiences} onExperienceChange = {onExperienceChange} onExperienceDelete = {onExperienceDelete}/>

    </div>
  )
}
export { JobForm }
