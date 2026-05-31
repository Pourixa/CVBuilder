import { CertificateForm } from "./editCertificates"
import { EducationForm } from "./editEducation"
import { JobForm } from "./editExpereince"
import { EditHeader } from "./editGeneral"
import { LanguageForm } from "./editLanguage"
import { SkillForm } from "./editSkills"
function Edit({editData})
{
    return <div className="edit">
        <EditHeader editData={editData} />
        <JobForm/>
        <EducationForm/>    
        <CertificateForm/>
        <SkillForm/>
        <LanguageForm/>
    </div>
}
export {Edit}