import { Input } from "./input";

const fields = [
    {label:"Certificate" , type:"text" , placeholder:"Machine Learning"},
            { label: "Date", type: "date", placeholder: "25/02/1998" },
]

function CertificateForm()
{
    return <div className="certificateForm">
        {fields.map((field) => {
            return <Input key={field.label} {...field}/>;
        })}
    </div>
}
export {CertificateForm}