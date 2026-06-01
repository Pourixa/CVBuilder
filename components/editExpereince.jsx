import { Input } from './input'

const fields = [
  { label: 'Job', name: 'job', type: 'text', placeholder: 'Engineer' },
  { label: 'Company', name: 'company', type: 'text', placeholder: 'Microsoft' },
  { label: 'Start date', name: 'startDate', type: 'date', placeholder: '25/02/1998' },
  { label: 'End date', name: 'endDate', type: 'date', placeholder: '25/03/1998' }
]

function JobForm({ experiences, onExperienceChange }) {
  return (
    <div className="editExperience">
      {experiences.map((experience, index) => (
        <div key={experience.id}>
          {fields.map(field => (
            <Input
              key={field.name}
              value={experience[field.name] || ''}
              onChange={e => onExperienceChange(index, field.name, e.target.value)}
              {...field}
            />
          ))}
          <div className="Input">
            <h3>Achievements</h3>
            <textarea
              name="achievements"
              value={experience.achievements.join('\n')}
              onChange={e =>
                onExperienceChange(index, 'achievements', e.target.value.split('\n'))
              }
            />
          </div>
        </div>
      ))}
    </div>
  )
}
export { JobForm }
