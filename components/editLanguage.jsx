import { Input } from "./input";
function LanguageForm()
{
    return <div className="editLanguage">
        <Input label={"Language"} type={"text"} placeholder={"French"} />
        <Input label={"Level"} type={"text"} placeholder={"C1"} />
    </div>
}
export {LanguageForm};