import { Input } from "./input"


const headerFields = [
  { label: "First Name", type: "text", placeholder: "John"  },
  { label: "Last Name", type: "text", placeholder: "Doe" },
  { label: "Profession", type: "text", placeholder: "Senior Programmer" },
  { label: "Telephone", type: "tel", placeholder: "012345678" },
  { label: "Email", type: "email", placeholder: "john.doe@jd.com" },
  { label: "LinkedIn", type: "text", placeholder: "John Doe" },
  { label: "Location", type: "text", placeholder: "Texas" }
]



function EditHeader({editData}) {
  function handleChange (e)
  {
    editData("generalInfo",e.target.previousSibling.textContent.toLowerCase().replace(/\s/g, ""),e.target.value)
  }
  return (
    <div className="editHead">
      {headerFields.map((field) => (
        <Input key={field.label} handleChange = {(e) => {handleChange(e)}} {...field} />
      ))}
    </div>
  )
}


export {EditHeader}