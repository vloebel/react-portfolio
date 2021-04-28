import React from "react";

const About = () => (
  <div>
    <h1>About Page</h1>
    <img src={require(`../../assets/images/vickyphoto.jpg`).default} alt="vicky loebel headshot" />

    <p>
    Vicky Loebel began her technical career as a systems programmer on the flight simulators at the NASA Ames research facility in Silicon Valley, followed by several years' experience as a contract coder and software technical writer. Her education includes a BA in Lingustics from the University of Wisconsin and a Masters of Computer Science from San Jose State. She is currently enrolled in the University of Arizona's Full-Stack Web Developemnt Bootcamp with the goal of seeking freelance work in website design and development.
    </p>
  </div>
);

export default About;
