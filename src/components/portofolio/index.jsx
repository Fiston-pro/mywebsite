import React from "react";
import "./style.css";

import OFFICE from "../../assets/portfolio/objectdetection/office.gif";
import ROAD from "../../assets/portfolio/objectdetection/road.gif";

import BIRIFRESH_GIF from "../../assets/portfolio/birifresh/birifresh-gif.gif";
import BIRIFRESH from "../../assets/portfolio/birifresh/birifresh.gif";

import STARCONSTRUCTION from "../../assets/portfolio/starconstruction/starconstruction.gif";

import QUOTEAPP from "../../assets/portfolio/quoteapp/QuoteApp.gif";
import QUOTEAPP2 from "../../assets/portfolio/quoteapp/QuoteApp.png";

import WORDTIME from "../../assets/portfolio/worldtime/worldtime.gif";
import WORDTIME2 from "../../assets/portfolio/worldtime/WorldTimeApp.png";

import PORTFOLIOWEB from "../../assets/portfolio/thiswebsite/this-website.gif";
import PORTFOLIOWEB2 from "../../assets/portfolio/thiswebsite/thiswebsite.gif";

import OPENLANGUAGE from "../../assets/portfolio/openlanguages/openlanguages.PNG";

import MyModal from "./dialog";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function Portofolio() {
  const portfolio = [
    {
      title: "Open Languages",
      description: "Open languages is a project which shows the map of bible translation in the world.",
      github: "",
      live: "https://openlanguages.vercel.app/",
      images: [OPENLANGUAGE],
      technologies: ["Next.js", "Typescript","Tailwind CSS"],
    },
    {
      title: "Object detection AI",
      description: "A Jupyter Notebook which detect different objects and display the objects emoji ",
      github: "https://github.com/Fiston-pro/Emoji-Object-Detection",
      live: "",
      images: [OFFICE, ROAD],
      technologies: ["Python", "Tensorflow"],
    },
    {
      title: "BiriFresh",
      description: "Online shopping website for fresh products",
      github: "",
      live: "",
      images: [BIRIFRESH_GIF, BIRIFRESH],
      technologies: ["Wordpress", "PHP", "HTML", "CSS"],
    },
    {
      title: "Star Construction",
      description: "A freelance project for a construction company",
      github: "",
      live: "",
      images: [STARCONSTRUCTION],
      technologies: ["Wordpress", "PHP", "HTML", "CSS"],
    },
    {
      title: "Quote App",
      description: "An App which can show your favorite quotes whenever you feel down. I build it using flutter a cross platform framework so that it can run on both android and IOS :)",
      github: "https://github.com/Fiston-pro/QuoteApp",
      live: "",
      images: [QUOTEAPP, QUOTEAPP2],
      technologies: ["Dart", "Flutter"],
    },
    {
      title: "World Time App",
      description: "It is a Flutter application that runs on Android or iOS. This app is like a wizard who lends you a wand and allows you to choose any place on our planet, and shows you time and time zone instantly.",
      github: "https://github.com/Fiston-pro/WorldTimeApp",
      live: "",
      images: [WORDTIME, WORDTIME2],
      technologies: ["Dart", "Flutter"],
    },
    {
      title: "Personal Portfolio Website",
      description: "An App which can show your favorite quotes whenever you feel down. I build it using flutter a cross platform framework so that it can run on both android and IOS :)",
      github: "https://github.com/Fiston-pro/Website",
      live: "https://fiston-pro.github.io/Website/",
      images: [PORTFOLIOWEB, PORTFOLIOWEB2],
      technologies: ["React", "Sass", "JavaScript"],
    }


  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portfolio__container">
        {portfolio.map((item, index) => (
            <article key={index} className="portfolio__item">
              <div className="flex justify-end" ><MyModal data={item} /></div>
              
              <div className="portfolio__item-image">
                <AwesomeSlider
                  bullets={false}
                  media={item.images.map((image, index) => ({ source: image }))}
                />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                {item.github && (
                  <a href={item.github} className="btn" target="_blank">
                    Github
                  </a>
                )}
                {item.live && (
                  <a
                    href={item.live}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
        ))}
      </div>
    </section>
  );
}

export default Portofolio;
