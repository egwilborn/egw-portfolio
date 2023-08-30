import "../App.css";

import { Grid } from "semantic-ui-react";
import NavBar from "../components/Nav Bar/NavBar";
import ContactMenu from "../components/ContactMenu/ContactMenu";
import NameCard from "../components/NameCard/NameCard";
import SkillsCard from "../components/SkillsCard/SkillsCard";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import AboutMeCard from "../components/AboutMeCard/AboutMeCard";

export default function Home() {
  return (
    <div
      id="top"
      style={{ backgroundColor: "rgb(101 117 130)", height: "100vh" }}
    >
      <NavBar />
      <Grid style={{ marginTop: "10vh" }}>
        <Grid.Row centered style={{ marginBottom: "10vh", marginTop: "10vh" }}>
          <Grid.Column
            width={16}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NameCard />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          centered
          style={{
            marginBottom: "5vh",
            marginTop: "5vh",
            padding: "5vh 0 3vh 0",
          }}
          id="skills-section"
        >
          <Grid.Column
            width={16}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SkillsCard />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          style={{
            marginBottom: "5vh",
            marginTop: "3vh",
            padding: "5vh 0 3vh 0",
          }}
          id="project-section"
        >
          <Grid.Column
            width={16}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProjectCard />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          id="about-section"
          style={{
            marginBottom: "5vh",
            marginTop: "5vh",
            padding: "5vh 0 3vh 0",
          }}
        >
          <Grid.Column
            width={16}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AboutMeCard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <ContactMenu />
    </div>
  );
}
