import { Menu } from "semantic-ui-react";
import "./ContactMenu.css";
export default function NavBar() {
  return (
    <Menu
      borderless
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "15vh",
        backgroundColor: "rgb(71 32 58)",
        color: "rgb(208 208 210)",
      }}
    >
      <Menu.Item
        className="ContactMenu"
        style={{ color: "rgb(208 208 210)" }}
        name="Resume"
      >
        Resume
      </Menu.Item>{" "}
      •
      <Menu.Item
        className="ContactMenu"
        style={{ color: "rgb(208 208 210)" }}
        name="LinkedIn"
      >
        LinkedIn
      </Menu.Item>
      •
      <Menu.Item
        className="ContactMenu"
        style={{ color: "rgb(208 208 210)" }}
        name="GitHub"
      >
        GitHub
      </Menu.Item>
      •
      <Menu.Item
        className="ContactMenu"
        style={{ color: "rgb(208 208 210)" }}
        name="Email"
      >
        Email
      </Menu.Item>
    </Menu>
  );
}
