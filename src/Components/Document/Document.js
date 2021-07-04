import React, { useState, useEffect } from 'react';
import './Document.css';
import '../NewProfile/NewProfile.css';
import { FiEdit } from 'react-icons/fi';
import DocumentModal from './DocumentModal';
const Document = ({
  openModal,
  resume,
  transcripts,
  workCerti,
  otherCerti,
  editing,
  setEditing,
  editDocument,
  showModal,
  setShowModal,
}) => {
  // const [showModal, setShowModal] = useState(false);
  // const [resume, setResume] = useState([]);
  // const [transcripts, setTranscripts] = useState([]);
  // const [workCerti, setWorkCerti] = useState([]);
  // const [otherCerti, setOtherCerti] = useState([]);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const scrollRecord = () => {
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    setLeft(left);
    setTop(top);
    document.body.className = 'modal-open';
    document.body.style.scrollTo = left;
    document.body.style.scroll = top;
    // document.body.style.overflow = 'hidden';
    // document.body.style.position = 'fixed';
    window.scrollTo(left, top);
  };
  const scrollRemove = () => {
    document.body.className = '';
    // document.body.style.overflow = 'auto';
    // document.body.style.position = 'relative';
    window.scrollTo(left, top);
  };
  // const saveDocuments = (file) => {
  //   if (file.type == 'resume') {
  //     let r = [...resume];
  //     r.push(file);
  //     setResume(r);
  //   }
  //   if (file.type == 'transcripts') {
  //     let r = [...transcripts];
  //     r.push(file);
  //     setTranscripts(r);
  //   }
  //   if (file.type == 'workcerti') {
  //     let r = [...workCerti];
  //     r.push(file);
  //     setWorkCerti(r);
  //   }
  //   if (file.type == 'othercerti') {
  //     let r = [...otherCerti];
  //     r.push(file);
  //     setOtherCerti(r);
  //   }
  // };

  let resumeUI = resume.map((file, index) => {
    return (
      <div className='file'>
        <input type='checkbox'></input>
        <p>
          {file.name}{' '}
          {!file.verified ? (
            <span className='verfication-pending'>Verfication pending</span>
          ) : (
            <span className='verfication-done'>Verified</span>
          )}
        </p>
        <p>{file.file.lastModified}</p>
        <div
          onClick={() => {
            editDocument('resume', index);
          }}
        >
          <FiEdit className='edit' />
          <p>Edit</p>
        </div>
      </div>
    );
  });
  let transcriptsUI = transcripts.map((file, index) => {
    return (
      <div className='file'>
        <input type='checkbox'></input>
        <p>{file.name}</p>
        <p>June 1, 2021</p>
        <div>
          <FiEdit className='edit' />
          <p>Edit</p>
        </div>
      </div>
    );
  });
  let workCertiUI = workCerti.map((file, index) => {
    return (
      <div className='file'>
        <input type='checkbox'></input>
        <p>{file.name}</p>
        <p>June 1, 2021</p>
        <div>
          <FiEdit className='edit' />
          <p>Edit</p>
        </div>
      </div>
    );
  });
  let otherCertiUI = otherCerti.map((file, index) => {
    return (
      <div className='file'>
        <input type='checkbox'></input>
        <p>{file.name}</p>
        <p>June 1, 2021</p>
        <div>
          <FiEdit className='edit' />
          <p>Edit</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className='newProfile__document'>
        <div>
          {/* <h1>DOCUMENTS</h1> */}

          <button
            class='btn'
            onClick={(e) => {
              openModal();
              setEditing(false);
            }}
          >
            + Add New
          </button>
        </div>
        <div className='newProfile__resumedoc'>
          <h2>Resume</h2>
          {resume.length == 0 ? (
            <div className='file'>
              <input type='checkbox'></input>
              <p>
                Draft Collection
                <span className='verfication-pending'>Verfication pending</span>
              </p>
              <p>June 1, 2021</p>
              <div>
                <FiEdit className='edit' />
                <p>Edit</p>
              </div>
            </div>
          ) : (
            <>{resumeUI}</>
          )}
        </div>
        <div className='newProfile__transcripts'>
          <h2>Transcripts</h2>
          {transcripts.length == 0 ? (
            <div className='file'>
              <input type='checkbox'></input>
              <p>
                Draft Collection
                <span className='verfication-done'>Verified</span>
              </p>
              <p>June 1, 2021</p>
              <div>
                <FiEdit className='edit' />
                <p>Edit</p>
              </div>
            </div>
          ) : (
            <>{transcriptsUI}</>
          )}
        </div>
        <div className='newProfile__workcertificates'>
          <h2>Work Certificates</h2>
          {workCerti.length == 0 ? (
            <div className='file'>
              <input type='checkbox'></input>
              <p>Draft Collection</p>
              <p>June 1, 2021</p>
              <div>
                <FiEdit className='edit' />
                <p>Edit</p>
              </div>
            </div>
          ) : (
            <>{workCertiUI}</>
          )}
        </div>
        <div className='newProfile__othercertificates'>
          <h2>Other Certificates</h2>
          {otherCerti.length == 0 ? (
            <div className='file'>
              <input type='checkbox'></input>
              <p>Draft Collection</p>
              <p>June 1, 2021</p>
              <div>
                <FiEdit className='edit' />
                <p>Edit</p>
              </div>
            </div>
          ) : (
            <>{otherCertiUI}</>
          )}
        </div>
      </div>
    </>
  );
};

export default Document;
