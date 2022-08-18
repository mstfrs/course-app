import React from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/globalai.png'
import './DetailsStyle.css'
import parse from 'html-react-parser'

const Details = (props) => {
  const location = useLocation()

  var tabstatement
  if (location.state.tabid === 'mycourse-tab' || location.state.tabid === '') {
    tabstatement = location.state ? (
      <div className="details-container">
        <img className="course-image" src={logo} alt="" />
        <h1 className="title">{location.state.course.title.toUpperCase()}</h1>
        <br />
        <p className="description">{location.state.course.description}</p>

        <a href={location.state.course.link}>
          <h3 className="details-link">Course Details</h3>
        </a>
      </div>
    ) : null
  } else if (location.state.tabid === 'allcourse-tab') {
    tabstatement = (
      <div className="details-container">
        <h1 className="course-title">{location.state.course.title.rendered}</h1>

        {parse(location.state.course.content.rendered)}
      </div>
    )
  }

  return <>{tabstatement}</>
}

export default Details
