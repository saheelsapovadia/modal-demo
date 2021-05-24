import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Background, CloseModalButton } from '../Modal/Modal';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import '../Modal/Modal.css';
import './EditModal.css';
import './ProfileModal.css';
import './ExperienceModal.css';
import './inputSearch.css';
import './Events.css';
export const AddExperience = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);

        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  const closeEditProfileModal = () => {
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
            className='ModalWrapper Modal__Fullscreen experience__modal elevation'
            showModal={showModal}
          >
            <CloseModalButton
              className='CloseModalButton'
              aria-label='Close modal'
              onClick={() => closeEditProfileModal()}
            />
            <div className='experience__modal__header'>
              <h3>Add Experience</h3>
            </div>
            <div className='profile__modal__form'>
              <form>
                <label>Company / Organization Name</label>
                <div className='inputSearch'>
                  <input
                    type='text'
                    placeholder='Example: Google, Facebook...'
                    value=''
                  />
                </div>
                <label>Website</label>
                <input
                  type='text'
                  name='website'
                  placeholder='https://www.scholarly-science.com'
                  value=''
                />
                <label>Title</label>
                <input
                  type='text'
                  name='title'
                  placeholder='Example: Software Engineer'
                  value=''
                />
                <label>Location </label>
                <input
                  type='text'
                  name='location'
                  placeholder='Add a location'
                  value=''
                />
                <div className='experience__modal__form__checkbox'>
                  <span
                    className='MuiButtonBase-root MuiIconButton-root jss9 MuiCheckbox-root MuiCheckbox-colorPrimary MuiIconButton-colorPrimary'
                    aria-disabled='false'
                  >
                    <span className='MuiIconButton-label'>
                      <input
                        className='jss12'
                        type='checkbox'
                        data-indeterminate='false'
                        value=''
                      />
                      <svg
                        className='MuiSvgIcon-root'
                        focusable='false'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'></path>
                      </svg>
                    </span>
                    <span className='MuiTouchRipple-root'></span>
                  </span>
                  <p>Worked Remotely</p>
                </div>
                <label>From</label>
                <div>
                  <select className='select__month mr' name='fromMonth'>
                    <option value=''></option>
                    <option value='January'>January</option>
                    <option value='February'>February</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='June'>June</option>
                    <option value='July'>July</option>
                    <option value='August'>August</option>
                    <option value='September'>September</option>
                    <option value='October'>October</option>
                    <option value='November'>November</option>
                    <option value='December'>December</option>
                  </select>
                  <select className='select__month' name='fromYear'>
                    <option value=''></option>
                    <option value='1995'>1995</option>
                    <option value='1996'>1996</option>
                    <option value='1997'>1997</option>
                    <option value='1998'>1998</option>
                    <option value='1999'>1999</option>
                    <option value='2000'>2000</option>
                    <option value='2001'>2001</option>
                    <option value='2002'>2002</option>
                    <option value='2003'>2003</option>
                    <option value='2004'>2004</option>
                    <option value='2005'>2005</option>
                    <option value='2006'>2006</option>
                    <option value='2007'>2007</option>
                    <option value='2008'>2008</option>
                    <option value='2009'>2009</option>
                    <option value='2010'>2010</option>
                    <option value='2011'>2011</option>
                    <option value='2012'>2012</option>
                    <option value='2013'>2013</option>
                    <option value='2014'>2014</option>
                    <option value='2015'>2015</option>
                    <option value='2016'>2016</option>
                    <option value='2017'>2017</option>
                    <option value='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                  </select>
                </div>
                <label>To</label>
                <div>
                  <select className='select__month mr' name='toMonth'>
                    <option value=''></option>
                    <option value='January'>January</option>
                    <option value='February'>February</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='June'>June</option>
                    <option value='July'>July</option>
                    <option value='August'>August</option>
                    <option value='September'>September</option>
                    <option value='October'>October</option>
                    <option value='November'>November</option>
                    <option value='December'>December</option>
                  </select>
                  <select className='select__month' name='toYear'>
                    <option value=''></option>
                    <option value='1995'>1995</option>
                    <option value='1996'>1996</option>
                    <option value='1997'>1997</option>
                    <option value='1998'>1998</option>
                    <option value='1999'>1999</option>
                    <option value='2000'>2000</option>
                    <option value='2001'>2001</option>
                    <option value='2002'>2002</option>
                    <option value='2003'>2003</option>
                    <option value='2004'>2004</option>
                    <option value='2005'>2005</option>
                    <option value='2006'>2006</option>
                    <option value='2007'>2007</option>
                    <option value='2008'>2008</option>
                    <option value='2009'>2009</option>
                    <option value='2010'>2010</option>
                    <option value='2011'>2011</option>
                    <option value='2012'>2012</option>
                    <option value='2013'>2013</option>
                    <option value='2014'>2014</option>
                    <option value='2015'>2015</option>
                    <option value='2016'>2016</option>
                    <option value='2017'>2017</option>
                    <option value='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                  </select>
                </div>
                <div className='experience__modal__form__checkbox'>
                  <span
                    className='MuiButtonBase-root MuiIconButton-root jss5 MuiCheckbox-root MuiCheckbox-colorPrimary MuiIconButton-colorPrimary'
                    aria-disabled='false'
                  >
                    <span className='MuiIconButton-label'>
                      <input
                        className='jss8'
                        type='checkbox'
                        data-indeterminate='false'
                        value=''
                      />
                      <svg
                        className='MuiSvgIcon-root'
                        focusable='false'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'></path>
                      </svg>
                    </span>
                    <span className='MuiTouchRipple-root'></span>
                  </span>
                  <p>I currently work here</p>
                </div>
                <label>
                  Description <span>(optional)</span>
                </label>
                {/* <div>
                  <div className='editor' style={{ backgroundColor: 'red' }}>
                    <div className='DraftEditor-root'>
                      <div className='public-DraftEditorPlaceholder-root'>
                        <div
                          className='public-DraftEditorPlaceholder-inner'
                          id='placeholder-78eqj'
                          style='white-space: pre-wrap;'
                        >
                          Give a brief description
                        </div>
                      </div>
                      <div className='DraftEditor-editorContainer'>
                        <div
                          aria-describedby='placeholder-78eqj'
                          className='notranslate public-DraftEditor-content'
                          contenteditable='true'
                          role='textbox'
                          spellcheck='false'
                          style={{
                            outline: 'none',
                            userSelect: 'text',
                            whiteSpace: 'pre-wrap',
                            overflowWrap: 'break-word',
                          }}
                        >
                          <div dataContents='true'>
                            <div
                              className=''
                              data-block='true'
                              data-editor='78eqj'
                              dataOffsetKey='aqq07-0-0'
                            >
                              <div
                                data-offset-key='aqq07-0-0'
                                className='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'
                              >
                                <span data-offset-key='aqq07-0-0'>
                                  <br data-text='true' />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='editor__buttons'>
                      <div>
                        <svg
                          className='MuiSvgIcon-root'
                          focusable='false'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path d='M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5.78c2.07 0 3.96-1.69 3.97-3.77.01-1.53-.85-2.84-2.15-3.44zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z'></path>
                        </svg>
                      </div>
                      <div>
                        <svg
                          className='MuiSvgIcon-root'
                          focusable='false'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path d='M10 5.5c0 .83.67 1.5 1.5 1.5h.71l-3.42 8H7.5c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.71l3.42-8h1.29c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4h-5c-.83 0-1.5.67-1.5 1.5z'></path>
                        </svg>
                      </div>
                      <div>
                        <svg
                          className='MuiSvgIcon-root'
                          focusable='false'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path d='M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z'></path>
                        </svg>
                      </div>
                      <div className='icons'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='list'
                          className='svg-inline--fa fa-list fa-w-16 fa-1x '
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
                      <div className='icons'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='list-ol'
                          className='svg-inline--fa fa-list-ol fa-w-16 fa-1x '
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
                    <div style='color: grey;'>0/500</div>
                  </div>
                </div> */}
                <div>
                  <div className='editor' style={{ backgroundColor: 'red' }}>
                    {' '}
                    sssss
                  </div>
                </div>
                <div className='experience__button'>
                  <button type='submit'>Save</button>
                </div>
              </form>
            </div>
          </div>
        </Background>
      ) : null}
    </>
  );
};
