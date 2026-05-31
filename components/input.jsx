function Input({label , type,placeholder})
{
    return <div className="Input">
        <h3>{label}</h3>
        <input type={type} placeholder={placeholder} />
    </div>
}

export {Input}