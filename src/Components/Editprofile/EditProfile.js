import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Background, CloseModalButton } from '../Modal/Modal';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import '../Modal/Modal.css';
import './EditModal.css';
import './ProfileModal.css';
import './ExperienceModal.css';

export const EditProfile = ({
  showModal,
  setShowModal,
  scrollRemove,
  user,
  setUserData,
}) => {
  const modalRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

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
  const closeEditProfileModal = () => {
    setShowModal((prev) => !prev);
    scrollRemove();
  };
  const saveProfile = (e) => {
    e.preventDefault();
    setShowModal((prev) => !prev);
    scrollRemove();
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
            className='ModalWrapper Modal__Fullscreen profile__modal elevation'
            showModal={showModal}
          >
            <CloseModalButton
              className='CloseModalButton'
              aria-label='Close modal'
              onClick={() => closeEditProfileModal()}
            />
            <div class='profile__modal__header'>
              <h3>Edit Profile</h3>
            </div>
            <div class='profile__modal__form'>
              <form>
                <div class='profile__modal__form__fullname'>
                  <div>
                    <label>First Name</label>
                    <input
                      type='text'
                      placeholder='John'
                      name='firstname'
                      value={user.fullName ? user.fullName.split(' ')[0] : ''}
                    />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input
                      type='text'
                      placeholder='Smith'
                      name='lastname'
                      value={user.fullName ? user.fullName.split(' ')[1] : ''}
                    />
                  </div>
                </div>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='Enter Your desired username'
                  name='username'
                  value={user.fullName ? user.fullName.split(' ')[0] : ''}
                />
                <label>College/University</label>
                <input
                  type='text'
                  placeholder='Enter Your College/University Name'
                  name='school'
                  value={user.college}
                />
                <label>Graduation Year</label>
                <input
                  type='text'
                  placeholder='Enter graduation year of expected graduation year'
                  name='gradyear'
                  value={user.gradYear}
                />
                <label>Degree</label>
                <input
                  type='text'
                  placeholder='Enter Degree Name like B.E, B.Tech, MA, etc'
                  name='degree'
                  value={user.degree}
                />
                <label>Stream</label>
                <input
                  type='text'
                  placeholder='Enter Field of study'
                  name='stream'
                  value={user.major}
                />
                <label>Current location</label>
                <input
                  type='text'
                  placeholder='Enter your current residence'
                  name='current_location'
                  value=''
                />
                <label>Email Address</label>
                <input
                  type='email'
                  disabled=''
                  placeholder='johnsmith@gmail.com'
                  name='email'
                  value={user.email}
                />
                <label>
                  Alternate Email Address <span>(optional)</span>
                </label>
                <input
                  type='email'
                  placeholder='johnsmith@gmail.com'
                  name='altemail'
                  value=''
                />
                <div class='profile__modal__form__mobile'>
                  <div>
                    <label>Mobile Number</label>
                    <div class='profile__modal__container react-tel-input'>
                      <div class='special-label'>Phone</div>
                      <input
                        class='profile__modal__phoneInput form-control'
                        placeholder='99999 99999'
                        type='tel'
                        value='+91'
                      />
                      <div class=' flag-dropdown'>
                        <div
                          class='selected-flag'
                          title='India: + 91'
                          tabindex='0'
                          role='button'
                          aria-haspopup='listbox'
                        >
                          <div class='flag in'>
                            <div class='arrow'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label>
                      Alternate Mobile Number
                      <span style={{ color: 'grey' }}> (Optional)</span>
                    </label>
                    <div class='profile__modal__container react-tel-input'>
                      <div class='special-label'>Phone</div>
                      <input
                        class='profile__modal__phoneInput form-control'
                        placeholder='99999 99999'
                        type='tel'
                        value='+91'
                      />
                      <div class=' flag-dropdown'>
                        <div
                          class='selected-flag'
                          title='India: + 91'
                          tabindex='0'
                          role='button'
                          aria-haspopup='listbox'
                        >
                          <div class='flag in'>
                            <div class='arrow'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <label>
                  About Me <span>(optional)</span>
                </label>
                <textarea name='about'></textarea>
                <div class='profile__btn'>
                  <button
                    onClick={(e) => {
                      saveProfile(e);
                    }}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Background>
      ) : null}
    </>
  );
};
