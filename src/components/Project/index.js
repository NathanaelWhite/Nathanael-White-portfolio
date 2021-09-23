import React from "react";

function Project() {

    const sites = [
        {
          id: 0,
          name: "Dev-Me-Up",
          image: require("../../assets/images/siteImgs/devmeup.PNG").default,
          link: "https://mysterious-temple-90706.herokuapp.com/",
          GhLink: "https://github.com/NathanaelWhite/Dev-it-to-You",
        },
        {
          id: 1,
          name: "Jot it",
          image: require("../../assets/images/siteImgs/jot-it.PNG").default,
          link: "https://jotitgood.herokuapp.com/",
          GhLink: "https://github.com/NathanaelWhite/Jot-It",
        },
        {
          id: 2,
          name: "Food Festival",
          image: require("../../assets/images/siteImgs/food-festival.PNG").default,
          link: "https://nathanaelwhite.github.io/food-festival/",
          GhLink: "https://github.com/NathanaelWhite/food-festival",
        },
        {
          id: 4,
          name: "Photo-port",
          image: require("../../assets/images/siteImgs/photo-port.PNG").default,
          link: "https://nathanaelwhite.github.io/photo-port/",
          GhLink: "https://github.com/NathanaelWhite/photo-port",
        },
      ];

  return (
      <div className="row">
    {sites.map((site) => (
    <div class="card w-25 text-light bg-secondary p-1">
      <img
        src={site.image}
        alt={site.name}
        class="card-img-top w-100 h-50"
      />
      <div class="card-body">
        <h5 class="card-title">{site.name}</h5>
      </div>
      <div class="card-body">
        <a href={site.link} class="card-link">
          Live App
        </a>
        <a href={site.GhLink} class="card-link">
          Repo
        </a>
      </div>
    </div>
    ))}
    </div>
  );
}

export default Project;
