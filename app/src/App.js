import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="body">
      <div className="page-content">
        <div className="page-title">Projects</div>
        <div className="projects">
          {projects.map((project) => (
            <Project key={project.title} title={project.title} desc={project.desc} tags={project.tags} />
          )
          )}
        </div>
      </div>
      <NavBar />
    </div>
  );
}

function NavBar() {
  
  const navItems = ["About Me", "Projects", "Experience", "Contact"]
  const [selectedNavItem, setSelectedNavItem] = useState("About Me");

  useEffect(() => {
    console.log(`selected item: ${selectedNavItem}`);
  })

  return (
    <div id="nav-bar">
      <div id="nav-items">
        {navItems.map((item) => (
          <div 
              key={item}
              className="navItem"
              onClick={() => setSelectedNavItem(item)}
              style={{ 
                color: selectedNavItem === item ? "#8C8FD6" : "#1117B1",
                fontSize: selectedNavItem === item ? "30px" : "24px"
              }}
            >
              {item}
            </div>
        ))}
      </div>
      <div id="vertical-line"></div>
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

export default App;