import "./SkillsCard.css";
import { Icon, Image, Grid } from "semantic-ui-react";
export default function SkillsCard() {
  return (
    <section className="skills-section">
      <div className="Skills">Skills</div>
      <div className="skills-div">
        <div className="Front-End">
          <span className="ul-title">Front-End</span>
          <ul className="Front-End-UL">
            <Grid className="front-end-grid">
              <Grid.Row
                className="Front-End-Row"
                style={{ justifyContent: "center" }}
              >
                <Grid.Column
                  style={{
                    height: "100%",
                    width: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: "10vh",
                  }}
                >
                  <li>
                    <Icon className="html5"></Icon> HTML
                  </li>
                  <li>
                    <Icon className="css3"></Icon> CSS
                  </li>
                  <li>
                    <Icon className="react"> </Icon> React
                  </li>
                </Grid.Column>
                <Grid.Column
                  style={{
                    height: "100%",
                    width: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: "10vh",
                  }}
                >
                  <li>
                    <Icon className="js"> </Icon> JavaScript
                  </li>
                  <li style={{ display: "flex" }}>
                    <Image
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                      src="https://i.imgur.com/9CoOcff.png"
                    />
                    Semantic UI
                  </li>
                  <li style={{ display: "flex" }}>
                    <Image
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                      src="https://i.imgur.com/YByLKgN.png"
                    />
                    Bootstrap
                  </li>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </ul>
        </div>

        <div className="Back-End">
          <span className="ul-title" style={{ color: "rgb(158 144 152)" }}>
            Back-End
          </span>
          <ul className="Back-End-UL">
            <Grid className="back-end-grid" style={{ height: "100%" }}>
              <Grid.Row
                className="Back-End-Row"
                center
                style={{ justifyContent: "center" }}
              >
                <Grid.Column
                  style={{
                    height: "100%",
                    width: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: "8vh",
                  }}
                >
                  <li>
                    <Icon className="python"></Icon> Python
                  </li>
                  <li style={{ display: "flex" }}>
                    <Image
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                      src="https://i.imgur.com/R1vW3Oj.png"
                    />
                    Django
                  </li>
                  <li style={{ display: "flex" }}>
                    <Image
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                      src="https://i.imgur.com/X3SDVtx.png"
                    />
                    Express
                  </li>
                  <li style={{ display: "flex" }}>
                    <Image
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                      src="https://i.imgur.com/agej0ib.png"
                    />
                    Next.js
                  </li>
                </Grid.Column>
                <Grid.Column
                  style={{
                    height: "100%",
                    width: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: "5vh",
                  }}
                >
                  <li style={{ display: "flex" }}>
                    <Image
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                      src="https://i.imgur.com/IHxUcpF.png"
                    />
                    Firebase
                  </li>
                  <li>
                    <Icon className="node"></Icon> Node
                  </li>

                  <li style={{ display: "flex" }}>
                    <Image
                      style={{
                        height: "30px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                      src="https://i.imgur.com/7HZT5IG.png"
                    />
                    MongoDB
                  </li>
                  <li style={{ display: "flex" }}>
                    <Image
                      style={{
                        height: "20px",
                        width: "25px",
                        marginRight: "10px",
                      }}
                      src="https://i.imgur.com/xQAHL68.png"
                    />
                    PostgreSQL
                  </li>
                  <li style={{ display: "flex" }}>
                    <Image
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                      src="https://i.imgur.com/i9oSgz2.png"
                    />
                    Mongoose
                  </li>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </ul>
        </div>
      </div>
    </section>
  );
}
