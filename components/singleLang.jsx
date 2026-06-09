import { Input } from "./input";
import { useState } from "react";
function SingleLang({languages , onLanguageChange })
{
            const [folded , setFold] = useState(false);
        function handleFold()
        {
          setFold(prev => !prev)   
        }
    return <>
          {languages.map((language, index) => (
        <div key={language.id} className={(folded ? "folded" : "notfolded")} >
                        <div className="languageTitle" onClick={handleFold}>
                <p>{language.language}</p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" width="16px" height="16px" viewBox="0 0 30.727 30.727" xml:space="preserve">
                  <g>
                  <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0   l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"/>
                </g>
                </svg>
              </div>
          <Input
            label="Language"
            name="language"
            type="text"
            value={language.language}
            onChange={e => onLanguageChange(index, 'language', e.target.value)}
            placeholder="French"
            style = {{display :folded ? "none" : "flex"}}
          />
          <Input
            label="Level"
            name="level"
            type="text"
            value={language.level}
            onChange={e => onLanguageChange(index, 'level', e.target.value)}
            placeholder="C1"
            style = {{display :folded ? "none" : "flex"}}
          />
        </div>
      ))}</>
}

export {SingleLang}