import { Grid } from "semantic-ui-react";
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
          <div style={{ backgroundColor: "rgb(32 41 54)" }}>PROJECT 1</div>
        </Grid.Column>
        <Grid.Column>
          <div style={{ backgroundColor: "rgb(66 34 57)" }}>PROJECT 2</div>
        </Grid.Column>
        <Grid.Column>
          <div style={{ backgroundColor: "rgb(32 41 54)" }}>PROJECT 3</div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <div style={{ backgroundColor: "rgb(66 34 57)" }}>PROJECT 4</div>
        </Grid.Column>
        <Grid.Column>
          <div style={{ backgroundColor: "rgb(32 41 54)" }}>PROJECT 5</div>
        </Grid.Column>
        <Grid.Column>
          <div style={{ backgroundColor: "rgb(66 34 57)" }}>PROJECT 6</div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
