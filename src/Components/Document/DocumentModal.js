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
  file,
  setFile,
  editDoc,
  setEditData,
  editing,
  docIndex,
  saveEditedDoc,
}) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      scrollRemove();
      setFileData({
        name: '',
        file: null,
        verified: false,
      });
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        scrollRemove();
        setFileData({
          name: '',
          file: null,
          verified: false,
        });
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
  const clearState = () => {};
  // const [fileState, setFileState] = useState({});
  const fileInput = useRef(null);
  // const [file, setFile] = useState(null);

  const onFileChange = async (e) => {
    setFile(e.target.files[0]);
    var x = new Date(e.target.files[0].lastModified);
    console.log(
      'modified date',
      x.getMonth(),
      ' ',
      x.getDate(),
      ', ',
      x.getFullYear()
    );
    setFileData((prev) => {
      return { ...prev, file: e.target.files[0], fileDate: x };
    });
    let date = new Date(e.target.files[0].lastModified);
    console.log(file);
    handleChange(e);
  };
  const [fileData, setFileData] = useState({
    name: '',
    file: null,
    verified: false,
  });

  // const [localFile, setLocalFile] = useState(null);
  useEffect(() => {
    if (editing) {
      console.log('setting edit doc', editDoc);

      setFileData(editDoc);
      // setLocalFile(editData.file);
    }
  }, [showModal]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        {
          let f = { ...fileState };
          f.name = value;
          setFileState(f);
          let f1 = { ...fileData };
          f1.name = value;
          setFileData(f1);
        }
        break;
      case 'type':
        {
          let f = { ...fileState };
          f.type = value;
          setFileState(f);
          let f1 = { ...fileData };
          f1.type = value;
          setFileData(f1);
        }
        break;
    }
  };
  // useEffect(() => {
  //   let f = { ...fileState, file: file };
  //   // f.file = file;
  //   setFileState(f);
  // }, [file]);
  console.log('fileData', fileData);
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
                  <input
                    name='name'
                    value={fileData.name}
                    onChange={handleChange}
                  ></input>
                </div>
                <div>
                  <label>Document Type</label>
                  <select
                    name='type'
                    onChange={handleChange}
                    onClick={handleChange}
                    value={fileData.type}
                  >
                    <option value='select'>Select</option>
                    <option value='resume'>Resume</option>
                    <option value='transcripts'>Transcripts</option>
                    <option value='workcerti'>Work Certificates</option>
                    <option value='othercerti'>Other Certificates</option>
                  </select>
                </div>
              </form>
              <div className='drop-file'>
                {fileData.file ? (
                  <>
                    <p>{fileData.file.name}</p>
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
                      Select different file
                    </button>
                  </>
                ) : (
                  <>
                    <p>
                      Drag and Drop a PDF or Word doc here or Select a file{' '}
                    </p>
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
                  </>
                )}
              </div>
              <div className='experience__button doc-btn'>
                <button
                  className='savebtn'
                  onClick={(e) => {
                    {
                      editing
                        ? saveEditedDoc(fileData, editDoc.type, docIndex)
                        : save(fileData);
                    }
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
