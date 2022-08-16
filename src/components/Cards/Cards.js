import React from 'react'
import './CardsStyle.css'
import logo from '../../assets/globalai.png'
import { useNavigate } from 'react-router-dom'

export const Cards = ({ course }) => {
  const { card_image, id, title, description } = course
  let navigate = useNavigate()
  const moreClick = () => {
    navigate('/details', { state: { course } })
  }

  const imagelink =
    'https://globalaihub.com/wp-content/uploads/2021/10/kurs-gorsellerieinzelhandel2-624x330.png'
  //   console.log(card_image)
  return (
    // <div className="course-cards content">
    //   <img src={logo} alt="" className="course-image" />
    //   <h3 className="title">{title}</h3>
    //   <p className="description">{description}</p>
    //   <button className="more-btn">View More</button>
    // </div>

    <div className="course-card">
      <h1 className="course-title">{title.toUpperCase()}</h1>
      <img className="course-img" src={course?.card_image || logo} alt="" />
      <button onClick={moreClick} className="more-btn">
        View More
      </button>
    </div>
  )
}
