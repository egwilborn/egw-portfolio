import "./SkillsCard.css";
import { Icon, Image, Grid } from "semantic-ui-react";
export default function SkillsCard() {
  return (
    <section
      style={{
        width: "70vw",
        height: "60vh",
        margin: "5vh 0 20vh 0",
        backgroundColor: "rgb(97 118 129)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
          marginBottom: "15px",
        }}
      >
        Skills
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "70vw",
          height: "50vh",
        }}
      >
        <div className="Front-End">
          <span
            className="ul-title"
            style={{
              color: "rgb(76 30 57)",
              fontSize: "2vw",
            }}
          >
            Front-End
          </span>
          <ul className="Front-End-UL">
            <Grid style={{ height: "100%", width: "100%" }}>
              <Grid.Row
                columns="two"
                centered
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Grid.Column
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
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
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </ul>
        </div>

        <div className="Back-End">
          <span
            className="ul-title"
            style={{ color: "rgb(158 144 152)", fontSize: "2vw" }}
          >
            Back-End
          </span>
          <ul className="Back-End-UL">
            <Grid style={{ height: "100%" }}>
              <Grid.Row
                columns="two"
                centered
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Grid.Column
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
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
                  <li>
                    <Icon className="node"></Icon> Node
                  </li>
                </Grid.Column>
                <Grid.Column
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
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
