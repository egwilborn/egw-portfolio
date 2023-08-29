import { Menu, Popup } from "semantic-ui-react";
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
        <a
          style={{ color: "rgb(208 208 210)" }}
          href="https://docs.google.com/document/d/15ObwAUqRXgdQG89ufbyshkdv_GLtOmw0XjxGiLUZz_U/edit?usp=sharing"
        >
          Resume
        </a>
      </Menu.Item>
      •
      <Menu.Item
        className="ContactMenu"
        style={{ color: "rgb(208 208 210)" }}
        name="LinkedIn"
      >
        <a
          style={{ color: "rgb(208 208 210)" }}
          href="https://www.linkedin.com/in/emily-g-wilborn"
        >
          LinkedIn
        </a>
      </Menu.Item>
      •
      <Menu.Item
        className="ContactMenu"
        style={{ color: "rgb(208 208 210)" }}
        name="GitHub"
      >
        <a
          style={{ color: "rgb(208 208 210)" }}
          href="https://github.com/egwilborn"
        >
          GitHub
        </a>
      </Menu.Item>
      •
      <Menu.Item
        className="ContactMenu"
        style={{ color: "rgb(208 208 210)" }}
        name="Email"
      >
        <Popup
          content="egwilborn@gmail.com"
          trigger={
            <a
              style={{ color: "rgb(208 208 210)" }}
              href="mailto:egwilborn@gmail.com"
            >
              Email
            </a>
          }
        />
      </Menu.Item>
    </Menu>
  );
}
