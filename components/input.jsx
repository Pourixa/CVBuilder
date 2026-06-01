function Input({ label, type, placeholder, name, value, onChange }) {
  return (
    <div className="Input">
      <h3>{label}</h3>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export { Input }
