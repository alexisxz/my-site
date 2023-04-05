import React from "react";
import "./portfolio.css";
import { data } from "../../data/portfolioData";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Web Development Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blank">
                  GitHub
                </a>
                {demo ? (
                  <a href={demo} className="btn btn-primary" target="__blank">
                    Live
                  </a>
                ) : (
                  ""
                )}
              </div>
            </article>
          );
        })}
      </div>
      <div className="container btn-portfolio__container">
        <a
          href="https://github.com/stars/alexisxz/lists/portfolio"
          className="btn portfolio__btn"
          target="_blank"
          rel="noreferrer"
        >
          More...
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
