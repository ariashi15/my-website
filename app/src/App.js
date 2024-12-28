import logo from './logo.svg';
import './App.css';

function App() {
  return ( // need to fix the styling organization
    <div style={{ margin: "0", padding: "0", height: "100%", overflow: "hidden", backgroundColor: "#FAFAFF", padding: "30px", display: "flex" }}>
      <div style={{ fontSize: "50px", marginBottom: "30px" }}>Projects</div>
      {projects.map(((project) => (
        <Project key={project.title} title={project.title} desc={project.desc} tags={project.tags} />
      ) 
      ))}
    </div>
  );
}
const projects = [
  {
    title: "Project 1",
    desc: "A description of Project 1",
    tags: ["Tag 1", "Tag 2", "tag 3"],
  },

  {
    title: "Project 2",
    desc: "A description of Project 2",
    tags: ["Tag 1", "Tag 2", "tag 3"],
  },
]


function Project(props) {
  return (
    <div>
      <img
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        alt="empty image"
      />

      <div>
        <div>{props.title}</div>
        <div>{props.desc}</div>
        <div>
          {props.tags.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
