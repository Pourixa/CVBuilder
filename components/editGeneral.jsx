import { Input } from "./input"


const headerFields = [
  { label: "First name", type: "text", placeholder: "Stark" },
  { label: "Last name", type: "text", placeholder: "Terry" },
  { label: "Profession", type: "text", placeholder: "Cook" },
  { label: "Telephone", type: "tel", placeholder: "01254789" },
  { label: "Email", type: "email", placeholder: "something@another.com" },
  { label: "LinkedIn", type: "text", placeholder: "linkedin" },
  { label: "Address", type: "text", placeholder: "Paris, France" }
]



function EditHeader() {
  return (
    <div className="editHead">
      {headerFields.map((field) => (
        <Input key={field.label} {...field} />
      ))}
    </div>
  )
}


export {EditHeader}