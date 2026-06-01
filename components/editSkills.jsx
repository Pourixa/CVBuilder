import { Input } from './input'

function SkillForm({ skills, onSkillChange }) {
  return (
    <div className="editSkill">
      {skills.map((skill, index) => (
        <Input
          key={index}
          label="Skill"
          name="skill"
          type="text"
          value={skill}
          onChange={e => onSkillChange(index, e.target.value)}
          placeholder="Social"
        />
      ))}
    </div>
  )
}

export { SkillForm }
