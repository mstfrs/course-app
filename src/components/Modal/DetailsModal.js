import React, { useContext } from 'react'
import Modal from 'react-modal'
import { useLocation } from 'react-router-dom'
import ModalContext from '../../context/ModalContext'
import logo from '../../assets/globalai.png'
import parse from 'html-react-parser'
import './DetailsModalStyle.css'

const DetailsModal = (props) => {
  const location = useLocation()
  console.log(location)

  const { isModalOpen, setIsModalOpen } = useContext(ModalContext)

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

  Modal.setAppElement('#root')
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
          },
        }}
      >
        <button onClick={() => setIsModalOpen(false)}>Close</button>
        <h1>Modal Title</h1>
        {tabstatement}
      </Modal>
    </>
  )
}

export default DetailsModal
