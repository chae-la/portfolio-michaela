import Button from "../Button/Button";
import "./ProjectCard.scss";

type ProjectCardProps = {
    img: string;
    language: string;
    title: string;
    description : string;
    codeLink: string;
    webLink?: string;
}

const ProjectCard = ({img, language, title, description, codeLink, webLink} : ProjectCardProps) => {
    return (
        <div className="project-card" >
            <img className="project-card__img" src={img}></img>
            <p className="project-card__language">{language}</p>
            <h3 className="project-card__title">{title}</h3>
            <p className="project-card__description">{description}</p>
            <div className="project-card__button-container">
            <Button label="Code" link={codeLink} />
            <Button label="View" link={webLink} />
            </div>
        </div>
    )
}

export default ProjectCard;