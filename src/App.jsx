import "./App.css";

import { Grid } from "semantic-ui-react";
import NavBar from "./components/Nav Bar/NavBar";
import ContactMenu from "./components/ContactMenu/ContactMenu";
import NameCard from "./components/NameCard/NameCard";
import SkillsCard from "./components/SkillsCard/SkillsCard";

function App() {
  return (
    <div style={{ backgroundColor: "rgb(101 117 130)" }}>
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
        <Grid.Row centered>
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
      </Grid>
      <ContactMenu />
    </div>
  );
}

export default App;
