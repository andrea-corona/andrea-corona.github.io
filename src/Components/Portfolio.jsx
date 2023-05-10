/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/background-portfolio.jpg";
import eva from "../images/eva.png";
import moea from "../images/moea.png";
import traffic from "../images/traffic.jpeg";
import ProjectCard from "./Card";

const imageAltText = "desktop with computer";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Traffic Simulation",
    description:
      "Creation of an agent-based model using Mesa framework in Python that allows traffic light coordination to reduce congestion at a vehicular crossing. Implementation of a 3D simulation in Unity to visualize the agents-based model. Both applications were connected through a Flask server run on a IBM Cloud.",
    url: "https://github.com/andrea-corona/examples-multiagents",
    img: traffic,
    imageAltText: "Azure",
  },
  {
    title: "E.V.A.",
    description:
      "A chatbot powered by CohereAI that allows users to modify work items in Azure DevOps and create Outlook meetings. The front-end is in Angular and the back-end is in Python using Flask, providing a user-friendly interface and seamless integration. This project showcases my ability to leverage modern technologies to create efficient and streamlined applications.",
    url: "https://github.com/andrea-corona/EVA",
    img: eva,
    imageAltText: "E.V.A.",
  },
  {
    title: "Open-Source Python Library for Visualizing Multi-Objective Evolutionary Algorithms",
    description:
      "Open-source Python library that provides customizable visualization tools for multi-objective evolutionary algorithms. Using Matplotlib from Python, users can create high-quality scatter plots, parallel coordinates plots, and radar charts to explore MOEA results. My participation on the project focuses on the visualization module, providing a valuable resource for researchers and practitioners in the MOEA community.",
    url: "https://github.com/andrea-corona/MOEA",
    img: moea,
    imageAltText: "MOEA",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "90%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div key={project.title}>
              <ProjectCard
                title={project.title}
                description={project.description}
                url={project.url}
                img={project.img}
                imageAltText={project.imageAltText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

/**
<div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>        
</div>
 */
