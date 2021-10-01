import React from "react";

function Project() {

    const sites = [
        {
          id: 0,
          name: "Dev-Me-Up",
          image: require("../../assets/images/siteImgs/devmeup.PNG").default,
          link: "https://mysterious-temple-90706.herokuapp.com/",
          GhLink: "https://github.com/NathanaelWhite/Dev-it-to-You",
          languages: "React, MaterialUI, GraphQL, Mongoose, ExpressJS, Javascript"
        },
        {
          id: 1,
          name: "Jot it",
          image: require("../../assets/images/siteImgs/jot-it.PNG").default,
          link: "https://jotitgood.herokuapp.com/",
          GhLink: "https://github.com/NathanaelWhite/Jot-It",
          languages: "Bootstrap, Javascript, Handlebars, Sequelize, ExpressJS, MySQL, ESLint"
        },
        {
          id: 2,
          name: "Food Festival",
          image: require("../../assets/images/siteImgs/food-festival.PNG").default,
          link: "https://nathanaelwhite.github.io/food-festival/",
          GhLink: "https://github.com/NathanaelWhite/food-festival",
          languages: "yikes"
        },
        {
          id: 4,
          name: "Photo-port",
          image: require("../../assets/images/siteImgs/photo-port.PNG").default,
          link: "https://nathanaelwhite.github.io/photo-port/",
          GhLink: "https://github.com/NathanaelWhite/photo-port",
          languages: "yikes2.0"
        },
      ];

  return (
      <div className="row">
    {sites.map((site) => (
    <div class="card col-5 text-light p-4 m-5 card-bg mx-auto img-glow">
      <img
        src={site.image}
        alt={site.name}
        class="card-img-top h-50"
      />
      <div class="card-body pb-1">
        <h5 class="card-title">{site.name}</h5>
        <p class="card-text mt-3">{site.languages}</p>
      </div>
      <div class="card-body p-0">
        <a href={site.link} class="card-link text-light">
          Live App
        </a>
        <a href={site.GhLink} class="card-link text-light">
          Repo
        </a>
      </div>
    </div>
    ))}
    </div>
  );
}

export default Project;
