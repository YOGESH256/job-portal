import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <h1>Recommended Courses</h1>
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
