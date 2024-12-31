import { useState, useEffect } from 'react';

export default function NavBar() {

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