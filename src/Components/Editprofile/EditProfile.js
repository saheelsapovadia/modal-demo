import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Background, CloseModalButton } from '../Modal/Modal';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import '../Modal/Modal.css';
import './EditModal.css';
import './ProfileModal.css';
import './ExperienceModal.css';

const validPhoneRegex = RegExp(/^[0-9]*$/);
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
  const [newData, setNewData] = useState({
    ...user,
    currentLocation: '',
    altEmail: '',
    phone: '+91',
    altPhone: '+91',
    about: '',
    firstname: user.fullName ? user.fullName.split(' ')[0] : '',
    lastname: user.fullName ? user.fullName.split(' ')[1] : '',
  });

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
    let fullname = newData.firstname + ' ' + newData.lastname;
    let n = { ...newData };
    n.fullName = fullname;
    setNewData(n);
    setUserData(newData);
    setShowModal((prev) => !prev);
    scrollRemove();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstname':
        {
          let n = { ...newData };
          n.firstname = value;
          setNewData(n);
        }
        break;
      case 'lastname':
        {
          let n = { ...newData };
          n.lastname = value;
          setNewData(n);
        }
        break;
      case 'school':
        {
          let n = { ...newData };
          n.college = value;
          setNewData(n);
        }
        break;
      case 'gradyear':
        {
          let n = { ...newData };
          n.gradYear = value;
          setNewData(n);
        }
        break;
      case 'degree':
        {
          let n = { ...newData };
          n.degree = value;
          setNewData(n);
        }
        break;
      case 'stream':
        {
          let n = { ...newData };
          n.major = value;
          setNewData(n);
        }
        break;
      case 'current_location':
        {
          let n = { ...newData };
          n.currentLocation = value;
          setNewData(n);
        }
        break;
      case 'email':
        {
          let n = { ...newData };
          n.email = value;
          setNewData(n);
        }
        break;
      case 'altemail':
        {
          let n = { ...newData };
          n.altEmail = value;
          setNewData(n);
        }
        break;
      case 'phone':
        {
          let n = { ...newData };

          // if(value.length>3)
          if (validPhoneRegex.test(value.slice(3)) && value.length <= 13) {
            n.phone = '+91' + value.slice(3);
            setNewData(n);
          }
        }
        break;
      case 'altphone':
        {
          let n = { ...newData };

          // if(value.length>3)
          if (validPhoneRegex.test(value.slice(3)) && value.length <= 13) {
            n.altPhone = '+91' + value.slice(3);
            setNewData(n);
          }
        }
        break;
      case 'about':
        {
          let n = { ...newData };
          n.about = value;
          setNewData(n);
        }
        break;
    }
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
                      onChange={handleChange}
                      value={newData.firstname}
                    />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input
                      type='text'
                      placeholder='Smith'
                      name='lastname'
                      onChange={handleChange}
                      //
                      value={newData.lastname}
                    />
                  </div>
                </div>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='Enter Your desired username'
                  name='username'
                  onChange={handleChange}
                  value={newData.firstname}
                />
                <label>College/University</label>
                <input
                  type='text'
                  placeholder='Enter Your College/University Name'
                  name='school'
                  onChange={handleChange}
                  value={user.college}
                />
                <label>Graduation Year</label>
                <input
                  type='text'
                  placeholder='Enter graduation year of expected graduation year'
                  name='gradyear'
                  onChange={handleChange}
                  value={user.gradYear}
                />
                <label>Degree</label>
                <input
                  type='text'
                  placeholder='Enter Degree Name like B.E, B.Tech, MA, etc'
                  name='degree'
                  onChange={handleChange}
                  value={user.degree}
                />
                <label>Stream</label>
                <input
                  type='text'
                  placeholder='Enter Field of study'
                  name='stream'
                  onChange={handleChange}
                  value={user.major}
                />
                <label>Current location</label>
                <input
                  type='text'
                  placeholder='Enter your current residence'
                  name='current_location'
                  onChange={handleChange}
                  value={newData.currentLocation}
                />
                <label>Email Address</label>
                <input
                  type='email'
                  disabled=''
                  placeholder='johnsmith@gmail.com'
                  name='email'
                  onChange={handleChange}
                  value={user.email}
                />
                <label>
                  Alternate Email Address <span>(optional)</span>
                </label>
                <input
                  type='email'
                  placeholder='johnsmith@gmail.com'
                  name='altemail'
                  onChange={handleChange}
                  value={newData.altEmail}
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
                        name='phone'
                        onChange={handleChange}
                        value={
                          newData.phone
                          // ' ' +
                          // newData.phone.slice(3, 8) +
                          // '-' +
                          // newData.phone.slice(8, 13)
                        }
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
                        name='altphone'
                        onChange={handleChange}
                        value={newData.altPhone}
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
                <textarea
                  name='about'
                  value={newData.about}
                  onChange={handleChange}
                ></textarea>
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
