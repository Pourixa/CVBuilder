import { Date } from "./date"

function Fomration()
{
    return <h3>
        Computer Science
    </h3>
}

function University()
{
    return <h3>
        New York
    </h3>
}

function Degree()
{
    return <h3>
        License
    </h3>
}

function Education()
{
    return <>
    <div className="FormDate">
        <Fomration />
        <Date />
    </div>
    <div className="uniDeg">
        <University />
        <Degree />
    </div>
    </>
}

function Educations()
{
    return <div className="education">
        <h2>EDUCATION</h2>
        <Education />
        <Education />
        <Education />
    </div>
}

export {Educations}