import { Experiences } from "./experience"
import { Header } from "./header"
import { Educations } from "./education"
import { Certificates } from "./certificates"
import { Skills } from "./skills"
import { Languages } from "./languages"

function CVPage()
{
    return <div className="CVPage">
        <Header />
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