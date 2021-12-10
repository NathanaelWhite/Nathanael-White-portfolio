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
              Reliable and focused Full-stack Developer. Graduate of University of Texas Coding Bootcamp. Proficient in React, NodeJS, MongoDB, JavaScript, HTML5. Mindset of athlete/competitor, and coach building on my commitment to excellence, perseverance, and strong work ethic. Skilled communicator and time manager with eight years of leadership experience in positions of authority and responsibility. Currently seeking an intriguing opportunity where I can utilize my creativity, attention to detail, and analytical mind to problem solve and help teams optimize their work.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default About;
