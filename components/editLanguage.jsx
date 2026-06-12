import { AddButton } from "./addbutton"
import { Title } from "./editTitle";
import { SingleLang } from "./singleLang"
import { useState } from "react"
function LanguageForm({ languages, onLanguageChange , onLanguageAdd , onLanguageDelete }) {
  const [folded,setFolded] = useState(true);
  
  return (
    <>
      <Title folded={folded} onToggle={() => setFolded(!folded)} name={"Languages"} />
      {!folded && <div className="editLanguage">
        <AddButton addFunction={onLanguageAdd}/>
          <SingleLang languages={languages} onLanguageChange={onLanguageChange} onLanguageDelete = {onLanguageDelete}/>
      </div>}
    </>
  )
}

export { LanguageForm }
