import { Image } from "semantic-ui-react";
import "./AboutMe.css";
export default function AboutMeCard() {
  return (
    <div className="about-me-div">
      <div className="about-me-title">About Me</div>
      <div className="about-me-container">
        <div className="about-me-content">
          <Image
            className="about-me-image"
            src="https://i.imgur.com/RmUpFte.jpg"
          />
          <div className="about-me-text">
            <p className="about-me-description">
              <span style={{ color: "rgb(208 208 210)", fontWeight: "bold" }}>
                I am a chemist turned software engineer with a passion for
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
