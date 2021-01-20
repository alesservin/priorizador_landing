import React from "react"

import "../css/card.css"

const Card = ({title, icon, url}) => (
    <div className="card">
      <a href={url}>
      <div className="card-content" >
        <h2>{title}</h2>
        <div className="icon">{icon}</div>
      </div>
      </a>
    </div>

)

export default Card
