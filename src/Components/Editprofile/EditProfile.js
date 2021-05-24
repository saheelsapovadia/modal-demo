import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Background, CloseModalButton } from '../Modal/Modal';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import '../Modal/Modal.css';
import './EditModal.css';
import './ProfileModal.css';
import './ExperienceModal.css';

export const EditProfile = ({ showModal, setShowModal }) => {
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
                      value='fffffv'
                    />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input
                      type='text'
                      placeholder='Smith'
                      name='lastname'
                      value='f'
                    />
                  </div>
                </div>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='Enter Your desired username'
                  name='username'
                  value='hb'
                />
                <label>College/University</label>
                <input
                  type='text'
                  placeholder='Enter Your College/University Name'
                  name='school'
                  value='sdd'
                />
                <label>Graduation Year</label>
                <input
                  type='text'
                  placeholder='Enter graduation year of expected graduation year'
                  name='gradyear'
                  value='Fall 2023'
                />
                <label>Degree</label>
                <input
                  type='text'
                  placeholder='Enter Degree Name like B.E, B.Tech, MA, etc'
                  name='degree'
                  value='Bcom'
                />
                <label>Stream</label>
                <input
                  type='text'
                  placeholder='Enter Field of study'
                  name='stream'
                  value='Computer Science'
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
                  value='hb@s.s'
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
