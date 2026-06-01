function Skill({ skill }) {
  return <h3>{skill}</h3>
}

function Skills({ skills }) {
  return (
    <div className="skills">
      <h2>SKILLS</h2>
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </div>
  )
}

export { Skills }
