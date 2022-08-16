import React from 'react'
import './CardsStyle.css'
import logo from '../../assets/globalai.png'
import { useNavigate } from 'react-router-dom'

export const Cards = ({ course, tabid }) => {
  // const { card_image, id, title, description } = course

  console.log(tabid)
  let navigate = useNavigate()
  const moreClick = () => {
    navigate('/details', { state: { course } })
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

  const imagelink =
    'https://globalaihub.com/wp-content/uploads/2021/10/kurs-gorsellerieinzelhandel2-624x330.png'
  //   console.log(card_image)
  return <>{tabstatement}</>
}
