import React, { useContext } from 'react'
import Modal from 'react-modal'
import { useLocation } from 'react-router-dom'
import ModalContext from '../../context/ModalContext'
import logo from '../../assets/globalai.png'
import parse from 'html-react-parser'
import './DetailsModalStyle.css'

const DetailsModal = (props) => {
  const location = useLocation()

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
        className="Modal overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',"
        overlayClassName="Overlay"
        contentClassName="Content"
      >
        <i
          className="fa fa-times fa-2x"
          aria-hidden="true"
          onClick={() => setIsModalOpen(false)}
        ></i>

        {tabstatement}
        <button className="modal-btn" onClick={() => setIsModalOpen(false)}>
          Close
        </button>
      </Modal>
    </>
  )
}

export default DetailsModal
