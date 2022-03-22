import React from "react"
import Layout from "./layout"
// Components
import Header from "./Header"
import WebWork from "./WebProjects"
import About from "./about"
import Skills from "./skills"
import Promotion from "./Promotion"
import Footer from "./Footer"

const IndexPage = () => (
  <Layout>
    <Header></Header>
    <WebWork></WebWork>
    <Skills></Skills>
    <About></About>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
