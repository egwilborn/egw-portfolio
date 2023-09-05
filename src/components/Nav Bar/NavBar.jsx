import { Menu } from "semantic-ui-react";
import { HashLink } from "react-router-hash-link";

import "./NavBar.css";

export default function NavBar() {
  return (
    <Menu
      fixed="top"
      borderless={true}
      style={{
        display: "flex",
        alignItems: "center",
        height: "10vh",
        backgroundColor: "rgb(71 32 58)",
        color: "rgb(208 208 210)",
      }}
    >
      <Menu.Item className="NavBar-name" name="EGW">
        <HashLink smooth to={"/wilborn-portfolio/#top"}>
          EGW
        </HashLink>
      </Menu.Item>
      <Menu.Item className="NavBar" position="right" name="Skills">
        <HashLink smooth to={"/wilborn-portfolio/#skills-section"}>
          Skills
        </HashLink>
      </Menu.Item>
      •
      <Menu.Item className="NavBar" name="Projects">
        <HashLink smooth to={"/wilborn-portfolio/#project-section"}>
          Projects
        </HashLink>
      </Menu.Item>
      •
      <Menu.Item className="NavBar" name="About Me">
        <HashLink smooth to={"/wilborn-portfolio/#about-section"}>
          About Me
        </HashLink>
      </Menu.Item>
      •
      <Menu.Item className="NavBar" name="Contact">
        <HashLink smooth to={"/wilborn-portfolio/#contact-section"}>
          Contact
        </HashLink>
      </Menu.Item>
    </Menu>
  );
}
