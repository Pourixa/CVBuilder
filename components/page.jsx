import { Experiences } from './experience'
import { Header } from './header'
import { Educations } from './education'
import { Certificates } from './certificates'
import { Skills } from './skills'
import { Languages } from './languages'

function CVPage({ data }) {
  return (
    <div className="CVPage">
      <Header data={data.generalInfo} />
      <main>
        <Experiences experiences={data.experiences} />
        <Educations educations={data.educations} />
      </main>
      <footer>
        <Certificates certificates={data.certificates} />
        <Skills skills={data.skills} />
        <Languages languages={data.languages} />
      </footer>
    </div>
  )
}

export { CVPage }
