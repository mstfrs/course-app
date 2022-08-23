import React, { useContext, useState } from "react";
import "./CardsStyle.css";
import logo from "../../assets/globalai.png";
import ModalContext from "../../context/ModalContext";
import Modal from "react-modal";
import parse from "html-react-parser";

export const Cards = ({ course, tabid }) => {
  const { setIsModalOpen, isModalOpen } = useContext(ModalContext);
  const [currentCourse, setCurrentCourse] = useState("")

  const moreClick = (e) => {
    setIsModalOpen(true);  
    setCurrentCourse(course)  
  };

  var tabstatement;
  if (tabid === "mycourse-tab" || tabid === "") {
    tabstatement = (
      <div className="course-card">
        <h1 className="course-title">{course.title}</h1>
        <img className="course-img" src={course?.card_image || logo} alt="" />
        <button onClick={moreClick} className="more-btn">
          View More
        </button>
      </div>
    );
  } else if (tabid === "allcourse-tab") {
    tabstatement = (
      <div className="course-card">
        <h1 className="course-title">{course.title.rendered}</h1>
        <img className="course-img" src={course?.card_image || logo} alt="" />
        <button onClick={moreClick} className="more-btn">
          View More
        </button>
      </div>
    );
  }
  Modal.setAppElement('#root')
  return (
    <>
      {tabstatement}
      {currentCourse!==""?
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
        {tabid === "mycourse-tab" || tabid === "" ? (
          <div className="details-container">
            <img className="course-image" src={logo} alt="" />
            <h1 className="title">{currentCourse.title.toUpperCase()}</h1>
            <br />
            <p className="description">{currentCourse.description}</p>

            <a href={currentCourse.link}>
              <h3 className="details-link">Course Details</h3>
            </a>
          </div>
        ) : (
          <div className="details-container">
            <h1 className="course-title">{currentCourse.title.rendered}</h1>

            {parse(currentCourse.content.rendered)}
          </div>
        )}

        <button className="modal-btn" onClick={() => setIsModalOpen(false)}>
          Close
        </button>
      </Modal>:null}
    </>
  );
};
