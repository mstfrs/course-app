import React, { useEffect, useState } from 'react'
import './CoursesStyle.css'
import axios from 'axios'
import { Cards } from './Cards/Cards'
import logo from '../assets/globalai.png'

const Courses = () => {
  const [mycourses, setMycourses] = useState()
  const [allCourses, setAllCourses] = useState()
  const [loading, setLoading] = useState(false)

  const mycourseurl =
    'https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/my_courses'

  const allcourseurl =
    'https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/sfwd-courses'

  const getmyCoursedata = async () => {
    if (mycourses !== '') {
      const mycoursesresult = await axios.get(mycourseurl)
      //   setMycourses(result.data)

      setMycourses(mycoursesresult.data)
    }
  }
  const getallCoursedata = async () => {
    if (allCourses !== '') {
      const allcoursesresult = await axios.get(allcourseurl)
      //   setMycourses(result.data)

      setAllCourses(allcoursesresult.data)
      console.log(allCourses)
      setLoading(true)
    }
  }

  useEffect(() => {
    getmyCoursedata()
    getallCoursedata()
    // axios.get(mycourseurl).then((res) => setMycourses(res.data))
    // console.log(mycourses)

    // fetch(
    //   'https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/my_courses',
    // )
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))
    // axios(
    //   'https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.iö/wp-json/ldlms/v2/my_courses',
    // ).then((res) => console.log(res))
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
        <div class="main">
          <ul class="cards">
            {mycourses
              ? mycourses.map((course) => (
                  <li class="cards_item">
                    <div class="card">
                      <div class="card_image">
                        <img src={logo} alt="course_image" />
                        <span className="enrolled">ENROLLED</span>
                      </div>
                      <div class="card_content">
                        <h2 class="card_title">{course.title}</h2>
                        <p class="card_text">{course.description}</p>
                        <button class="btn card_btn">Read More</button>
                      </div>
                    </div>
                  </li>
                ))
              : null}
          </ul>
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

          <div className="course-cards content">
            {/* {loading ? ReactHtmlParser(allCourses[0].content.rendered) : null} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
