import "./SkillsCard.css";

export default function SkillsCard() {
  return (
    <div
      style={{
        width: "70vw",
        height: "50vh",
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
          marginBottom: "10px",
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
        <div
          className="Front-End"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "100%",
            backgroundColor: "rgb(158 144 152)",
          }}
        >
          <span>Front-End</span>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <div
          className="Back-End"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "100%",
            backgroundColor: "rgb(76 30 57)",
          }}
        >
          <span>Back-End</span>
          <ul>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
