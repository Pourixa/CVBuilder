function FirstName()
{
    return <h1>
        Stark
    </h1>
}
function LastName()
{
    return <h1>
        Terry
    </h1>
}

function Attributes()
{
    return <h2>
        Prof | SwordsMan | Pilot
    </h2>
}

function Telephone()
{
    return <h3>
        756433453
    </h3>
}
function Email()
{
return <h3>
    stark@example.com
</h3>
}

function LinkedIn()
{
    return <h3>
        linked.in
    </h3>
}

function Location ()
{
    return <h3>
        Texas
    </h3>
}

function Header()
{
    return <header>
        <div className="name">
            <FirstName /> 
            <LastName />
        </div>
        <Attributes />
        <div className="contact">
            <ul>
                <li>
                    <Telephone />
                </li>
                <li>
                    <Email />
                </li>
                <li>
                    <LinkedIn />
                </li>
                <li>
                    <Location />
                </li>
            </ul>
        </div>
    </header>
}

export {Header}