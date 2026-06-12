import { AddButton } from "./addbutton"
import { Title } from "./editTitle";
import { SingleCert } from "./singleCert"
import { useState } from "react"
const fields = [
  { label: 'Certificate', name: 'certificate', type: 'text', placeholder: 'Machine Learning' },
  { label: 'Date', name: 'date', type: 'date', placeholder: '25/02/1998' }
]

function CertificateForm({ certificates, onCertificateChange  , onCertificateAdd , onCertificateDelete}) {
    const [folded , setFolded] = useState(true);  

  return (
    <>
    <Title name={"Certificates"} onToggle={() => {setFolded(!folded)}} folded={folded}/>
    {!folded && <div className="editCertificate">
<AddButton addFunction={onCertificateAdd}/>
<SingleCert certificates={certificates} onCertificateChange={onCertificateChange} fields={fields} onCertificateDelete = {onCertificateDelete}/>
    </div>}
  </>
  )
}

export { CertificateForm }
