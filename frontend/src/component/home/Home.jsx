import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import Hero from "./hero/Hero"
import OnlineCourses from "../allcourses/OnlineCourses"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <Testimonal />
      <OnlineCourses/>
      <Hblog />
    </>
  )
}

export default Home
