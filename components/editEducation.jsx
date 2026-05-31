import { Input } from "./input";

const fields = [
        { label: "Formation" ,type: "text", placeholder: "Computer Science" },
        { label: "Degree" ,type: "text", placeholder: "Masters" },
      { label: "University" ,type: "text", placeholder: "New york University" },
        { label: "Start date", type: "date", placeholder: "25/02/1998" },
  { label: "End date", type: "date", placeholder: "25/03/1998" },
]

function EducationForm()
{
    return <div className="editEducation">
        {fields.map((field) => {
           return <Input key={field.label} {...field}/>
        }) }
    </div>
}
export {EducationForm}