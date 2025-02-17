import React from "react";
import { Link } from "react-router-dom";

import "../styles/HeaderGlobal.css"
import images from "../assets/imagesMaps";

function HeaderGlobal({ language, setLanguage }) {
  const github_url = "https://github.com/PauloHASA"
  const linkedin_url = "https://www.linkedin.com/in/paulo-henrique-almeida-da-silva-alves-55a17328b/"
  const whatsapp_url = "https://wa.me/5511963965062"
  
  return(
    <>
      <header className="header-landingPage">
        <div className="change-language">
          <button onClick={() => setLanguage('pt')}>
            <img src={images.logos.icon_brasil} alt="" />
          </button>
          <button onClick={() => setLanguage('en')}>
            <img src={images.logos.icon_usa} alt="" />
          </button>
          <button onClick={() => setLanguage('es')}>
            <img src={images.logos.icon_espanha} alt="" />
          </button>
        </div>
        <div className="icons-socialmedia">
          <Link to={github_url} target="_blank" >
            <i className="bi bi-github"></i>
          </Link>
          <Link to={linkedin_url} target="_blank">
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link>
            <i className="bi bi-envelope-arrow-up-fill"></i>
          </Link>
          <Link  to={whatsapp_url} target="_blank">
            <i className="bi bi-whatsapp"></i>
          </Link>
        </div>
      </header>

    </>
  );
}

export default HeaderGlobal;