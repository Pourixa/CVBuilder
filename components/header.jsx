
function FirstName({firstName})
{
    return <h1>
        {firstName}
    </h1>
}
function LastName({lastName})
{
    return <h1>
        {lastName}
    </h1>
}

function Attribute({attribute})
{
    return <h2>
        {attribute}
    </h2>
}

function Telephone({telephone})
{
    return <h3>
        {telephone}
    </h3>
}
function Email({email})
{
return <h3>
    {email}
    </h3>
}

function LinkedIn({linkedIn})
{
    return <h3>
        {linkedIn}
        </h3>
}

function Location ({location})
{
    return <h3>
        {location}
    </h3>
}

function Header({data})
{
    return <header>
        <div className="name">
            <FirstName firstName={ data.firstname } /> 
            <LastName lastName={data.lastname}/>
        </div>
        <Attribute attribute = {data.profession}/>
        <div className="contact">
            <ul>
                <li>
                    <Telephone telephone={data.telephone} />
                </li>
                <li>
                    <Email email={data.email} />
                </li>
                <li>
                    <LinkedIn linkedIn={data.linkedin}/>
                </li>
                <li>
                    <Location location={data.location}/>
                </li>
            </ul>
        </div>
    </header>
}

export {Header}