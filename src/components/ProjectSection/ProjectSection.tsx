import "./ProjectSection.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import calculator from "../../assets/calculator-image.png";
import game from "../../assets/game-screenshot.png";
import punkApi from "../../assets/punk-api-image.png";
import clientProject from "../../assets/clientProject.png";
import hangman from "../../assets/hangman-screenshot.png";
import cardGame from "../../assets/card-game-screenshot.png";
import weatherApp from "../../assets/Weather-app.png";
import AOS from "aos";
import "aos/dist/aos.css"



const ProjectSection = () => {

  return (
    <div className="project" >
      <h2 className="project__title">My Projects</h2>
      <div className="project__container" >
        <ProjectCard
          img={calculator}
          language="HTML, SCSS, JavaScript"
          title="Calculator"
          description="The classic first project of any develoepr. Integrating what I had learned about Javascript, HTML and SCSS into making a functioning calculator without using the eval() method."
          codeLink="https://github.com/chae-la/calculator"
          webLink="https://chae-la.github.io/calculator/"
        />
        <ProjectCard
          img={game}
          language="HTML, SCSS, Typescript"
          title="Game"
          description="An ode to a popular Flash game infamous for being tricky. This game contains packages and audio; boasting 20 fun questions?"
          codeLink="https://github.com/chae-la/game"
          webLink="https://chae-la.github.io/game/"
        />
        <ProjectCard
          img={punkApi}
          language="SCSS, React"
          title="Punk API"
          description="An introduction to calling APIs and using filters to find the perfect brew for you, or if you want more information on your favourite beer, the search input is perfect for that. "
          codeLink="https://github.com/chae-la/punk-api"
          webLink="https://chae-la.github.io/punk-api/"
        />
        <ProjectCard
          img={clientProject}
          language="SCSS, React"
          title="Way Of Viking - Client Project"
          description="A collaborative project to demonstrate my learning by building a project for a client."
          codeLink="https://github.com/nology-tech/wov-client-project"
          webLink="https://wov-client-project-66242.web.app/"
        />
        <ProjectCard
          img={hangman}
          language="Java"
          title="Hangman Game"
          description="An introduction to Java by creating a classic game of hangman."
          codeLink="https://github.com/chae-la/Hangman"
        />
        <ProjectCard
          img={cardGame}
          language="Java"
          title="Card Game"
          description="A Java project boasting two card games, higher or lower and blackjack."
          codeLink="https://github.com/chae-la/card-game"
        />
        <ProjectCard img={weatherApp} language="SCSS, React" title="Weather & Productivity App" description="Using a weather API and a Stocks API, you're able to know both the weather and the prices of stocks all in one app. As well as your todo list for the day." codeLink="https://github.com/chae-la/weather"/>
              </div>
    </div>
  );
};

export default ProjectSection;
