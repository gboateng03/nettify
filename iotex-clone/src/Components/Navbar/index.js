import React from "react";
import Logo from "./../../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import "./index.css";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
    };
  }

  Show = () => {
    var navList = document.getElementById("nav-lists");
    navList.classList.add("_Menus-show");
  };

  Hide = () => {
    var navList = document.getElementById("nav-lists");
    navList.classList.remove("_Menus-show");
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    return (
      <div>
        <div className="header" style={{ backgroundColor: this.props.color }}>
          <div class="logo">
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="navbar">
            <div className="icon-bar" onClick={() => this.Show()}>
              <i></i>
              <i></i>
              <i></i>
            </div>

            <ul id="nav-lists">
              <li className="close">
                <span onClick={() => this.Hide()}>
                  <AiOutlineClose />
                </span>
              </li>

              <li>
                <a href="/">IOTX</a>
              </li>
              <li>
                <a href="/investor">Investor</a>
              </li>
              <li>
                <a href="/roadmap">Roadmap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
