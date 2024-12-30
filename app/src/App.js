import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './components/Users';
import DetailedUserPage from './components/DetailedUserPage'
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="body">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<DetailedUserPage />} />
      </Routes>
      <NavBar />
      </div>
    </BrowserRouter>
  );
}

function About () {
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


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <div class="page-content">
//       <div class="page-title">Projects</div>
//       <div class="projects">
//         <div class="project-box">
//           <img
//             class="project-image"
//             src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
//           />
//           <div class="right-col">
//             <div class="project-title">Project 1</div>
//             <div class="project-desc">A description of project 1.</div>
//             <div class="project-tags">
//               <div class="tag">Swift</div>
//               <div class="tag">SwiftUI</div>
//               <div class="tag">Git</div>
//             </div>
//           </div>
//         </div>
//         <div class="project-box">
//           <img
//             class="project-image"
//             src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
//           />
//           <div class="right-col">
//             <div class="project-title">Project 2</div>
//             <div class="project-desc">A description of Project 2.</div>
//             <div class="project-tags">
//               <div class="tag">C</div>
//               <div class="tag">C++</div>
//               <div class="tag">Google Test</div>
//             </div>
//           </div>
//         </div>
//         <div class="project-box">
//           <img
//             class="project-image"
//             src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
//           />
//           <div class="right-col">
//             <div class="project-title">Project 3</div>
//             <div class="project-desc">A description of Project 3.</div>
//             <div class="project-tags">
//               <div class="tag">JavaScript</div>
//               <div class="tag">HTML</div>
//               <div class="tag">CSS</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div id="nav-bar">
//         <div id="nav-items">
//           <div class="item">
//           About Me
//           </div>
//           <div class="item" id="selected">
//           Projects
//           </div>
//           <div class="item">
//           Experience
//           </div>
//           <div class="item">
//           Contact
//           </div>
//         </div>
//         <div id="vertical-line"></div>
//     </div>
//   </body>  
// </html>