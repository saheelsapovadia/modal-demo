import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Background, CloseModalButton } from '../Modal/Modal';
export const SocialMediaModal = ({
  showModal,
  setShowModal,
  save,
  scrollRemove,
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
  const closeSocialModal = () => {
    setShowModal((prev) => !prev);
    scrollRemove();
  };

  const [socials, setSocials] = useState({
    linkedin: '',
    github: '',
    line: '',
    wechat: '',
    personal: '',
    projects: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let soc = { ...socials };
    switch (name) {
      case 'linkedin':
        soc.linkedin = value;
        setSocials(soc);
        break;
      case 'github':
        soc.github = value;
        setSocials(soc);
        break;
      case 'lineid':
        soc.line = value;
        setSocials(soc);
        break;
      case 'wechatid':
        soc.wechat = value;
        setSocials(soc);
        break;
      case 'personal':
        soc.personal = value;
        setSocials(soc);
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
                  onChange={handleChange}
                  onBlur={handleChange}
                  placeholder='https://www.scholarly-science.com'
                  value={socials.linkedin}
                />
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
                  <button onClick={send}>Save</button>
                </div>
              </form>
            </div>
          </div>
        </Background>
      ) : null}
    </>
  );
};
