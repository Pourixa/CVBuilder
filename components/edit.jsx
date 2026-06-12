import { CertificateForm } from './editCertificates'
import { EducationForm } from './editEducation'
import { JobForm } from './editExpereince'
import { EditHeader } from './editGeneral'
import { LanguageForm } from './editLanguage'
import { SkillForm } from './editSkills'

function Edit({
  data,
  onGeneralChange,

  onExperienceChange,
  onExperienceAdd,
  onExperienceDelete,
  
  onEducationChange,
  onEducationAdd,
  onEducationDelete,

  onCertificateChange,
  onCertificateAdd ,
  onCertificateDelete ,

  onSkillChange,
  onLanguageChange
}) {
  return (
    <div className="edit">
      <EditHeader generalInfo={data.generalInfo} onGeneralChange={onGeneralChange} />
      <JobForm experiences={data.experiences} onExperienceChange={onExperienceChange} onExperienceAdd = {onExperienceAdd} onExperienceDelete = {onExperienceDelete}/>
      <EducationForm educations={data.educations} onEducationChange={onEducationChange} onEducationAdd = {onEducationAdd} onEducationDelete={onEducationDelete}/>
      <CertificateForm certificates={data.certificates} onCertificateChange={onCertificateChange} onCertificateAdd = {onCertificateAdd} onCertificateDelete = {onCertificateDelete}/>
      <SkillForm skills={data.skills} onSkillChange={onSkillChange} />
      <LanguageForm languages={data.languages} onLanguageChange={onLanguageChange} />
    </div>
  )
}

export { Edit }
