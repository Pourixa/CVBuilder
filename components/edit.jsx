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
  onEducationChange,
  onCertificateChange,
  onSkillChange,
  onLanguageChange
}) {
  return (
    <div className="edit">
      <EditHeader generalInfo={data.generalInfo} onGeneralChange={onGeneralChange} />
      <JobForm experiences={data.experiences} onExperienceChange={onExperienceChange} />
      <EducationForm educations={data.educations} onEducationChange={onEducationChange} />
      <CertificateForm certificates={data.certificates} onCertificateChange={onCertificateChange} />
      <SkillForm skills={data.skills} onSkillChange={onSkillChange} />
      <LanguageForm languages={data.languages} onLanguageChange={onLanguageChange} />
    </div>
  )
}

export { Edit }
