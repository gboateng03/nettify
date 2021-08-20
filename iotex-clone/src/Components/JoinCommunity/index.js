import React from "react";
import { Grid } from "@material-ui/core";
import { FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import "./index.css";

export default class JoinCommunity extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="_community_div">
          <h1 className="_community_heading">Join the Community</h1>
          <p className="_community_des">
            Help shape the future of the IoTeX network and learn more about
            IoTeX by chatting with team members and other people in the
            community.
          </p>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item lg={2} xs={6}>
              <div className="_telegram_div">
                <div className="_community_icon_div">
                  <FaTelegramPlane />
                </div>
                <p className="_social_heading">Telegram</p>
                <p className="_social_des">Chat and read our announcements</p>
              </div>
            </Grid>
            <Grid item lg={2} xs={6}>
              <div className="_telegram_div">
                <div className="_community_icon_div">
                  <FaTwitter />
                </div>
                <p className="_social_heading">Twitter</p>
                <p className="_social_des">Follow the latest IoTeX news</p>
              </div>
            </Grid>
            <Grid item lg={2} xs={6}>
              <div className="_telegram_div">
                <div className="_community_icon_div">
                  <AiOutlineGithub />
                </div>
                <p className="_social_heading">Github</p>
                <p className="_social_des">Track our development</p>
              </div>
            </Grid>
            <Grid item lg={2} xs={6}>
              <div className="_telegram_div">
                <div className="_community_icon_div">
                  <FaYoutube />
                </div>
                <p className="_social_heading">Youtube</p>
                <p className="_social_des">Watch our latest content</p>
              </div>
            </Grid>
          </Grid>
          <h1 className="_stay_updated_txt">Stay Updated</h1>
          <p className="_subscribe_txt">Subscribe to our monthly newsletter</p>
          <div className="_subscribe_div">
            <input
              type="email"
              placeholder="Email"
              className="_subscribe_input"
            />
            <button className="_submit_btn">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
