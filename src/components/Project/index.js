import React from "react";
import apps from "./app.json";

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
          id: 3,
          name: "Note-taker",
          image: require("../../assets/images/siteImgs/note-taker.PNG").default,
          link: "https://challenge-note-taker.herokuapp.com/",
          GhLink: "https://github.com/NathanaelWhite/Challenge-Note-Taker",
        },
        {
          id: 4,
          name: "Photo-port",
          image: require("../../assets/images/siteImgs/photo-port.PNG").default,
          link: "https://nathanaelwhite.github.io/photo-port/",
          GhLink: "https://github.com/NathanaelWhite/photo-port",
        },
        {
          id: 5,
          name: "Pizza-hunt",
          image: require("../../assets/images/siteImgs/pizza-hunt.PNG").default,
          link: "https://nameless-forest-20765.herokuapp.com/",
          GhLink: "https://github.com/NathanaelWhite/pizza-hunt",
        },
        {
          id: 6,
          name: "Tech-blog",
          image: require("../../assets/images/siteImgs/tech-blog.PNG").default,
          link: "https://salty-mesa-11111.herokuapp.com/",
          GhLink: "https://github.com/NathanaelWhite/tech-blog-mvc",
        },
      ];

  return (
      <div className="row">
    <div class="card w-25 text-light bg-danger p-0">
      <img
        src={sites.image}
        alt={sites.name}
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">Dev Me Up {sites.name}</h5>
      </div>
      <div class="card-body">
        <a href="#" class="card-link">
          Live App
        </a>
        <a href="#" class="card-link">
          Repo
        </a>
      </div>
    </div>
    </div>
  );
}

export default Project;
