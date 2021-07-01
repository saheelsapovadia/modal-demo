import React, { useState, useEffect } from 'react';
import './Document.css';
import '../NewProfile/NewProfile.css';
import { FiEdit } from 'react-icons/fi';
const Document = () => {
  const [resume, setResume] = useState([]);
  const [transcripts, setTranscripts] = useState([]);
  const [workCerti, setWorkCerti] = useState([]);
  const [otherCerti, setOtherCerti] = useState([]);

  let resumeUI = resume.map((file, index) => {
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
          <h1>DOCUMENTS</h1>

          <button class='btn' onClick={(e) => {}}>
            + Add New
          </button>
        </div>
        <div className='newProfile__resumedoc'>
          <h2>Resume</h2>
          <div className='file'>
            <input type='checkbox'></input>
            <p>Draft Collection</p>
            <p>June 1, 2021</p>
            <div>
              <FiEdit className='edit' />
              <p>Edit</p>
            </div>
          </div>
          <div className='file'>
            <input type='checkbox'></input>
            <p>Draft Collection</p>
            <p>June 1, 2021</p>
            <div>
              <FiEdit className='edit' />
              <p>Edit</p>
            </div>
          </div>
        </div>
        <div className='newProfile__transcripts'>
          <h2>Transcripts</h2>
          <div className='file'>
            <input type='checkbox'></input>
            <p>Draft Collection</p>
            <p>June 1, 2021</p>
            <div>
              <FiEdit className='edit' />
              <p>Edit</p>
            </div>
          </div>
        </div>
        <div className='newProfile__workcertificates'>
          <h2>Work Certificates</h2>
          <div className='file'>
            <input type='checkbox'></input>
            <p>Draft Collection</p>
            <p>June 1, 2021</p>
            <div>
              <FiEdit className='edit' />
              <p>Edit</p>
            </div>
          </div>
        </div>
        <div className='newProfile__othercertificates'>
          <h2>Other Certificates</h2>
          <div className='file'>
            <input type='checkbox'></input>
            <p>Draft Collection</p>
            <p>June 23, 2021</p>
            <div>
              <FiEdit className='edit' />
              <p>Edit</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
