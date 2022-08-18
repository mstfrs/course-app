import React, { useContext, useEffect, useState } from 'react'
import './CoursesStyle.css'
import axios from 'axios'

import { Cards } from '../../components/Cards/Cards'
import DetailsModal from '../../components/Modal/DetailsModal'
import ModalContext from '../../context/ModalContext'

const Courses = () => {
  const [mycourses, setMycourses] = useState()
  const [allCourses, setAllCourses] = useState()
  const [loading, setLoading] = useState(false)
  const [tabid, setTabid] = useState('mycourse-tab')
  const { isModalOpen } = useContext(ModalContext)

  const mycourseurl =
    'https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/my_courses'

  const allcourseurl =
    'https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/sfwd-courses'

  const getmyCoursedata = async () => {
    const mycoursesresult = await axios.get(mycourseurl, {
      headers: {
        'Content-Type': 'image/png',
      },
    })
    setMycourses(mycoursesresult.data)
    setLoading(true)
  }

  const getallCoursedata = async () => {
    const allcoursesresult = await axios.get(allcourseurl)
    setAllCourses(allcoursesresult.data)

    setLoading(true)
  }

  const handleClick = (e) => {
    setTabid(e.target.id)
  }

  useEffect(() => {
    getmyCoursedata()
    getallCoursedata()
  }, [])
  return (
    <>
      {loading ? (
        <div className="tabs">
          <input
            type="radio"
            className="tabs-radio"
            name="course-tabs"
            id="mycourse-tab"
            defaultChecked
            onClick={handleClick}
          />
          <label htmlFor="mycourse-tab" className="tabs-label">
            My Courses
          </label>
          <div className="tabs-content">
            <div className="course-container">
              {tabid === 'mycourse-tab' && mycourses
                ? mycourses.map((course) => (
                    <Cards
                      key={course.id}
                      course={course}
                      tabid={tabid}
                      isModalOpen={isModalOpen}
                    />
                  ))
                : null}
            </div>
          </div>

          <input
            type="radio"
            className="tabs-radio"
            name="course-tabs"
            id="allcourse-tab"
            onClick={handleClick}
          />
          <label htmlFor="allcourse-tab" className="tabs-label">
            All Courses
          </label>
          <div className="tabs-content">
            <div className="course-container">
              {tabid === 'allcourse-tab' && allCourses
                ? allCourses.map((course) => (
                    <Cards
                      key={course.id}
                      course={course}
                      tabid={tabid}
                      isModalOpen={isModalOpen}
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
      ) : null}
      <DetailsModal isModalOpen={isModalOpen} />
    </>
  )
}

export default Courses
