import React from "react";
import Card1_Image from "./../../assets/user.png";
import Card2_Image from "./../../assets/mining.png";
import Card3_Image from "./../../assets/real.png";
import Card4_Image from "./../../assets/deflot.png";
import Background1_Card1 from "./../../assets/next_card.png";
import Background2_Card1 from "./../../assets/card1.png";
import Background2_Card2 from "./../../assets/card2.png";
import Background2_Card3 from "./../../assets/card3.png";
import Background2_Card4 from "./../../assets/card4.png";
import { Grid } from "@material-ui/core";
import "./index.css";

export default class BlockchainIdeasProjects extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          cardTitle: "Decentralized",
          cardImage: Card1_Image,
          cardDes: "IoTeX has 100 delegators and is fully decentralized. ",
          hovered: false,
          background_image1: Background1_Card1,
          background_image2: Background2_Card1,
        },
        {
          cardTitle: "Device Ready",
          cardImage: Card2_Image,
          cardDes:
            "IoTeX is the first blockchain platform to connect real-world data to Dapps ",
          hovered: false,
          background_image1: Background1_Card1,
          background_image2: Background2_Card2,
        },
        {
          cardTitle: "Ultra Fast",
          cardImage: Card3_Image,
          cardDes:
            "Each IoTeX transaction is practically instantaneous and only costs a fraction of a cent ",
          hovered: false,
          background_image1: Background1_Card1,
          background_image2: Background2_Card3,
        },
        {
          cardTitle: "Secure & Tested",
          cardImage: Card4_Image,
          cardDes:
            "IoTeX boasts one of the best cryptographic security systems in the blockchain space ",
          hovered: false,
          background_image1: Background1_Card1,
          background_image2: Background2_Card4,
        },
      ],
    };
  }
  render() {
    let { cards } = this.state;
    return (
      <div>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item lg={10} xs={12}>
            <div className="_launchpad_blockchain_txt">
              A Launchpad for Blockchain Ideas and Projects
            </div>
          </Grid>
        </Grid>
        <div className="_launchpad_blockchain_des">
          The IoTeX platform hosts an ever-growing ecosystem of projects and
          products that have been developed by members of the IoTeX community
        </div>
        <div style={{ marginTop: 10 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item lg={4} xs={12}>
              <div>
                <button className="_Explore_btn">
                  Explore the IoTeX Ecosystem
                </button>
              </div>
            </Grid>
            <Grid item lg={6} xs={12}>
              <div className="_cards_div">
                {cards.map((val, i) => {
                  return (
                    <div
                      className="_card"
                      style={{
                        backgroundImage: val.hovered
                          ? `url(${val.background_image2})`
                          : `url(${val.background_image1})`,
                      }}
                      onMouseOver={() => {
                        let { cards } = this.state;
                        cards[i].hovered = true;
                        this.setState({ cards: cards });
                      }}
                      onMouseOut={() => {
                        let { cards } = this.state;
                        cards[i].hovered = false;
                        this.setState({ cards: cards });
                      }}
                    >
                      {val.hovered ? (
                        <div className="_card_des">{val.cardDes}</div>
                      ) : (
                        <>
                          <div className="_card_des">{val.cardTitle}</div>
                          <img src={val.cardImage} className="_card_image" />
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
