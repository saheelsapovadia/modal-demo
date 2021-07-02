import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Background, CloseModalButton } from '../Modal/Modal';
import '../Modal/Modal.css';
import '../PreferenceModal/PreferenceModal.css';
import '../NewProfile/NewProfile.css';
import '../Editprofile/EditModal.css';
import '../Editprofile/ExperienceModal.css';
const DocumentModal = ({ showModal, setShowModal, scrollRemove, save }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      scrollRemove();
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        scrollRemove();
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  const closePreferenceModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      {showModal ? (
        <Background
          className='newbg background'
          onClick={closeModal}
          ref={modalRef}
        >
          <div
            className='ModalWrapper Modal__Fullscreen experience__modal elevation document__modal'
            showModal={showModal}
          >
            <CloseModalButton
              className='CloseModalButton'
              aria-label='Close modal'
              onClick={() => {
                setShowModal(false);
                scrollRemove();
              }}
            />

            <div className='document__modal__header'>
              <h3>Add a new document</h3>
            </div>
            <div className='document__modal__form'>
              <form>
                <div>
                  <label>Document Name</label>
                  <input></input>
                </div>
                <div>
                  <label>Document Type</label>
                  <select>
                    <option>Resume</option>
                    <option>Transcripts</option>
                    <option>Work Certificates</option>
                    <option>Other Certificates</option>
                  </select>
                </div>
              </form>
              <div className='drop-file'>
                <p>Drag and Drop a PDF or Word doc here or Select a file </p>
                <p>Select from computer</p>
              </div>
              <div className='experience__button doc-btn'>
                <button className='savebtn'>Add Document</button>
              </div>
            </div>
          </div>
        </Background>
      ) : null}
    </>
  );
};

export default DocumentModal;
