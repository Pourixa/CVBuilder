function Language({ language, level }) {
  return (
    <div className="language">
      <h3>{language}</h3>
      <h3>{level}</h3>
    </div>
  )
}

function Languages({ languages }) {
  return (
    <>
      {languages.length > 0 && <div className="languages">
        <h2>LANGUAGES</h2>
        {languages.map(item => (
          <Language key={item.id} {...item} />
        ))}
      </div>}
    </>
  )
}

export { Languages }
