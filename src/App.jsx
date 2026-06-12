import { useState } from 'react'
import { Edit } from '../components/edit'
import { CVPage } from '../components/page'

const initialData = {
  generalInfo: {
    firstname: 'John',
    lastname: 'Doe',
    profession: 'Senior Programmer',
    telephone: '012345678',
    email: 'john.doe@jd.com',
    linkedin: 'John Doe',
    location: 'Texas'
  },
  experiences: [
    {
      id: 'exp-1',
      job: 'Data Analyst',
      company: 'Nowhere land',
      startDate: '2025-12-23',
      endDate: '2026-12-24',
      achievements: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consequuntur!']
    }
  ],
  educations: [
    {
      id: 'edu-1',
      formation: 'Computer Science',
      degree: 'License',
      university: 'New York',
      startDate: '2022-09-01',
      endDate: '2025-06-30'
    }
  ],
  certificates: [
    {
      id: 'cert-1',
      certificate: 'Machine Learning',
      date: '2023-11-01'
    }
  ],
  skills: ['Communication', 'Teamwork', 'React'],
  languages: [
    {
      id: 'lang-1',
      language: 'French',
      level: 'C1'
    }
  ]
}

function App() {
  const [data, setData] = useState(initialData)

  const handleGeneralChange = (name, value) => {
    setData(prev => ({
      ...prev,
      generalInfo: {
        ...prev.generalInfo,
        [name]: value
      }
    }))
  }

  const handleExperienceChange = (index, name, value) => {
    setData(prev => ({
      ...prev,
      experiences: prev.experiences.map((item, idx) =>
        idx === index
          ? {
              ...item,
              [name]: name === 'achievements' ? value : value
            }
          : item
      )
    }))
  }

  const handleEducationChange = (index, name, value) => {
    setData(prev => ({
      ...prev,
      educations: prev.educations.map((item, idx) =>
        idx === index
          ? {
              ...item,
              [name]: value
            }
          : item
      )
    }))
  }

  const handleCertificateChange = (index, name, value) => {
    setData(prev => ({
      ...prev,
      certificates: prev.certificates.map((item, idx) =>
        idx === index
          ? {
              ...item,
              [name]: value
            }
          : item
      )
    }))
  }

  const handleSkillChange = (index, value) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, idx) => (idx === index ? value : skill))
    }))
  }

  const handleLanguageChange = (index, name, value) => {
    setData(prev => ({
      ...prev,
      languages: prev.languages.map((item, idx) =>
        idx === index
          ? {
              ...item,
              [name]: value
            }
          : item
      )
    }))
  }
  const handleAddExperience = () => 
  {
    const idx = data.experiences.length;
    setData(prev => ({
      ...prev,
      experiences: [
        ...prev["experiences"],
   {
      id: 'exp-'+idx+1,
      job: 'Data Analyst',
      company: 'Nowhere land',
      startDate: '2025-12-23',
      endDate: '2026-12-24',
      achievements: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consequuntur!']
    }
    ]
    }))
  }
  const handleDeleteExperience = (index) =>
  {
    let arrayCopy = [...data.experiences]
    arrayCopy.splice(index,1)
    setData(prev => ({
      ...prev,
      experiences:arrayCopy
    }))
  }

  const handleAddEducation = () => 
  {
    const idx = data.educations.length;
    setData(prev => ({
      ...prev,
      educations: [
        ...prev.educations,
    {
      id: 'edu-'+idx+1,
      formation: 'Computer Science',
      degree: 'License',
      university: 'New York',
      startDate: '2022-09-01',
      endDate: '2025-06-30'
    }
    ]
    }))
  }
  const handleDeleteEducation = (index) =>
  {
    let arrayCopy = [...data.educations]
    arrayCopy.splice(index,1)
    setData(prev => ({
      ...prev,
      educations:arrayCopy
    }))
  }

    const handleAddCertificate = () => 
  {
    const idx = data.certificates.length;
    setData(prev => ({
      ...prev,
      certificates: [
        ...prev.certificates,
    {
      id: 'cert-'+idx+1,
      certificate: 'Machine Learning',
      date: '2023-11-01'
    }
    ]
    }))
  }
  const handleDeleteCertificate = (index) =>
  {
    let arrayCopy = [...data.certificates]
    arrayCopy.splice(index,1)
    setData(prev => ({
      ...prev,
      certificates:arrayCopy
    }))
  }

    const handleAddSkill = () => 
  {
    setData(prev => ({
      ...prev,
      skills: [
        ...prev.skills,
        ["newSkill"]
    ]
    }))
  }
  const handleDeleteSkill = (index) =>
  {
    let arrayCopy = [...data.skills]
    arrayCopy.splice(index,1)
    setData(prev => ({
      ...prev,
      skills:arrayCopy
    }))
  }

    const handleAddLanguage = () => 
  {
        const idx = data.languages.length;
    setData(prev => ({
      ...prev,
      languages: [
        ...prev.languages,
            {
      id: 'lang-'+idx + 1,
      language: 'French',
      level: 'C1'
    }
    ]
    }))
  }
  const handleDeleteLanguage = (index) =>
  {
    let arrayCopy = [...data.languages]
    arrayCopy.splice(index,1)
    setData(prev => ({
      ...prev,
      languages:arrayCopy
    }))
  }

  return (
    <>
      <Edit
        data={data}
        onGeneralChange={handleGeneralChange}
  
        onExperienceChange={handleExperienceChange}
        onExperienceAdd = {handleAddExperience}
        onExperienceDelete = {handleDeleteExperience}

        onEducationChange={handleEducationChange}
        onEducationAdd = {handleAddEducation}
        onEducationDelete = {handleDeleteEducation}

        onCertificateChange={handleCertificateChange}
        onCertificateAdd = {handleAddCertificate}
        onCertificateDelete = {handleDeleteCertificate}
        
        onSkillChange={handleSkillChange}
        onSkillAdd = {handleAddSkill}
        onSkillDelete = {handleDeleteSkill}

        onLanguageChange = {handleLanguageChange}
        onLanguageAdd = {handleAddLanguage}
        onLanguageDelete = {handleDeleteLanguage}

        
      />
      <CVPage data={data} />
    </>
  )
}

export default App
