import React from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/globalai.png'
import './DetailsStyle.css'

const Details = (props) => {
  const location = useLocation()
  console.log(location.state)

  return (
    <>
      {location.state ? (
        <div className="details-container">
          <img className="course-image" src={logo} alt="" />
          <h1 className="title">{location.state.course.title.toUpperCase()}</h1>
          <br />
          <p className="description">{location.state.course.description}</p>

          <a href={location.state.course.link}>
            <h3 className="details-link">Course Details</h3>
          </a>
        </div>
      ) : null}
    </>
  )
}

export default Details
