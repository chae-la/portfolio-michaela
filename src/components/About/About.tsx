import "./About.scss"
import HTMLLogo from "../../assets/html-logo.png"
import CSSLogo from "../../assets/css-logo.png"
import gitLogo from "../../assets/Git-logo.png";
import javascriptLogo from "../../assets/js-logo.png";
import bemLogo from "../../assets/bem-logo.svg";
import reactLogo from "../../assets/react-logo.svg";
import scssLogo from "../../assets/SCSS-logo.png"
import javaLogo from "../../assets/java-logo.png";
import springBootLogo from "../../assets/spring-boot-logo.png";
import me from "../../assets/Headshot-2024.jpg";


const About = () => {
return(
  <section className="section">
    <div className="about-container">
      <h2 className="about-container__title">About Me</h2>
      <img src={me} className="about-container__img"/>
        <p className="about-container__description">My journey begins after graduating from university in Forensic Science. Although I throughly enjoyed the course, there was not much room for creativity; having to follow a rigid standard operating procedure. I had many friends and family encourage me in the past to pursue a career in software development, as it had the technical, science-y stuff I enjoy, as well as the creative. After looking into it (and trying out some free online resources) I enjoyed it and felt motivated to continue learning about it.</p>
    </div>
       <div className="skills" >
        <h2 className="skills__about">Technical Skills</h2>
        <p className="skills__description">From frontend, like HTML and CSS, to backend, like Java and Spring Boot. These are the languages I am able to code proficiently in. </p>
              <div className="skills__container skills__conatiner--img">
                <img className="skills__conatiner skills__container--icon" src={gitLogo} alt="Git Logo"/>
                <span className="skills__container skills__container--text">Git</span>
              </div>
              <div className="skills__container skills__conatiner--img">  
                <img className="skills__container skills__container--icon" src={scssLogo} alt="SCSS Logo"/>
                <span className="skills__container skills__container--text">SCSS</span>
              </div>
              <div className="skills__container skills__conatiner--img">
                <img className="skills__conatiner skills__container--icon" src={javascriptLogo} alt="Javascript Logo"/>
                <span className="skills__container skills__container--text">Javascript</span>
              </div>
              <div className="skills__container skills__conatiner--img">
                <img className="skills__container skills__container--icon" src={HTMLLogo} alt="HTML Logo"/>
                <span className="skills__container skills__container--text">HTML</span>
              </div>  
              <div className="skills__container skills__conatiner--img">
                <img className="skills__container skills__container--icon" src={CSSLogo} alt="CSS Logo"/>
                <span className="skills__container skills__container--text">CSS</span>
              </div> 
              <div className="skills__container skills__conatiner--img">
                <img className="skills__conatiner skills__container--icon" src={bemLogo} alt="B.E.M Logo"/>
                <span className="skills__container skills__container--text">B.E.M</span>
              </div>  
              <div className="skills__container skills__conatiner--img">
                <img className="skills__conatiner skills__container--icon" src={reactLogo} alt="React Logo"/>
                <span className="skills__container skills__container--text">React</span>
              </div> 
              <div className="skills__container skills__conatiner--img">
                <img className="skills__conatiner skills__container--icon" src={javaLogo} alt="Java Logo"/>
                <span className="skills__container skills__container--text">Java</span>
              </div>   
              <div className="skills__container skills__conatiner--img">
                <img className="skills__conatiner skills__container--icon" src={springBootLogo} alt="Spring Boot Logo"/>
                <span className="skills__container skills__container--text">Spring Boot</span>
              </div>
            </div>
  </section>
    
  
)
}

export default About;