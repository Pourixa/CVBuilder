import { SingleLang } from "./singleLang"

function LanguageForm({ languages, onLanguageChange }) {
  return (
    <div className="editLanguage">
        <SingleLang languages={languages} onLanguageChange={onLanguageChange}/>
    </div>
  )
}

export { LanguageForm }
