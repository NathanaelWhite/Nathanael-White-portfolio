import React from "react";

function About() {
  return (
      <div class="card text-light bg-dark p-5 mt-0">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="http://placehold.jp/150x150.png"
              alt="placeholder"
              class="img-fluid rounded-circle mx-auto d-block"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">About Me</h5>
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
