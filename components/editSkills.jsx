import { AddButton } from './addbutton'
import { DeleteButton } from './deleteButton';
import { Title } from './editTitle';
import { Input } from './input'
import { useState } from 'react';

function SkillForm({ skills, onSkillChange, onSkillAdd , onSkillDelete }) {
  const [folded , setFolded] = useState(true);

  return (
    <>
      <Title folded={folded} onToggle={() => setFolded(!folded)} name={"Skills"}/>
      {!folded && <div className="editSkill">
        <AddButton addFunction={onSkillAdd}/>
        {skills.map((skill, index) => (
          <div               key={index}>
            <Input
              label="Skill"
              name="skill"
              type="text"
              value={skill}
              onChange={e => onSkillChange(index, e.target.value)}
              placeholder="Social"
            />
            <DeleteButton DeleteFunction={() => onSkillDelete(index)}/>
          </div>
        ))}
      </div>}
    </>
  )
}

export { SkillForm }
