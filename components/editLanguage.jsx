import { AddButton } from "./addbutton"
import { SingleLang } from "./singleLang"

function LanguageForm({ languages, onLanguageChange }) {
  return (
    <div className="editLanguage">
      <AddButton/>
        <SingleLang languages={languages} onLanguageChange={onLanguageChange}/>
    </div>
  )
}

export { LanguageForm }
