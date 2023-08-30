import { Grid, Image } from "semantic-ui-react";
import "./ProjectCard.css";
export default function ProjectCard() {
  return (
    <Grid columns="three" divided centered style={{ width: "90vw" }}>
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
          width: "5vw",
          marginBottom: "10px",
        }}
      >
        Projects
      </div>
      <Grid.Row>
        <Grid.Column>
          <div
            className="project-card"
            style={{ backgroundColor: "rgb(32 41 54)" }}
          >
            <Image
              className="project-image"
              src="https://i.imgur.com/TYFQ0Ak.png"
            ></Image>
            <div className="project-text">
              <span style={{ color: "rgb(208 208 210)" }}>Novel Nest</span>
              <br /> Live Site • GitHub
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div
            className="project-card"
            style={{ backgroundColor: "rgb(66 34 57)" }}
          >
            <Image
              className="project-image"
              src="https://i.imgur.com/k91d5OG.png"
            ></Image>
            <div className="project-text">
              <span style={{ color: "rgb(208 208 210)" }}>Travelog</span>
              <br /> Live Site • GitHub
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div
            className="project-card"
            style={{ backgroundColor: "rgb(32 41 54)" }}
          >
            <Image
              className="project-image"
              src="https://i.imgur.com/wL2PaBe.png"
            ></Image>
            <div className="project-text">
              <span style={{ color: "rgb(208 208 210)" }}>RadioDB</span>
              <br /> Live Site • GitHub
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <div
            className="project-card"
            style={{ backgroundColor: "rgb(32 41 54)" }}
          >
            <Image
              className="project-image"
              src="https://i.imgur.com/sy5aCxA.png"
            ></Image>
            <div className="project-text">
              <span style={{ color: "rgb(208 208 210)" }}>Wilted Word</span>
              <br /> Live Site • GitHub
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
