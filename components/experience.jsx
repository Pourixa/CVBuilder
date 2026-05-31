import { Date } from "./date"
function Job()
{
   return <h3>
    Data Analyst
    </h3>
}

function Company()
{
    return <h4>
        Nowhere land
    </h4>
}



function Achievements()
{
    return <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consequuntur!
    </p>
}

function Experience()
{
    return <div className="experience">
    <div className="jobDate">
        <Job />
        <Date />
    </div>
    <Company/>
    <ul>
        <li>
            <Achievements />
        </li>
        <li>
            <Achievements />
        </li>
        <li>
            <Achievements />
        </li>
    </ul>
    </div>

}

function Experiences()
{
    return <div className = "experiences">
        <h2>EXPERIENCE</h2>
        <Experience />
    </div>
}

export {Experiences};