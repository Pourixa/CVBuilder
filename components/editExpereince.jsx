import { Input } from "./input";

const fields = [
  { label: "Job", type: "text", placeholder: "Engineer" },
  { label: "Company", type: "text", placeholder: "Microsoft" },
  { label: "Start date", type: "date", placeholder: "25/02/1998" },
  { label: "End date", type: "date", placeholder: "25/03/1998" },
]

function JobForm() {
  return (
    <div className="editExperience">
      {fields.map((field) => (
        <Input key={field.label} {...field} />
      ))}
      <div className="Input">
        <h3>Achievements</h3>
        <textarea name="achievements" id="achievements"></textarea>
      </div>
    </div>
  )
}
export {JobForm};