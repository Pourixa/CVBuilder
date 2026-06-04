import { Input } from './input'

const fields = [
  { label: 'Certificate', name: 'certificate', type: 'text', placeholder: 'Machine Learning' },
  { label: 'Date', name: 'date', type: 'date', placeholder: '25/02/1998' }
]

function CertificateForm({ certificates, onCertificateChange }) {
  return (
    <div className="editCertificate">
      {certificates.map((certificate, index) => (
        <div key={certificate.id} className='singleCert'>
          {fields.map(field => (
            <Input
              key={field.name}
              value={certificate[field.name] || ''}
              onChange={e => onCertificateChange(index, field.name, e.target.value)}
              {...field}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export { CertificateForm }
