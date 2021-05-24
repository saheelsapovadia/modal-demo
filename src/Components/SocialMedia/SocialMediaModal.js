import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Background, CloseModalButton } from '../Modal/Modal';
export const SocialMediaModal = ({ showModal, setShowModal }) => {
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
  const closeSocialModal = () => {
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
            {/* <CloseModalButton
              className='CloseModalButton'
              aria-label='Close modal'
              onClick={() => closeEditProfileModal()}
            /> */}
            <div class='elsewhere__modal__header'>
              <h3>Edit Links</h3>
              <svg
                class='MuiSvgIcon-root'
                focusable='false'
                viewBox='0 0 24 24'
                aria-hidden='true'
                onClick={closeSocialModal}
              >
                <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
              </svg>
            </div>
            <div class='elsewhere__modal__form'>
              <form>
                <label>
                  Linkedin URL <span>(optional)</span>
                </label>
                <input
                  type='text'
                  name='linkedin'
                  placeholder='https://www.scholarly-science.com'
                />
                <label>
                  Github URL <span>(optional)</span>
                </label>
                <input
                  type='text'
                  name='github'
                  placeholder='https://www.scholarly-science.git'
                />
                <label>
                  Line ID <span>(optional)</span>
                </label>
                <input
                  type='text'
                  name='lineid'
                  placeholder='Worked on something you loved add a link'
                />
                <label>
                  WeChat ID <span>(optional)</span>
                </label>
                <input
                  type='text'
                  name='wechatid'
                  placeholder='https://www.scholarly-science.com'
                />
                <label>
                  Personal Website <span>(optional)</span>
                </label>
                <input
                  type='text'
                  name='personal'
                  placeholder='https://www.scholarly-science.com'
                />
                <label>
                  Passion Projects <span>(optional)</span>
                </label>
                <input
                  type='text'
                  name='project'
                  placeholder='Worked on something you loved add a link'
                />
                <div class='elsewhere__button'>
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
