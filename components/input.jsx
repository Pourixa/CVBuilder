function Input({label , type,placeholder,handleChange})
{
    return <div className="Input">
        <h3>{label}</h3>
        <input  type={type} onChange={handleChange} placeholder={placeholder} />
    </div>
}

export {Input}
