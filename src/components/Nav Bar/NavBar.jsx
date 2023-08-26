import { Menu } from "semantic-ui-react";
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
      <Menu.Item
        className="NavBar"
        style={{ color: "rgb(208 208 210)", fontSize: "3vw" }}
        name="EGW"
      >
        EGW
      </Menu.Item>
      <Menu.Item
        className="NavBar"
        style={{ color: "rgb(208 208 210)" }}
        position="right"
        name="Skills"
      >
        Skills
      </Menu.Item>
      •
      <Menu.Item
        className="NavBar"
        style={{ color: "rgb(208 208 210)" }}
        name="Projects"
      >
        Projects
      </Menu.Item>
      •
      <Menu.Item
        className="NavBar"
        style={{ color: "rgb(208 208 210)" }}
        name="About Me"
      >
        About Me
      </Menu.Item>
      •
      <Menu.Item
        className="NavBar"
        style={{ color: "rgb(208 208 210)" }}
        name="Contact"
      >
        Contact
      </Menu.Item>
    </Menu>
  );
}
