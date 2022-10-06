import { withTheme } from "styled-components";
import { Title, BulletinContainer } from './styled'
import { About, Skills, Projects, Contact } from "../components/sidebarContent/index";

const pages = {
    about: <About/>,
    skills: <Skills/>,
    projects: <Projects/>,
    contact: <Contact/>
}

const Bulletin = ({page, title}) => 
    <BulletinContainer>
        {pages[title]}
        {(page.title || page.subtitle) && <Title>
            <h1>{page?.title}</h1>
            {page?.subtitle && <span>{page?.subtitle}</span>}
        </Title>}
    </BulletinContainer>


export default withTheme(Bulletin);

