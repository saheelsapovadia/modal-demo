import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Background, CloseModalButton } from '../Modal/Modal';
import './ExperienceId.css';
import { Editor, EditorState, RichUtils } from 'draft-js';

const Volunteer = ({}) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const onEditorChange = (editorchange) => {
    setEditorState(editorchange);
    //setContentLength(editorState.length);
  };
  const _onBoldClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };
  const _onItalicClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };
  const _onUnderlineClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };
  const _onUnorderedClick = () => {
    onEditorChange(
      RichUtils.toggleBlockType(editorState, 'unordered-list-item')
    );
  };

  const _onOrderedClick = () => {
    onEditorChange(RichUtils.toggleBlockType(editorState, 'ordered-list-item'));
  };
  return (
    <>
      <div class='two'>
        <div class='inp-co'>
          <label class='my-label'>Company / Organization</label>
          <input type='text' placeholder='Enter project title' name='title' />
        </div>
        <div class='inp-co'>
          <label class='my-label'>Job Title</label>
          <input type='text' placeholder='Enter job title' name='title' />
        </div>
      </div>
      <div class='two'>
        <div class='inp-co'>
          <label class='my-label'>From</label>
          <select class='inp-type'>
            <option>Select...</option>
            <option>January</option>
          </select>
        </div>
        <div class='inp-co'>
          <label class='my-label'>To</label>
          <select class='inp-type'>
            <option>Select...</option>
            <option>January</option>
          </select>
        </div>
      </div>
      <div class='two'>
        <div class='inp-co'>
          <select class='inp-type'>
            <option>Select...</option>
            <option>January</option>
          </select>
        </div>
        <div class='inp-co'>
          <select class='inp-type'>
            <option>Select...</option>
            <option>January</option>
          </select>
        </div>
      </div>
      <div class='inp-co' style={{ flexDirection: 'row' }}>
        <input
          type='checkbox'
          style={{ marginRight: '10px', marginTop: '2px' }}
        />
        <label>Current Experience</label>
      </div>
      <div className='inp-co'>
        <label class='my-label'>Description</label>

        <div>
          <div className='editor'>
            <Editor
              editorState={editorState}
              onChange={setEditorState}
              placeholder='Give a brief description'
              // readOnly={true}
            />
            <div class='editor__buttons'>
              <div onClick={_onBoldClick}>
                <svg
                  class='MuiSvgIcon-root'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5.78c2.07 0 3.96-1.69 3.97-3.77.01-1.53-.85-2.84-2.15-3.44zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z'></path>
                </svg>
              </div>
              <div onClick={_onItalicClick}>
                <svg
                  class='MuiSvgIcon-root'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M10 5.5c0 .83.67 1.5 1.5 1.5h.71l-3.42 8H7.5c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.71l3.42-8h1.29c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4h-5c-.83 0-1.5.67-1.5 1.5z'></path>
                </svg>
              </div>
              <div onClick={_onUnderlineClick}>
                <svg
                  class='MuiSvgIcon-root'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z'></path>
                </svg>
              </div>
              <div class='icons' onClick={_onUnorderedClick}>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='list'
                  class='svg-inline--fa fa-list fa-w-16 fa-1x '
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'
                  ></path>
                </svg>
              </div>
              <div class='icons' onClick={_onOrderedClick}>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='list-ol'
                  class='svg-inline--fa fa-list-ol fa-w-16 fa-1x '
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'
                  ></path>
                </svg>
              </div>
            </div>
            {/* {lenExceeded ? (
                      <p style={{ color: 'red' }}>
                        <b>Exceeded maximum limit {contentLength}/500</b>
                      </p>
                    ) : (
                      <div style={{ color: 'grey' }}>{contentLength}/500</div>
                    )} */}
          </div>
        </div>
      </div>
    </>
  );
};

const Achievement = ({}) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const onEditorChange = (editorchange) => {
    setEditorState(editorchange);
    //setContentLength(editorState.length);
  };
  const _onBoldClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };
  const _onItalicClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };
  const _onUnderlineClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };
  const _onUnorderedClick = () => {
    onEditorChange(
      RichUtils.toggleBlockType(editorState, 'unordered-list-item')
    );
  };

  const _onOrderedClick = () => {
    onEditorChange(RichUtils.toggleBlockType(editorState, 'ordered-list-item'));
  };
  return (
    <>
      <div class='two'>
        <div class='inp-co'>
          <label class='my-label'>Achievement Organization</label>
          <input type='text' placeholder='Enter project title' name='title' />
        </div>
        <div class='inp-co'>
          <label class='my-label'>Title</label>
          <input type='text' placeholder='Enter job title' name='title' />
        </div>
      </div>
      <div class='two'>
        <div class='inp-co'>
          <label class='my-label'>Date Recieved</label>
          <select class='inp-type'>
            <option>Select...</option>
            <option>January</option>
          </select>
        </div>
      </div>
      <div class='two'>
        <div class='inp-co'>
          <select class='inp-type'>
            <option>Select...</option>
            <option>January</option>
          </select>
        </div>
      </div>
      <div class='inp-co' style={{ flexDirection: 'row' }}>
        <input
          type='checkbox'
          style={{ marginRight: '10px', marginTop: '2px' }}
        />
        <label>Current Experience</label>
      </div>
      <div className='inp-co'>
        <label class='my-label'>Description</label>

        <div>
          <div className='editor'>
            <Editor
              editorState={editorState}
              onChange={setEditorState}
              placeholder='Give a brief description'
              // readOnly={true}
            />
            <div class='editor__buttons'>
              <div onClick={_onBoldClick}>
                <svg
                  class='MuiSvgIcon-root'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5.78c2.07 0 3.96-1.69 3.97-3.77.01-1.53-.85-2.84-2.15-3.44zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z'></path>
                </svg>
              </div>
              <div onClick={_onItalicClick}>
                <svg
                  class='MuiSvgIcon-root'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M10 5.5c0 .83.67 1.5 1.5 1.5h.71l-3.42 8H7.5c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.71l3.42-8h1.29c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4h-5c-.83 0-1.5.67-1.5 1.5z'></path>
                </svg>
              </div>
              <div onClick={_onUnderlineClick}>
                <svg
                  class='MuiSvgIcon-root'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z'></path>
                </svg>
              </div>
              <div class='icons' onClick={_onUnorderedClick}>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='list'
                  class='svg-inline--fa fa-list fa-w-16 fa-1x '
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'
                  ></path>
                </svg>
              </div>
              <div class='icons' onClick={_onOrderedClick}>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='list-ol'
                  class='svg-inline--fa fa-list-ol fa-w-16 fa-1x '
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'
                  ></path>
                </svg>
              </div>
            </div>
            {/* {lenExceeded ? (
                      <p style={{ color: 'red' }}>
                        <b>Exceeded maximum limit {contentLength}/500</b>
                      </p>
                    ) : (
                      <div style={{ color: 'grey' }}>{contentLength}/500</div>
                    )} */}
          </div>
        </div>
      </div>
    </>
  );
};

const Others = ({}) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const onEditorChange = (editorchange) => {
    setEditorState(editorchange);
    //setContentLength(editorState.length);
  };
  const _onBoldClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };
  const _onItalicClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };
  const _onUnderlineClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };
  const _onUnorderedClick = () => {
    onEditorChange(
      RichUtils.toggleBlockType(editorState, 'unordered-list-item')
    );
  };

  const _onOrderedClick = () => {
    onEditorChange(RichUtils.toggleBlockType(editorState, 'ordered-list-item'));
  };
  const [type, setType] = useState([]);

  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }
  const [selectedType, setSelectedType] = useState(null);
  const toggle = (e) => {
    e.preventDefault();
    console.log(e.target.className);
    if (selectedType) {
      let ele = document.getElementById(selectedType);
      console.log(ele.classList[0]);
      ele.classList.add('modal-select-normal');
      ele.classList.remove('modal-select-btn');
      console.log(ele.classList);
      if (e.target.id !== selectedType) {
        e.target.classList.add('modal-select-btn');
        e.target.classList.remove('modal-select-normal');
        setSelectedType(e.target.id);
      } else {
        e.target.classList.add('modal-select-normal');
        e.target.classList.remove('modal-select-btn');
        setSelectedType(null);
      }
    } else {
      e.target.classList.add('modal-select-btn');
      e.target.classList.remove('modal-select-normal');
      setSelectedType(e.target.id);
    }
    // if (e.target.className == 'modal-select-normal res') {
    //   setType([...type, e.target.name]);

    //   e.target.className = 'modal-select-btn res';
    // } else {
    //   e.target.className = 'modal-select-normal res';
    //   let t = [...type];

    //   let newType = arrayRemove(t, e.target.name);
    //   setType(newType);
    // }
  };
  console.log(type);
  return (
    <>
      <div class='inp-co-1'>
        <label class='my-label'>Experience type</label>
        <div class='inp-co-user'>
          <button
            id='club'
            name='club'
            onClick={toggle}
            class='modal-select-normal res'
          >
            Club
          </button>
          <button
            id='affiliation'
            name='affiliation'
            onClick={toggle}
            class='modal-select-normal res'
          >
            Affiliation
          </button>
          <button
            id='sport'
            name='sport'
            onClick={toggle}
            class='modal-select-normal res'
          >
            Sport Team
          </button>
          <button
            id='hackathone'
            name='hackathon'
            onClick={toggle}
            class='modal-select-normal res'
          >
            Hackathon
          </button>
          <button
            id='competition'
            name='competition'
            onClick={toggle}
            class='modal-select-normal res'
            id='com'
          >
            Competition
          </button>
        </div>
      </div>
      <div class='two'>
        <div class='inp-co'>
          <label class='my-label'>Name</label>
          <input type='text' placeholder='Enter project title' name='title' />
        </div>
        <div class='inp-co'>
          <label class='my-label'>Role</label>
          <input type='text' placeholder='Enter job title' name='title' />
        </div>
      </div>
      <div class='two'>
        <div class='inp-co'>
          <label class='my-label'>From</label>
          <select class='inp-type'>
            <option>Select...</option>
            <option>January</option>
          </select>
        </div>
        <div class='inp-co'>
          <label class='my-label'>To</label>
          <select class='inp-type'>
            <option>Select...</option>
            <option>January</option>
          </select>
        </div>
      </div>
      <div class='two'>
        <div class='inp-co'>
          <select class='inp-type'>
            <option>Select...</option>
            <option>January</option>
          </select>
        </div>
        <div class='inp-co'>
          <select class='inp-type'>
            <option>Select...</option>
            <option>January</option>
          </select>
        </div>
      </div>
      <div class='inp-co' style={{ flexDirection: 'row' }}>
        <input
          type='checkbox'
          style={{ marginRight: '10px', marginTop: '2px' }}
        />
        <label>Current Experience</label>
      </div>
      <div className='inp-co'>
        <label class='my-label'>Description</label>

        <div>
          <div className='editor'>
            <Editor
              editorState={editorState}
              onChange={setEditorState}
              placeholder='Give a brief description'
              // readOnly={true}
            />
            <div class='editor__buttons'>
              <div onClick={_onBoldClick}>
                <svg
                  class='MuiSvgIcon-root'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5.78c2.07 0 3.96-1.69 3.97-3.77.01-1.53-.85-2.84-2.15-3.44zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z'></path>
                </svg>
              </div>
              <div onClick={_onItalicClick}>
                <svg
                  class='MuiSvgIcon-root'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M10 5.5c0 .83.67 1.5 1.5 1.5h.71l-3.42 8H7.5c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.71l3.42-8h1.29c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4h-5c-.83 0-1.5.67-1.5 1.5z'></path>
                </svg>
              </div>
              <div onClick={_onUnderlineClick}>
                <svg
                  class='MuiSvgIcon-root'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z'></path>
                </svg>
              </div>
              <div class='icons' onClick={_onUnorderedClick}>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='list'
                  class='svg-inline--fa fa-list fa-w-16 fa-1x '
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'
                  ></path>
                </svg>
              </div>
              <div class='icons' onClick={_onOrderedClick}>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='list-ol'
                  class='svg-inline--fa fa-list-ol fa-w-16 fa-1x '
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'
                  ></path>
                </svg>
              </div>
            </div>
            {/* {lenExceeded ? (
                      <p style={{ color: 'red' }}>
                        <b>Exceeded maximum limit {contentLength}/500</b>
                      </p>
                    ) : (
                      <div style={{ color: 'grey' }}>{contentLength}/500</div>
                    )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export const ExperienceId = ({
  showModal,
  setShowModal,
  save,
  scrollRemove,
}) => {
  const modalRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
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
  const closeSocialModal = () => {
    setShowModal((prev) => !prev);
    scrollRemove();
  };
  const onEditorChange = (editorchange) => {
    setEditorState(editorchange);
    //setContentLength(editorState.length);
  };
  const _onBoldClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };
  const _onItalicClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };
  const _onUnderlineClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };
  const _onUnorderedClick = () => {
    onEditorChange(
      RichUtils.toggleBlockType(editorState, 'unordered-list-item')
    );
  };

  const _onOrderedClick = () => {
    onEditorChange(RichUtils.toggleBlockType(editorState, 'ordered-list-item'));
  };

  const [ui, setUi] = useState(1);
  const [activebtn, setActivebtn] = useState('voln');
  const toggle = (e) => {
    e.preventDefault();
    // console.log(e.target.name);

    switch (e.target.name) {
      case 'volunteer':
        {
          setUi(1);
          setActivebtn('voln');
          // ui = <Volunteer />;
        }
        break;
      case 'achievement':
        setUi(2);
        setActivebtn('achiv');
        // ui = <Achievement />;
        break;
      case 'other':
        setUi(3);
        setActivebtn('other');
        // ui = <Others />;
        break;
      // ui = <Volunteer />;
    }
  };
  //console.log(ui);
  return (
    <>
      {showModal ? (
        <Background
          className='newbg background'
          onClick={closeModal}
          ref={modalRef}
        >
          <div
            className='ModalWrapper Modal__Fullscreen expiId elevation'
            showModal={showModal}
          >
            <div className='preference__modal__container container'>
              <div class='preference__modal__header modal-heading-user'>
                <svg
                  class='MuiSvgIcon-root'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  onClick={() => {
                    scrollRemove();
                    closeSocialModal();
                  }}
                >
                  <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
                </svg>
                <button
                  onClick={() => {
                    scrollRemove();
                    closeSocialModal();
                  }}
                >
                  Save
                </button>
              </div>
              <h5 class='exp'>Add Experience</h5>
              <form className='my-form'>
                <div class='inp-co-1'>
                  <label class='my-label'>Experience type</label>
                  <div class='inp-co-user'>
                    <button
                      className={
                        activebtn == 'voln'
                          ? 'modal-select-btn res'
                          : 'modal-select-normal res'
                      }
                      onClick={toggle}
                      name='volunteer'
                    >
                      Volunteer Work
                    </button>
                    <button
                      className={
                        activebtn == 'achiv'
                          ? 'modal-select-btn res'
                          : 'modal-select-normal res'
                      }
                      onClick={toggle}
                      name='achievement'
                    >
                      Achievement
                    </button>
                    <button
                      className={
                        activebtn == 'other'
                          ? 'modal-select-btn res'
                          : 'modal-select-normal res'
                      }
                      onClick={toggle}
                      name='other'
                    >
                      Other
                    </button>
                  </div>
                </div>
                {ui == 1 ? (
                  <Volunteer />
                ) : ui == 2 ? (
                  <Achievement />
                ) : (
                  <Others />
                )}
              </form>
            </div>
          </div>
        </Background>
      ) : null}
    </>
  );
};
