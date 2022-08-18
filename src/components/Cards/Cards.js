import React, { useContext } from 'react'
import './CardsStyle.css'
import logo from '../../assets/globalai.png'
import { useNavigate } from 'react-router-dom'
import ModalContext from '../../context/ModalContext'

export const Cards = ({ course, tabid }) => {
  const { setIsModalOpen } = useContext(ModalContext)
  let navigate = useNavigate()
  const moreClick = () => {
    navigate('/', { state: { course, tabid } })
    setIsModalOpen(true)
  }

  var tabstatement
  if (tabid === 'mycourse-tab' || tabid === '') {
    tabstatement = (
      <div className="course-card">
        <h1 className="course-title">{course.title}</h1>
        <img className="course-img" src={course?.card_image || logo} alt="" />
        <button onClick={moreClick} className="more-btn">
          View More
        </button>
      </div>
    )
  } else if (tabid === 'allcourse-tab') {
    tabstatement = (
      <div className="course-card">
        <h1 className="course-title">{course.title.rendered}</h1>
        <img className="course-img" src={course?.card_image || logo} alt="" />
        <button onClick={moreClick} className="more-btn">
          View More
        </button>
      </div>
    )
  }

  return <>{tabstatement}</>
}
