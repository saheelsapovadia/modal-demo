import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Background, CloseModalButton } from '../Modal/Modal';
export const SocialMediaModal = ({
  showModal,
  setShowModal,
  save,
  scrollRemove,
}) => {
  const github = RegExp(/github/);
  const website = RegExp(/.com/);
  const linkedin = RegExp(/linkedin/);
  const line = RegExp(/line/);
  const wechat = RegExp(/wechat/);
  const [errors, setErrors] = useState({
    github: '',
    linkedin: '',
    website: '',
    line: '',
    wechat: '',
  });

  const modalRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      scrollRemove();
      resetModal();
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        scrollRemove();
        resetModal();
        // console.log('I pressed');
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
    resetModal();
  };

  const [socials, setSocials] = useState({
    linkedin: '',
    github: '',
    line: '',
    wechat: '',
    personal: '',
    projects: '',
  });
  const resetModal = () => {
    setErrors({
      github: '',
      linkedin: '',
      website: '',
      line: '',
      wechat: '',
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    //console.log('handle.');
    const { name, value } = e.target;

    let newError = { ...errors };

    let soc = { ...socials };
    switch (name) {
      case 'linkedin':
        soc.linkedin = value;
        setSocials(soc);
        if (linkedin.test(value) && website.test(value)) {
          newError.linkedin = '';
          setErrors(newError);
        } else if (value.length > 0) {
          newError.linkedin = 'Invalid Linkedin url';

          setErrors(newError);
        } else {
          newError.linkedin = '';
          setErrors(newError);
        }
        break;
      case 'github':
        soc.github = value;
        if (github.test(value) && website.test(value)) {
          newError.github = '';
          setSocials(soc);
          setErrors(newError);
        } else if (value.length > 0) {
          newError.github = 'Invalid Github url';
          setSocials(soc);
          setErrors(newError);
        } else {
          newError.github = '';
          setErrors(newError);
        }
        break;
      case 'lineid':
        soc.line = value;
        setSocials(soc);
        if (line.test(value) && website.test(value)) {
          newError.line = '';
          setErrors(newError);
        } else if (value.length > 0) {
          newError.line = 'Invalid line Url';
          setErrors(newError);
        } else {
          newError.line = '';
          setErrors(newError);
        }
        break;
      case 'wechatid':
        soc.wechat = value;
        setSocials(soc);
        if (website.test(value) && website.test(value)) {
          newError.wechat = '';
          setErrors(newError);
        } else if (value.length > 0) {
          newError.wechat = 'Invalid wechat Url';
          setErrors(newError);
        } else {
          newError.wechat = '';
          setErrors(newError);
        }
        break;
      case 'personal':
        soc.personal = value;
        setSocials(soc);
        if (website.test(value)) {
          newError.website = '';
          setErrors(newError);
        } else if (value.length > 0) {
          newError.website = 'Invalid Url';
          setErrors(newError);
        } else {
          newError.website = '';
          setErrors(newError);
        }
        break;
      case 'project':
        soc.projects = value;
        setSocials(soc);
        break;
    }
  };
  const send = (e) => {
    setShowModal(false);
    save(socials);
    scrollRemove();
  };
  // console.log(
  //   !(
  //     errors.github == 0 &&
  //     errors.line == 0 &&
  //     errors.website == 0 &&
  //     errors.wechat == 0 &&
  //     errors.linkedin == 0
  //   )
  // );

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
                  onChange={handleChange}
                  onBlur={handleChange}
                  placeholder='https://www.scholarly-science.com'
                  value={socials.linkedin}
                />
                {errors.linkedin.length > 0 && (
                  <p className='modal__errors'>
                    <svg
                      className='MuiSvgIcon-root'
                      focusable='false'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                    </svg>{' '}
                    {errors.linkedin}
                  </p>
                )}
                <label>
                  Github URL <span>(optional)</span>
                </label>
                <input
                  type='text'
                  name='github'
                  onChange={handleChange}
                  onBlur={handleChange}
                  value={socials.github}
                  placeholder='https://www.scholarly-science.git'
                />
                {errors.github.length > 0 && (
                  <p className='modal__errors'>
                    <svg
                      className='MuiSvgIcon-root'
                      focusable='false'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                    </svg>{' '}
                    {errors.github}
                  </p>
                )}
                <label>
                  Line ID <span>(optional)</span>
                </label>
                <input
                  type='text'
                  name='lineid'
                  onChange={handleChange}
                  onBlur={handleChange}
                  value={socials.line}
                  placeholder='Worked on something you loved add a link'
                />
                {errors.line.length > 0 && (
                  <p className='modal__errors'>
                    <svg
                      className='MuiSvgIcon-root'
                      focusable='false'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                    </svg>{' '}
                    {errors.line}
                  </p>
                )}
                <label>
                  WeChat ID <span>(optional)</span>
                </label>
                <input
                  type='text'
                  name='wechatid'
                  onChange={handleChange}
                  onBlur={handleChange}
                  value={socials.wechat}
                  placeholder='https://www.scholarly-science.com'
                />
                {errors.wechat.length > 0 && (
                  <p className='modal__errors'>
                    <svg
                      className='MuiSvgIcon-root'
                      focusable='false'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                    </svg>{' '}
                    {errors.wechat}
                  </p>
                )}
                <label>
                  Personal Website <span>(optional)</span>
                </label>
                <input
                  type='text'
                  name='personal'
                  onChange={handleChange}
                  onBlur={handleChange}
                  value={socials.personal}
                  placeholder='https://www.scholarly-science.com'
                />
                {errors.website.length > 0 && (
                  <p className='modal__errors'>
                    <svg
                      className='MuiSvgIcon-root'
                      focusable='false'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                    </svg>{' '}
                    {errors.website}
                  </p>
                )}
                <label>
                  Passion Projects <span>(optional)</span>
                </label>
                <input
                  type='text'
                  name='project'
                  onChange={handleChange}
                  onBlur={handleChange}
                  value={socials.projects}
                  placeholder='Worked on something you loved add a link'
                />
                <div class='elsewhere__button'>
                  <button
                    onClick={send}
                    disabled={
                      !(
                        errors.github == 0 &&
                        errors.line == 0 &&
                        errors.website == 0 &&
                        errors.wechat == 0 &&
                        errors.linkedin == 0
                      )
                    }
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
