import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faMap,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';

import "../css/index.css"

const IndexPage = () => (
  <Layout>
    <SEO/>
    <div className="description">
      <p>
        El Priorizador es una herramienta sencilla que identifica las zonas
        m&aacute;s necesitadas de nuestro municipio. Es una contribuci&oacute;n
        al trabajo de ayuda de la Municipalidad de Ciudad del Este y de grupos
        que est&aacute;n donando a las familias m&aacute;s necesitadas.
      </p>
    </div>
    <div className="cards">
      <Card title="Mapa" icon=<FontAwesomeIcon icon={faMap}/>
        url="https://priorizador.reaccion.org.py/"
      />
      <Card title="An&aacute;lisis" icon=<FontAwesomeIcon icon={faChartBar}/>
        url="https://priorizador.reaccion.org.py/analysis"
      />
      <Card title="Acerca de" icon=<FontAwesomeIcon icon={faInfoCircle}/>
        url="https://priorizador.reaccion.org.py/about"
      />
    </div>
  </Layout>
)

export default IndexPage
