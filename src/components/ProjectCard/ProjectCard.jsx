import { Grid, Image, Popup } from "semantic-ui-react";
import "./ProjectCard.css";
export default function ProjectCard() {
  return (
    <div className="projects" style={{ width: "90vw" }}>
      <div className="projects-title">Projects</div>
      <div className="project-cards-container">
        <div
          className="project-card"
          style={{ backgroundColor: "rgb(66 34 57)" }}
        >
          <span className="project-title">StudyPal</span>
          <div className="project-links">
            <a
              className="project-link"
              href="https://www.youtube.com/watch?v=8GyGPvsRe6g"
            >
              Demo Video
            </a>
            •
            <a
              className="project-link"
              href="https://github.com/study-pal/studypal"
            >
              GitHub
            </a>
          </div>
          <Image
            className="project-image"
            src="https://i.imgur.com/iiDjJVb.png"
          ></Image>
          <div className="project-technologies">
            Next.js • JavaScript • Firebase • Passage Auth
          </div>
          <div className="project-text">
            <p>
              Free tutoring application for student who need homework help.
              Project submission for WWC Hackathon for Social Good.
            </p>
          </div>
        </div>
        <div
          className="project-card"
          style={{ backgroundColor: "rgb(32 41 54) " }}
        >
          <span className="project-title">Travelog</span>
          <div className="project-links">
            <a
              className="project-link"
              href="https://wilborn-travelog-app.onrender.com/login"
            >
              Live Site
            </a>
            •
            <a
              className="project-link"
              href="https://github.com/egwilborn/project-3-mern"
            >
              GitHub
            </a>
          </div>
          <Image
            className="project-image"
            src="https://i.imgur.com/MTm1RLg.png"
          ></Image>
          <div className="project-technologies">
            JavaScript • React • Node.js • Express • MongoDB
          </div>
          <div className="project-text">
            <p>
              Travelog is an app to make your travel wishlist and help you plan
              your trip.
            </p>
          </div>
        </div>

        <div
          className="project-card"
          style={{ backgroundColor: "rgb(66 34 57)" }}
        >
          <span className="project-title">Novel Nest</span>
          <div className="project-links">
            <a className="project-link" href="https://novelnest.fly.dev/">
              Live Site
            </a>
            •
            <a
              className="project-link"
              href="https://github.com/egwilborn/project-4-novel-nest"
            >
              GitHub
            </a>
          </div>
          <Image
            className="project-image"
            src="https://i.imgur.com/TYFQ0Ak.png"
          ></Image>
          <div className="project-technologies">
            Python • Django • PostgreSQL • Materialize
          </div>
          <div className="project-text">
            <p>
              Users can sign up to browse a large selection of e-books,
              organized by genre.
            </p>
          </div>
        </div>

        <div
          className="project-card"
          style={{ backgroundColor: "rgb(32 41 54)" }}
        >
          <span className="project-title">MyPlanner</span>
          <div className="project-links">
            <Popup
              content="Not Yet Deployed"
              trigger={
                <a className="Link" href="#">
                  Live Site
                </a>
              }
            />
            •
            <a
              className="project-link"
              href="https://github.com/egwilborn/planner"
            >
              GitHub
            </a>
          </div>
          <Image
            className="project-image"
            src="https://i.imgur.com/4AabJYh.png"
          ></Image>
          <div className="project-technologies">
            Python • Django • Bootstrap • HTML • CSS • DTL
          </div>
          <div className="project-text">
            <p>MyPlanner is a productivity tool for making To Do Lists.</p>
          </div>
        </div>

        <div
          className="project-card"
          style={{ backgroundColor: "rgb(66 34 57)" }}
        >
          <span className="project-title"> RadioDB </span>
          <div className="project-links">
            <a
              className="project-link"
              href="https://long-pear-seahorse-suit.cyclic.app/podcasts"
            >
              Live Site
            </a>
            •
            <a
              className="project-link"
              href="https://github.com/egwilborn/unit-2-project"
            >
              GitHub
            </a>
          </div>
          <Image
            className="project-image"
            src="https://i.imgur.com/wL2PaBe.png"
          ></Image>
          <div className="project-technologies">
            Express.js • Node.js • MongoDB • JavaScript • EJS
          </div>
          <div className="project-text">
            <p>Browse RadioDb to see what podcasts people are listening to.</p>
          </div>
        </div>

        <div
          className="project-card"
          style={{ backgroundColor: "rgb(32 41 54)" }}
        >
          <span className="project-title">Wilted Word</span>
          <div className="project-links">
            <a
              className="project-link"
              href="https://egwilborn.github.io/browser-game-project/"
            >
              Live Site
            </a>
            •
            <a
              className="project-link"
              href="https://github.com/egwilborn/browser-game-project"
            >
              GitHub
            </a>
          </div>
          <Image
            className="project-image"
            src="https://i.imgur.com/jHlnjr8.png"
          ></Image>
          <div className="project-technologies">
            HTML • CSS • JavaScript • MVC
          </div>
          <div className="project-text">
            <p>Wilted Word is a flowery reimagining of the game hangman.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
