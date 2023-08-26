import { Image } from "semantic-ui-react";
import "./NameCard.css";
export default function NameCard() {
  return (
    <div
      style={{
        width: "70vw",
        height: "50vh",
        backgroundColor: "rgb(30 41 55)",
        padding: "10px 10px 10px 10px",
        margin: "70vh 10px 5vh 5px",
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
          src="https://i.imgur.com/2J1Pham.png"
          floated="left"
          style={{ width: "30vw", height: "30vh", maxWidth: "300px" }}
        />
        <div style={{ color: "rgb(154 144 152)", width: "30vw" }}>
          <p
            className="FirstName"
            style={{ textAlign: "left", fontSize: "4vw", marginLeft: "30px" }}
          >
            Emily
          </p>
          <p
            className="LastName"
            style={{ textAlign: "right", fontSize: "4vw" }}
          >
            Wilborn
          </p>
        </div>
      </div>
    </div>
  );
}
