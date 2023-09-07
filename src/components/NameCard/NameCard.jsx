import { Image } from "semantic-ui-react";
import "./NameCard.css";
export default function NameCard() {
  return (
    <div className="name-card">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          className="name-design"
          src="https://i.imgur.com/2J1Pham.png"
          floated="left"
          style={{ maxWidth: "300px" }}
        />
        <div style={{ color: "rgb(208 208 210)", width: "30vw" }}>
          <p className="FirstName">Emily</p>
          <p className="LastName">Wilborn</p>
        </div>
      </div>
    </div>
  );
}
