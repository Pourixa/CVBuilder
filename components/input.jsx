function Input({label , type,placeholder})
{
    return <div>
        <h3>{label}</h3>
        <input type={type} placeholder={placeholder} />
    </div>
}

export {Input}