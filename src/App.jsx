import React from "react";
import "./App.css";
import LogoImg from "./assets/j3.png";
import ContentImg from "./assets/1.png";
import MissionImg from "./assets/2.png";
import MobImg from "./assets/mob.png";
import flutterImg from './assets/download.jfif';
import GraphicImg from './assets/learn-graphic-design.jpg';
import BlogImg from './assets/blog-image-Soical-media-v-digital.png';
import blockChainImg from './assets/blockchain.jpg';
import { Container, Typography } from "@mui/material";
import Card from "./card/Card";
import Gallery from "./Gallery/Gallery";
import { FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="header">
          <Container maxWidth="xl">
            <div className="nav">
              <span style={{ height: "100%", width: "250px", display: "flex" }}>
                <img
                  src={LogoImg}
                  alt=""
                  style={{
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </span>
              <hr style={{ height: "60%", width: 1 }} />
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Training</li>
                <li>Contact us</li>
              </ul>
            </div>
          </Container>
          <div className="content">
            <div className="intro">
              <Container maxWidth="md">
                <Typography
                  variant="h4"
                  style={{ fontWeight: 700, color: "#006838" }}
                >
                  Introduction To <br /> Jawan Pakistan
                </Typography>
                <Typography mt={3} style={{ width: "85%", color: "#99A3B3" }}>
                  The foundation of every state is the education and skills set
                  of its youth. Jawan Pakistan is such an organization of
                  Pakistan who is not only working on youth education but also
                  enhancing skills set in youth either Free of cost or in a very
                  low cost. This initiative, initially developed by a single
                  person and with almost no seed capital, promotes
                  entrepreneurship and innovation and Sustainable Development
                  Goal, which promotes inclusive and sustainable economic
                  growth.
                </Typography>
              </Container>
            </div>
            <div className="Intro_img">
              <img
                src={ContentImg}
                alt=""
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="mission_img">
            <img
              src={MissionImg}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="mission_intro">
            <Container maxWidth="lg">
              <Typography
                variant="h4"
                style={{ fontWeight: 700, color: "#006838" }}
              >
                Mission And Vision <br /> Behind Jawan Pakistan
              </Typography>
              <Typography mt={3} style={{ color: "#99A3B3" }}>
                Our vision is to bring our students into the 21st century
                through innovation and modern technology. To create a better
                every day life for every people. This program is not only
                impacting the youth in monetary perspective but it is also
                creating some deep-rooted, long-term psychological effects e.g.
                minimizing frustration among the unemployed youth.
              </Typography>
              <Typography mt={3} style={{ color: "#99A3B3" }}>
                Our mission is to provide high quality education that connects
                young people with opportunities to transform their lives. The
                educated youngsters who remain unemployed gets frustrated,
                depressed and disheartened when they do not succeed in getting
                their dream jobs. This training reinforces the educated youth to
                earn well through freelancing, develop variety of skills through
                specified domains and promote entrepreneurial culture that
                diverts youths potentials for constructive purposes. This energy
                diversion definitely make the youth more confident, self-reliant
                and constructive asset for a progressing economy.
              </Typography>
            </Container>
          </div>
        </div>

        <div className="founder">
          <div className="founder_img"></div>
          <hr
            style={{
              width: "40px",
              height: "5px",
              borderRadius: "100px",
              backgroundColor: "#667EEA",
            }}
          />
          <Typography
            variant="h3"
            style={{ fontWeight: 700, color: "#006838" }}
          >
            MUHAMMAD ALI MUGHAL
          </Typography>
          <Typography style={{ color: "#99A3B3" }}>
            Founder of Jawan Pakistan
          </Typography>
          <Typography
            style={{
              color: "#99A3B3",
              width: "50%",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            We aim to be most efficient provider of business process outsourcing
            services by setting the industry standards for cost and quality of
            services. Our long term success will be driven by our relentless
            focus on recruiting and developing the most talented pool of human
            capital in our industry.
          </Typography>
        </div>

        <div className="course">
          <Typography mb={10}
           variant="h3"
           style={{ fontWeight: 700, color: "#006838" }}
          >
          IT Trainings offering in Jawan Pakistan
          </Typography>
          <div className="cards">
          <Card cardImg={MobImg} title='Web and Mobile Application Development'/>
          <Card cardImg={flutterImg} title='Flutter Mobile Application Development'/>
          <Card cardImg={GraphicImg} title='Graphic Design And Video Editing'/>
          <Card cardImg={BlogImg} title='Digital And Social Media Marketing'/>
          <Card cardImg={blockChainImg} title='BlockChain Development'/>
          </div>
        </div>

        <div className="Gallery">
          <Container maxWidth='xl'>

          <Typography
          mt={10}
          mb={10}
          variant="h3"
          style={{ fontWeight: 700, color: "#006838" }}
          >Glimpses of sessions conducted by Jawan Pakistan</Typography>
          <Gallery/>
          </Container>
        </div>
        <hr />
        <div className="Form">
          <div className="Form_box">
            <Typography variant="h5" style={{fontWeight: 700}}>Contact</Typography>
            <label htmlFor="">Name <span>*</span></label>
            <input type="text" name="" id="" />
            <label htmlFor="">Email <span>*</span></label>
            <input type="email" name="" id="" placeholder="example@gmail.com"/>
            <label htmlFor="">Phone Number <span>*</span></label>
            <input type="number" name="" id="" placeholder="03172980810"/>
            <label htmlFor="">Message <span>*</span></label>
            <textarea name="" id="" cols="30" rows="8"></textarea>
            <button>Submit</button>
          </div>
        </div>
        <div className="footer">
        <span style={{ height: "100%", width: "250px", display: "flex" }}>
                <img
                  src={LogoImg}
                  alt=""
                  style={{
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </span> 
          <ul>
            <li>Company</li>
            <li>Home</li>
            <li>About us</li>
            <li>Trainings</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>Contact Details</li>
            <li>Muhammad Ali Mughal</li>
            <li>+923005292675</li>
            <li>jawantechpk@gmail.com</li>
          </ul>
        </div>
        <div className="copyWrite">
          <span style={{fontSize: 14}}>© 2022 JawanPakistan</span>
          <span style={{display: 'flex', gap: 10, fontSize: 20, color: '#99A3B3'}}>
            <FaFacebookF/>
            <FaInstagram/>
            <FaLinkedinIn/>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
