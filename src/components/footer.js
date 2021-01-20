import React from "react"

import PriorizadorLogoSquare from "../images/priorizadorLogoSquare.png"
import "../css/footer.css"

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div>
        <img src={PriorizadorLogoSquare} alt="Priorizador" style={{height: 100}} />
      </div>
      <div style={{marginTop: '8px'}}>
        <p> Desarrollado en conjunto por Reacci&oacute;n y Codium <br></br>
          <a href="https://github.com/reaccionpy/priorizador">
            Github
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
