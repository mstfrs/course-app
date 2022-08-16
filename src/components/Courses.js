import React, { useEffect, useState } from 'react'
import './CoursesStyle.css'
import axios from 'axios'

import logo from '../assets/globalai.png'
import Details from '../pages/details/Details'
import { useNavigate } from 'react-router-dom'
import { Cards } from './Cards/Cards'

const Courses = () => {
  const [mycourses, setMycourses] = useState()
  const [allCourses, setAllCourses] = useState()
  const [loading, setLoading] = useState(false)

  const mycourseurl =
    'https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/my_courses'

  const allcourseurl =
    'https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/sfwd-courses'

  // const getmyCoursedata = async () => {
  //   if (mycourses !== '') {
  //     const mycoursesresult = await axios.get(mycourseurl)
  //     setMycourses(mycoursesresult.data)
  //   }
  // }
  const getmyCoursedata = async () => {
    const mycoursesresult = await axios.get(mycourseurl)
    setMycourses(mycoursesresult.data)
  }

  const getallCoursedata = async () => {
    const allcoursesresult = await axios.get(allcourseurl)
    setAllCourses(allcoursesresult.data)

    setLoading(true)
  }

  useEffect(() => {
    getmyCoursedata()
    getallCoursedata()
  }, [])
  return (
    <div className="tabs">
      <input
        type="radio"
        className="tabs-radio"
        name="course-tabs"
        id="mycourse-tab"
        checked
      />
      <label htmlFor="mycourse-tab" className="tabs-label">
        My Courses
      </label>
      <div className="tabs-content">
        <div className="course-container">
          {mycourses
            ? mycourses.map((course) => (
                <Cards key={course.id} course={course} />
              ))
            : null}
          <Details />
        </div>
      </div>

      {/* <div className="tabs-content ">
        <div className="grid-container">
          {mycourses
            ? mycourses.map((course) => (
                <Cards key={course.id} course={course} />
              ))
            : null}
        </div>
      </div> */}

      <input
        type="radio"
        className="tabs-radio"
        name="course-tabs"
        id="allcourse-tab"
      />
      <label htmlFor="allcourse-tab" className="tabs-label">
        All Courses
      </label>
      <div className="tabs-content">
        <div className="grid-container">
          {/* {allCourses
            ? allCourses.map((course) => (
                <div className="course-cards content">
                  {parse(course.content.rendered)}
                </div>
              ))
            : null} */}
        </div>
      </div>
    </div>
  )
}

export default Courses
