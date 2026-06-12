import { Input } from "./input";
import { useState } from "react";
import { DeleteButton } from "./deleteButton";
function SingleExps({ fields,experiences, onExperienceChange ,onExperienceDelete})
{
    const [unfolded , setUnFold] = useState(0);
    function handleFold(index)
    {
      setUnFold(index);   
    }
    return <>{experiences.map((experience, index) => (
        <div key={experience.id}  className={(unfolded==index ? "notfolded" : "folded")}>
          <div className="experienceTitle" onClick = {()=>handleFold(index)} >
            <p>{experience.job}</p>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" width="16px" height="16px" viewBox="0 0 30.727 30.727" xml:space="preserve">
              <g>
              <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0   l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"/>
            </g>
            </svg>
          </div>
          {fields.map(field => (
            <Input
              key={field.name}
              value={experience[field.name] || ''}
              onChange={e => onExperienceChange(index, field.name, e.target.value)}
              {...field}
              style = {{display :unfolded == index ? "flex" : "none"}}
            />
          ))}
          <div
            style = {{display :unfolded == index ? "flex" : "none"}}
           className="Input">
            <h3>Achievements</h3>
            <textarea
              name="achievements"
              value={experience.achievements.join('\n')}
              onChange={e =>
                onExperienceChange(index, 'achievements', e.target.value.split('\n'))
              }
            />
          </div>
          <DeleteButton DeleteFunction={()=>onExperienceDelete(index)}/>
        </div>
      ))}</>
}

export {SingleExps}