import React from "react"

import PriorizadorLogo from "../images/priorizadorLogo.png"
import CodiumImage from '../images/codium.svg'
import ReaccionImage from '../images/reaccion.svg'
import '../css/header.css'

const Header = () => (
  <header className="ant-layout-header" >
    <div className="header" style={{ maxHeight: '20vh' }} >
      <img src={PriorizadorLogo}
        style={{height: 43, marginLeft: '-10px', marginBottom: 0}}
        alt="Priorizador"
      />
      <div className="header-right">
        <img className="header-logo" src={ReaccionImage}
          alt="Reaccion"  style={{height: 43}}
        />
        <img className="header-logo" src={CodiumImage}
          alt="Codium" style={{height: 38}}
        />
      </div>
    </div>
  </header>
)

export default Header
