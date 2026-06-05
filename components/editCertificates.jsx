import { SingleCert } from "./singleCert"
const fields = [
  { label: 'Certificate', name: 'certificate', type: 'text', placeholder: 'Machine Learning' },
  { label: 'Date', name: 'date', type: 'date', placeholder: '25/02/1998' }
]

function CertificateForm({ certificates, onCertificateChange }) {
  return (
    <div className="editCertificate">
<SingleCert certificates={certificates} onCertificateChange={onCertificateChange} fields={fields}/>
    </div>
  )
}

export { CertificateForm }
