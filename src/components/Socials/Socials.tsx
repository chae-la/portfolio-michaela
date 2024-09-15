import "./Socials.scss";
import linkedInLogo from "../../assets/linkedin-logo.png";
import githubLogo from "../../assets/github-logo.png";
import cvIcon from "../../assets/cv-icon.png";
import emailIcon from "../../assets/email-309491_1280.webp";

const Socials = () => {
  return (
    <>
      <div className="socials">
        <h2 className="socials__title">Let's Connect</h2>
        
        <div className="socials__container">

        <a href="https://uk.linkedin.com/in/michaela-chan-877880198">  
          <img
            className="socials__container socials__container--img"
            src={linkedInLogo}
          />
       <h4 className="socials__container socials__container--span">Let's Network on LinkedIn</h4>
        </a>

        <a href="https://github.com/chae-la?tab=repositories">
          <img
            className="socials__container socials__container--img"
            src={githubLogo}
            />
       <h4 className="socials__container socials__container--span">Follow Me on Github</h4>
        </a>

        <a href="https://docs.google.com/presentation/d/1Tpod1ziur2qtq0VXz2-_4lGWgr-S3mMXPL75jmvw6fo/edit?usp=sharing">
          <img
            className="socials__container socials__container--img"
            src={cvIcon}
            />
       <h4 className="socials__container socials__container--span">Check out my CV</h4>
        </a>
        <a href="mailto:michaelachan45@gmail.com">
          <img className="socials__container socials__container--img" src={emailIcon} />
       <h4 className="socials__container socials__container--span">Email me!</h4>
        </a>
      </div>
    </div>
    </>
  );
};

export default Socials;
