import { Input } from './input'

function LanguageForm({ languages, onLanguageChange }) {
  return (
    <div className="editLanguage">
      {languages.map((language, index) => (
        <div key={language.id} className='singleLang'>
          <Input
            label="Language"
            name="language"
            type="text"
            value={language.language}
            onChange={e => onLanguageChange(index, 'language', e.target.value)}
            placeholder="French"
          />
          <Input
            label="Level"
            name="level"
            type="text"
            value={language.level}
            onChange={e => onLanguageChange(index, 'level', e.target.value)}
            placeholder="C1"
          />
        </div>
      ))}
    </div>
  )
}

export { LanguageForm }
