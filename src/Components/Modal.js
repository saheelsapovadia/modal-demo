import React, { useRef, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import bottomImg from './modal-bottom.png';
import topImg from './modal-mobile.png';
import './Modal.css';
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const ModalWrapper = styled.div`
//   width: 1007px;
//   height: 650px;
//   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//   background: #fff;
//   color: #000;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   position: relative;
//   z-index: 10;
//   border-radius: 10px;
// `;

// const ModalBottomImg = styled.img`
//   width: 100%;
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   border-radius: 10px 0 0 10px;
// `;
// const ModalSection1 = styled.div`
//   display: flex;
//   flex-direction: column;
//   position:relative;
//   justify-content: center;
//   // align-items: center;
//   border-radius: 10px 0 0 10px;
//   line-height: 1.8;
//   width: 335px;
//   border: 2px solid
//   color: #141414;
//   background-color:#eff2f6;
//   p {
//     margin-bottom: 1rem;
//   }
//   button {
//     padding: 10px 24px;
//     background: #141414;
//     color: #fff;
//     border: none;
//   }
// `;
const ModalContent1 = styled.div`
  padding: 40px 40px 40px;
`;
// const ModalSection2 = styled.div`
//   background-color: #fff;

//   padding: 1.5rem 5rem;
//   position: static;
//   overflow-y: auto;
//   margin: 0px;
// `;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

//Validation
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validPasswordRegex = RegExp(
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])/
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
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

  //Validation
  const [allOk, setAllOk] = useState(false);
  const [nameStatus, setNameStatus] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const handleRequire = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    //let errors = errors;
    let newError = { ...errors };
    switch (name) {
      case 'fullName':
        newError.fullName = value.length == 0 ? 'Fullname is required' : '';
        break;
      case 'email':
        newError.email = value.length == 0 ? 'Email is required' : '';
        break;
      case 'password':
        newError.password = value.length == 0 ? 'Password is required' : '';
        break;
      default:
        break;
    }

    setErrors(newError);
  };

  const enableNext = () => {
    if (nameStatus && emailStatus && passwordStatus) {
      setAllOk(true);
    } else setAllOk(false);
    console.log('func:', allOk);
  };

  const checkSpace = (value) => {
    if (value) {
      if (value.split(' ').length > 1) {
        return value.split(' ')[0].length > 0 && value.split(' ')[1].length > 0;
      } else return false;
    }
  };
  const handleChange = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    //let errors = errors;
    let newError = { ...errors };

    switch (name) {
      case 'fullName':
        // newError.fullName =
        //   value.length == 0
        //     ? 'Fullname is required'
        //     : checkSpace(value)
        //     ? ('')
        //     : 'Invalid name';
        if (value.length == 0) {
          setNameStatus(false);

          newError.fullName = 'Fullname is required';
        } else if (checkSpace(value)) {
          newError.fullName = '';
          setNameStatus(true);
        } else {
          newError.fullName = 'Invalid name';
          setNameStatus(false);
        }
        break;
      case 'email':
        // newError.email =
        //   value.length == 0
        //     ? 'Email is required'
        //     : validEmailRegex.test(value)
        //     ? ''
        //     : 'Invalid email address';
        if (value.length == 0) {
          setEmailStatus(false);

          newError.email = 'Email is required';
        } else if (validEmailRegex.test(value)) {
          newError.email = '';
          setEmailStatus(true);
        } else {
          newError.email = 'Invalid email address';
          setEmailStatus(false);
        }
        break;
      case 'password':
        // newError.password =
        //   value.length == 0
        //     ? 'Please enter your password'
        //     : validPasswordRegex.test(value)
        //     ? ''
        //     : 'Your password must have at least one of each of the following: uppercase character (A-Z), lowercase character (a-z), digit (0-9), and symbol (any non-alphanumeric character)';

        if (value.length == 0) {
          setPasswordStatus(false);

          newError.password = 'Please enter your password';
        } else if (validPasswordRegex.test(value)) {
          newError.password = '';
          setPasswordStatus(true);
        } else {
          newError.password =
            'Your password must have at least one of each of the following: uppercase character (A-Z), lowercase character (a-z), digit (0-9), and symbol (any non-alphanumeric character)';
          setPasswordStatus(false);
        }
        break;
      default:
        break;
    }

    await setErrors(newError);
  };
  console.log('allOk', allOk);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(errors)) {
      console.info('Valid Form');
    } else {
      console.error('Invalid Form');
    }
  };
  useEffect(() => {
    enableNext();

    console.log(nameStatus, emailStatus, passwordStatus);
  }, [nameStatus, emailStatus, passwordStatus]);
  useEffect(() => {
    console.log('allOk: ', allOk);
  }, [allOk]);
  return (
    <>
      {' '}
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <div
            className='ModalWrapper Modal__Fullscreen '
            showModal={showModal}
          >
            <CloseModalButton
              className='CloseModalButton'
              aria-label='Close modal'
              onClick={() => setShowModal((prev) => !prev)}
            />
            <div className='ModalSection1'>
              <div className='modal__content1'>
                <p className='modal__welcome'>Welcome Back</p>
                <p className='modal__signin'>Sign in to continue.</p>
              </div>
              <div className='ModalBottomImg'>
                <img className='big' src={bottomImg} />
                <img
                  className='mobile'
                  src={topImg}
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div className='ModalSection2'>
              <div className='modal__content2'>
                <div className='google__login'>
                  <img
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA5CAMAAAClD0MEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAGSUExURQAAAP+/AECA7zCfUN9AQN9AMPe/APe3CO+AIECH70CA7zCnUOdIMOdAOPq6BUCF9DWqUDWlVepFNepFMOpANfu7BPebEECD8zSnVDSnUOdENOtANPy+A0CE9fy8A0OD8jOmU+lDNulDMzapUzOpU+xDNulDNvq9A0KF8jKnUupCMjOqU+pDNfi7BUKE9DSoUjKmVDSpUutENOtCNvm7BEKD8zSnVOlENOlCNkKG9DSoUutENfq8Bfq8BEGD8zOmUzOmUehDNUKF9DOoU+pDNfq6BUGE8jOnU+lDNfu8BEKG8zeffzSpUzSnU+lDNkGF8/u8BUOE9EGF9DSoU+pDNepDNPu8BUGF9DSnUupENelCNfq9BUKF9ECK3UGF9DOoU+pDNelCNfu8BUKF9DSoUzOoU+tDNOpDNfu8Be66CeK5DvmtC9a4E8m3GPaWFKSzKPSHGpeyLPOAHYuxMfF4IHOuOu9pJlmrRE2qSUGpTkCK4EKF9D+M1kGH6j2StzmbjzuWozakZ+xSLzWmXTSoU+pDNcRMx+0AAABodFJOUwAQEBAQECAgICAgICAgMDAwMDAwMEBAQEBAQEBPT1BQUFBQX19fX2BgYGBvb3BwcHB/f3+AgICAgI+Pj5CQkJCQkJ+fn6CgoKCvr6+vr6+wv7+/v7+/z8/Pz8/f39/f39/f7+/v7+/vEvGb2gAAAi1JREFUeNrN1elf0zAYB/DHTVRkU1Fx3TxRJ6ICTgW85wTcxGu6TUUGHSoziveNUYGZ/N9+2tE2ydI07ccX/t416XdPzhXgP0jXicLdRpNS2pypFrK7NdHZKuXTmAyme0XUTjWrVLvkyi66UzFCqsqlLjlLzFB1GgnpzJo0KC8Od7Is1UjpX7H+aCzRjMSgIb5TG88kAWBj5lRNwc4IajLDdCZLfizBqycZoT9ZkzIocawgeWNcxvZ8Ztl57ds2hd5HYZsQQkstZ0X0L/cQsuBXmy0k9d1DZOej5Y5BqGHaeduiCyH+gw44Di21QpSDK8jLFr5r+6hfDgKUPVYWfvI49ss9d1msXNZ2dYCnnhsK45jp7dN2mHN9EV2oesz8BsK42SjriQFuRtm/On9eNui6+wADrnr5ZYR33SkuDzx3FWCzw15/JxXlSa57bhjchXm3TAgxFCzFjDMFAOfsMX4iVsy4v7vhsWfW8zaE0KtvpJ2LvqybKXfdbimjN8vEyYgPizGzw/vtpr4PhMkRuZtm2Px6W4V1JCerxjJ8Yb3V4ByZ6BFZeo7b9a1Oe56Hz3OcTBfJ2k+Gjbo9cZMIuX10R7snnWvPYrVjdlZ6iSSmaS56Tyu/mD13c5oEZu2HMEo7Y8Hwz2+M8bS4ZhqQrOJHsY490hgquRWTbG6vGcTy8rPUU1SqxUO+h35QUTIfV11qPzlhBH3YjGIHrYzFtb6Jxsk7j51DU7k2KEN/AZeF7avEtSekAAAAAElFTkSuQmCC'
                    alt='gl'
                  ></img>
                  <p>Continue with Google</p>
                </div>
                <div className='modal__seperator'>
                  <hr></hr>
                  <p>or</p>
                  <hr></hr>
                </div>
                <div className='home_modal'>
                  <form className='modal__form'>
                    <label>Your Full Name</label>
                    <input
                      placeholder='Enter Your Full Name'
                      type='text'
                      name='fullName'
                      onBlur={handleChange}
                      onChange={handleChange}
                    ></input>
                    {errors.fullName.length > 0 && (
                      <p className='modal__errors'>
                        <svg
                          className='MuiSvgIcon-root'
                          focusable='false'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                        </svg>{' '}
                        {errors.fullName}
                      </p>
                    )}

                    <label>Your Email Address</label>
                    <input
                      placeholder='Enter Email Address'
                      type='text'
                      name='email'
                      onBlur={handleChange}
                      onChange={handleChange}
                    ></input>
                    {errors.email.length > 0 && (
                      <p class='modal__errors'>
                        <svg
                          class='MuiSvgIcon-root'
                          focusable='false'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                        </svg>{' '}
                        {errors.email}
                      </p>
                    )}
                    <label>Password</label>
                    <input
                      placeholder='Enter Password'
                      type='password'
                      name='password'
                      onBlur={handleChange}
                      onChange={handleChange}
                    ></input>

                    {/* <svg
                      class='MuiSvgIcon-root visiblity'
                      focusable='false'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z'></path>
                    </svg> */}

                    {errors.password.length > 0 && (
                      <p class='modal__errors password_error'>
                        <svg
                          class='MuiSvgIcon-root'
                          focusable='false'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                        </svg>{' '}
                        {errors.password}
                      </p>
                    )}

                    <button class='home__login' type='submit' disabled={!allOk}>
                      Next
                    </button>
                  </form>
                </div>
              </div>
              <div class='modal__contentbottom'>
                <hr></hr>
                <p>
                  By signing up, you're agreeing to our{' '}
                  <span>Terms of Use</span>
                </p>
                <p>
                  Already have an account? <span>Log In</span>
                </p>
              </div>
            </div>
          </div>
        </Background>
      ) : null}
    </>
  );
};
