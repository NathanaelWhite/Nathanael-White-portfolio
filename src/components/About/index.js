import React from "react";
import pic from "../../assets/images/about-img2.jpg";

function About() {
  return (
      <div class="text-light p-5 m-0 rounded-0 fs-3 bg-stuff" id="about">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={pic}
              alt="profile pic"
              class="img-fluid rounded-circle d-block about-img"
            />
          </div>
          <div class="col-md-8 p-3">
            <div class="card-body">
              <h5 class="card-title fs-4">About Me:</h5>
              <p class="card-text">
                I graduated from the UT Austin Coding Bootcamp in September of
                2021. I've coached a multitude of fitness methods since 2014
                (gymnastics, CrossFit, strength & conditioning). I worked as a
                therapy practitioner with Synergy Release Method from 2016-2021
                when I found a passion for web development.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default About;
