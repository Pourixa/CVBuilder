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
  onSkillAdd,
  onSkillDelete,

  onLanguageChange,
  onLanguageAdd,
  onLanguageDelete,

  emptyData
}) {
  return (
    <div className="edit">
      <button className='print' onClick={window.print}>PRINT</button>
      <button className='emptyPage' onClick={emptyData}>Start From Scratch</button>
      <EditHeader generalInfo={data.generalInfo} onGeneralChange={onGeneralChange} />
      <JobForm experiences={data.experiences} onExperienceChange={onExperienceChange} onExperienceAdd = {onExperienceAdd} onExperienceDelete = {onExperienceDelete}/>
      <EducationForm educations={data.educations} onEducationChange={onEducationChange} onEducationAdd = {onEducationAdd} onEducationDelete={onEducationDelete}/>
      <CertificateForm certificates={data.certificates} onCertificateChange={onCertificateChange} onCertificateAdd = {onCertificateAdd} onCertificateDelete = {onCertificateDelete}/>
      <SkillForm skills={data.skills} onSkillChange={onSkillChange} onSkillAdd = {onSkillAdd} onSkillDelete={onSkillDelete}/>
      <LanguageForm languages={data.languages} onLanguageChange={onLanguageChange} onLanguageAdd = {onLanguageAdd} onLanguageDelete={onLanguageDelete}/>
    </div>
  )
}

export { Edit }
