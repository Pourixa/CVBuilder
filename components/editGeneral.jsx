import { Input } from './input'

const headerFields = [
  { label: 'First Name', name: 'firstname', type: 'text', placeholder: 'John' },
  { label: 'Last Name', name: 'lastname', type: 'text', placeholder: 'Doe' },
  { label: 'Profession', name: 'profession', type: 'text', placeholder: 'Senior Programmer' },
  { label: 'Telephone', name: 'telephone', type: 'tel', placeholder: '012345678' },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john.doe@jd.com' },
  { label: 'LinkedIn', name: 'linkedin', type: 'text', placeholder: 'John Doe' },
  { label: 'Location', name: 'location', type: 'text', placeholder: 'Texas' }
]

function EditHeader({ generalInfo, onGeneralChange }) {
  const handleChange = e => {
    onGeneralChange(e.target.name, e.target.value)
  }

  return (
    <div className="editHead">
      {headerFields.map(field => (
        <Input
          key={field.name}
          value={generalInfo[field.name] || ''}
          onChange={handleChange}
          {...field}
        />
      ))}
    </div>
  )
}

export { EditHeader }
