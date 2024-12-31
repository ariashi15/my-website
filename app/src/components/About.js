import { useNavigate } from "react-router-dom";

export default function About () {
    const navigate = useNavigate();
  
    return (
      <div className="page-content">
        <div className="page-title">Projects</div>
        <div className="projects">
            {projects.map(((project) => (
              <Project key={project.title} title={project.title} desc={project.desc} tags={project.tags} />
            )
            ))}
          </div>
          <div 
            className="projects"
            onClick={() => navigate("/users")}
            style={{backgroundColor: "#1117B1", color: "white", padding: "5px", width: "200px"}}>click me to go to hw5</div>
        </div>
    );
  }

  const projects = [
    {
      title: "Project 1",
      desc: "A description of Project 1",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
    },
  
    {
      title: "Project 2",
      desc: "A description of Project 2",
      tags: ["Tag 1", "Tag 2"],
    },
  
    {
      title: "Project 3",
      desc: "A description of Project 3",
      tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    },
  ]
  
  
  function Project(props) {
    return (
      <div className="project-box">
        <img className="project-image"
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          alt="empty image"
        />
  
        <div className="project-info">
          <div className="project-title">{props.title}</div>
          <div className="project-desc">{props.desc}</div>
          <div className="project-tags">
            {props.tags.map((tag) => (
              <div className="tag">{tag}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }