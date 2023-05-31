import React from "react";
import "./style.css";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import MyModal from "./dialog";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function Portofolio() {
  const portfolio = [
    {
      title: "This is a portofolio item title",
      description: "This is a portofolio item description",
      github: "https://github.com",
      live: "https://dribble.com/Alien_pixels",
      images: [IMG1, IMG2, IMG3],
    },
    {
      title: "This is a portofolio item title",
      description: "This is a portofolio item description",
      github: "https://github.com",
      live: "https://dribble.com/Alien_pixels",
      images: [IMG2],
      technologies: ["React", "Python", "AWS"],
    },
    {
      title: "This is a portofolio item title",
      description: "This is a portofolio item description",
      github: "https://github.com",
      live: "https://dribble.com/Alien_pixels",
      images: [IMG3],
    },
    {
      title: "This is a portofolio item title",
      description: "This is a portofolio item description",
      github: "https://github.com",
      live: "https://dribble.com/Alien_pixels",
      images: [IMG4],
    },
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
