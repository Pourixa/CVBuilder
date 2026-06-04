function Input({ label, type, placeholder, name, value, onChange , style }) {
  return (
    <div 
    style={style} 
    className="Input">
      <h3>{label}</h3>
      <input type={type} 
      name={name}
       value={value}
        onChange={onChange} 
        placeholder={placeholder}
        style={style} />
    </div>
  )
}

export { Input }
