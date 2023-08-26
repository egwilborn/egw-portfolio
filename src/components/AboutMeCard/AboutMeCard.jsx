import { Image } from "semantic-ui-react";

export default function AboutMeCard() {
  return (
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
          size="medium"
          src="https://i.imgur.com/RmUpFte.jpg"
          floated="left"
        />
        <div style={{ color: "rgb(154 144 152)", width: "30vw" }}>
          <p
            className="FirstName"
            style={{ textAlign: "left", fontSize: "4vw", marginLeft: "30px" }}
          >
            Emily
          </p>
        </div>
      </div>
    </div>
  );
}
