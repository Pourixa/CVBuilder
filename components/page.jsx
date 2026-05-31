import { Experiences } from "./experience"
import { Header } from "./header"
import { Educations } from "./education"
import { Certificates } from "./certificates"
import { Skills } from "./skills"
import { Languages } from "./languages"

function CVPage({data})
{
    return <div className="CVPage">
        <Header data={data.generalInfo}/>
        <main>
        <Experiences/>
        <Educations />
        </main>
        <footer>
            <Certificates />
            <Skills/>
            <Languages />
        </footer>
    </div>
}

export {CVPage}