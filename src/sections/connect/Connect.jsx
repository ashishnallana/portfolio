import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Connect() {
  return (
    <div id="contact_section" className="flex flex-col items-center px-3 mt-10">
      <h1 className="my-5 mb-10 font-bold text-5xl text-center">
        LET'S CONNECT 🤝
      </h1>
      <p className="text-lg mb-2 text-center">
        I'd love to hear from you! Feel free to reach out to me via email or
        connect with me on my social profiles.
      </p>
      <a
        href="mailto:ashishnallana@gmail.com"
        className="text-blue-500 text-lg relative"
      >
        ashishnallana@gmail.com
      </a>
      <div className="mt-20 text-center">
        <p className="text-xl font-semibold">Social Profiles</p>
        <div className="flex justify-center space-x-4 mt-3 relative">
          <a
            href="www.linkedin.com/in/ashish-nallana-52a6651bb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://github.com/ashishnallana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://x.com/AshishNallana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <TwitterIcon fontSize="large" />
          </a>
          <a
            href="https://www.instagram.com/ashish.nallana/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <InstagramIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Connect;
