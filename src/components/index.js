import React from "react"
import Layout from "./layout"
// Components
import Header from "./Header"
import Work from "./Work"
import About from "./about"
import Skills from "./skills"
import Promotion from "./Promotion"
import Footer from "./Footer"

const IndexPage = () => (
  <Layout>
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
