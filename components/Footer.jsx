import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="w-full min-h-min md:h-24 flex justify-around items-center">
        <div className="logo w-1/3">Anish Shrestha ® 2022</div>
        <div className="social-media grid sm:flex items-center justify-around w-2/3 cursor-pointer">
          <a
            target="_blank"
            href="https://twitter.com/meanishshrestha"
            rel="noreferrer"
          >
            <div className="twitter text-blue-800">
              <FontAwesomeIcon icon={faTwitter} />
              Twitter
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/anishresthanishrestha/"
            rel="noreferrer"
          >
            <div className="facebook text-blue-400">
              <FontAwesomeIcon icon={faFacebook} />
              Facebook
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/a.n.i.s.h.r.e.s.t.h.a/"
            rel="noreferrer"
          >
            <div className="instagram text-red-300">
              <FontAwesomeIcon icon={faInstagram} />
              Instagram
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
