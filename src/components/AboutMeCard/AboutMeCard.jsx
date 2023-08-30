import { Image } from "semantic-ui-react";
import "./AboutMe.css";
export default function AboutMeCard() {
  return (
    <div className="about-me-div">
      <div
        className="Skills"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          color: "rgb(208 208 210)",
          fontSize: "3vw",
          height: "5vh",
          width: "auto",
        }}
      >
        About Me
      </div>
      <div
        style={{
          width: "70vw",
          height: "50vh",
          backgroundColor: "rgb(30 41 55)",
          padding: "10px 10px 10px 10px",
          margin: "5vh 10px 5vh 5px",
          borderWidth: "0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "800px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            className="about-me-image"
            src="https://i.imgur.com/RmUpFte.jpg"
            floated="left"
          />
          <div
            style={{
              color: "rgb(154 144 152)",
              width: "30vw",
            }}
          >
            <p className="about-me-description">
              <span style={{ color: "rgb(208 208 210)", fontWeight: "bold" }}>
                I am a chemist turned front-end engineer with a passion for
                building new things.
              </span>
              <br />
              <br />I made the change to software engineering because I
              appreciate the challenge of continuously learning new skills. I am
              looking forward to applying those skills to exciting new projects.
              In my spare time, I enjoy hiking and running around Minneapolis,
              reading fantasy books, and watching my favorite tv shows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
