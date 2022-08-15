import React from 'react'
import './CardsStyle.css'

export const Cards = ({ course }) => {
  const { card_image, id, title, description } = course

  const imagelink =
    'https://globalaihub.com/wp-content/uploads/2021/10/kurs-gorsellerieinzelhandel2-624x330.png'
  //   console.log(card_image)
  return (
    <div className="course-cards content">
      <img src={imagelink} alt="" className="course-image" />
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <button className="more-btn">View More</button>
    </div>
  )
}
