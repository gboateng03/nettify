import React from "react";
import Navbar from "../../Components/Navbar";
import RoadMapPost from "./../../Components/RoadMapPost";

import "./index.css";

export default class Roadmap extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <Navbar color="#000" />
        <RoadMapPost />
      </div>
    );
  }
}
