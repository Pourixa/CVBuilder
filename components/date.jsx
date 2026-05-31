function StartDate()
{
    return <h4>
        23/12/2025
    </h4>
}

function EndDate()
{
    return <h4>
        24/12/2026
    </h4>
}

function Date()
{
    return  <div className="date">
            <StartDate />
            <p> - </p>
            <EndDate />
        </div>
}
export {Date}