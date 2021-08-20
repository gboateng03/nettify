import React from "react";
import Icon1 from "./../../assets/icon-logo1.png";
import Icon2 from "./../../assets/icon-logo2.png";
import Icon3 from "./../../assets/icon-logo3.png";
import Icon4 from "./../../assets/ces_icon.png";
import { Grid } from "@material-ui/core";
import "./index.css";

export default class AwardWinning extends React.Component {
  constructor() {
    super();
    this.state = {
      award_winners:[
        {
          activeImage:Icon1,
        }
      ]
    };
  }
  //   changeDiviceImage = (i) => {
  //     let { devices_Images } = this.state;
  //     if (i === 0) {
  //       devices_Images[0].active = true;
  //       devices_Images[1].active = false;
  //     } else {
  //       devices_Images[0].active = false;
  //       devices_Images[1].active = true;
  //     }
  //     this.setState({ devices_Images: devices_Images });
  //   };
  render() {
    let { blogs, devices_Images, getStartedCardData } = this.state;
    return (
      <div className="_award_div">
        <Grid container justifyContent="center" spacing={5}>
          <Grid item lg={5} xs={12}>
            <div className="_award_wining">
              <div className="award_winners_div">
                <img src={Icon1} className="award_winner_icon" />
              </div>
              <div className="award_winners_div">
                <img src={Icon2} className="award_winner_icon" />
              </div>
              <div className="award_winners_div">
                <img src={Icon3} className="award_winner_icon" />
              </div>
              <div className="award_winners_div">
                <img src={Icon4} className="award_winner_icon" />
              </div>
            </div>
          </Grid>
          <Grid item lg={5} xs={12}>
            <div className="_award_wining_text_div">
              <div className="_backed_txt">Backed By</div>
              <div className="_award_winning_txt">award-winnig</div>
              <div className="_award_winning_des">
                research and technology, IoTeX currently leads the world’s
                premier industry consortiums and standards bodies.
              </div>
              <button className="_see_our_awards_btn">See Our Awards</button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
