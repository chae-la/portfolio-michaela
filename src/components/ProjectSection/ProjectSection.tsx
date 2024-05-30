import "./ProjectSection.scss"
import ProjectCard from "../ProjectCard/ProjectCard";
import firstProject from "../../assets/calculator-image.png";
import secondProject from "../../assets/game-screenshot.png";
import thirdProject from "../../assets/punk-api-image.png"

const ProjectSection = () => {
    return(
        <div className="project">
            <h2 className="project__title">My Projects</h2>
            <div className="project__container">
            <ProjectCard img={firstProject} language="HTML, SCSS, JavaScript" title="Calculator" description="The classic first project of any develoepr. Integrating what I had learned about Javascript, HTML and SCSS into making a functioning calculator without using the eval() method." codeLink="https://github.com/chae-la/calculator" webLink="https://chae-la.github.io/calculator/" />
            <ProjectCard img={secondProject} language="HTML, SCSS, Typescript" title="Game" description="An ode to a popular Flash game infamous for being tricky. This game contains packages and audio; boasting 20 fun questions?" codeLink="https://github.com/chae-la/game" webLink="https://chae-la.github.io/game/" />
            <ProjectCard img={thirdProject} language="SCSS, React" title="Punk API" description="An introduction to calling APIs and using filters to find the perfect brew for you, or if you want more information on your favourite beer, the search input is perfect for that. " codeLink="https://github.com/chae-la/punk-api" webLink="https://chae-la.github.io/punk-api/" />
        </div>
            </div>
     
    )
}

export default ProjectSection