import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Background, CloseModalButton } from '../Modal/Modal';
import '../Modal/Modal.css';
import '../PreferenceModal/PreferenceModal.css';
import '../NewProfile/NewProfile.css';
import '../Editprofile/EditModal.css';
import '../Editprofile/ExperienceModal.css';
const DocumentModal = ({
  showModal,
  setShowModal,
  scrollRemove,
  save,
  fileState,
  setFileState,
}) => {
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
  // const [fileState, setFileState] = useState({});
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);
  var date = new Date();
  const onFileChange = async (e) => {
    setFile(e.target.files[0]);
    let date = new Date(e.target.files[0].lastModified);
    console.log(file);
    handleChange(e);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        {
          let f = { ...fileState };
          f.name = value;
          setFileState(f);
        }
        break;
      case 'type':
        {
          let f = { ...fileState };
          f.type = value;
          setFileState(f);
        }
        break;
      case 'type':
        {
          let f = { ...fileState };
          f.file = { ...file };
          setFileState(f);
        }
        break;
    }
  };
  useEffect(() => {
    let f = { ...fileState };
    f.file = file;
    setFileState(f);
  }, [file]);
  console.log('fileState', fileState);
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
                  <input name='name' onChange={handleChange}></input>
                </div>
                <div>
                  <label>Document Type</label>
                  <select name='type' onChange={handleChange}>
                    <option value='resume'>Resume</option>
                    <option value='transcripts'>Transcripts</option>
                    <option value='workcerti'>Work Certificates</option>
                    <option value='othercerti'>Other Certificates</option>
                  </select>
                </div>
              </form>
              <div className='drop-file'>
                <p>Drag and Drop a PDF or Word doc here or Select a file </p>
                <input
                  type='file'
                  id='file'
                  name='file'
                  ref={fileInput}
                  onChange={onFileChange}
                />
                <button
                  class='btn'
                  onClick={(e) => {
                    fileInput.current && fileInput.current.click();
                  }}
                >
                  Select a file from your computer
                </button>
              </div>
              <div className='experience__button doc-btn'>
                <button
                  className='savebtn'
                  onClick={(e) => {
                    save(fileState);
                    setShowModal(false);
                    scrollRemove();
                  }}
                >
                  Add Document
                </button>
              </div>
            </div>
          </div>
        </Background>
      ) : null}
    </>
  );
};

export default DocumentModal;
