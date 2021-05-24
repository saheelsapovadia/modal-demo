import React, { useState } from 'react';
import './NewProfile.css';
import '../Modal/Modal.css';
import './dashboard.css';
import './toggle.css';
import './sidedrawer.css';
import './StudentSidebar.css';
import avatar from './avatar-edit.png';
import personal from './personal-website.0111f690.svg';
import linkedin from './linkedin.2932a798.svg';
import github from './github.09c9500e.svg';
import heart from './heart.079db34b.svg';
import badges from './badges.fbd62946.svg';
import { EditProfile } from '../Editprofile/EditProfile';
import { AddExperience } from '../Editprofile/AddExperience';
import PreferenceModal from '../PreferenceModal/PreferenceModal';
import { SocialMediaModal } from '../SocialMedia/SocialMediaModal';

export const NewProfile = () => {
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showAddExpiModal, setShowAddExpiModal] = useState(false);
  const [showPreferenceModal, setShowPreferenceModal] = useState(false);
  const [showSocialModal, setShowSocialModal] = useState(false);
  const [query, setQuery] = useState(null);
  const [rolesArr, setRolesArr] = useState([]);
  const [allRoles, setAllRoles] = useState([
    'IT System Administrator',
    'Sales',
    'Data Scientist',
    'Data Engineer',
    'ML Engineer',
    'Back End Developer',
    'Product Manager',
    'HR',
    'Full Stack Developer',
    'Front End Developer',
    'Business Operstions',
    'Finance',
    'Legal',
    'Product Designer',
    'Devops Engineer',
    'Marketing',
    'Systems Engineer',
    'IOS Engineer',
    'Consulting',
    'Android Engineer',
    'Supply Chain Management',
    'Network Engineer',
    'Content Strategist',
    'Security Engineer',
    'Recruiting',
    'Accounting',
    'Hardware Engineer',
    'Graphic Designer',
    'Logistics Coordinator',
    'Copywriting',
    'Not Sure Yet',
  ]);
  const openEditProfileModal = () => {
    setShowEditProfileModal((prev) => !prev);
  };
  const openAddExpiModal = () => {
    setShowAddExpiModal((prev) => !prev);
  };
  const openPreferenceModal = (q) => {
    setQuery(q);
    setShowPreferenceModal((prev) => !prev);
  };
  const openSocialModal = () => {
    setShowSocialModal((prev) => !prev);
  };
  const save = (result, all) => {
    setRolesArr(result);
    setAllRoles(all);
  };
  const rolesUI = rolesArr.map((role) => {
    return <p>{role}</p>;
  });
  console.log(rolesArr);
  return (
    <>
      <EditProfile
        showModal={showEditProfileModal}
        setShowModal={setShowEditProfileModal}
      ></EditProfile>
      <AddExperience
        showModal={showAddExpiModal}
        setShowModal={setShowAddExpiModal}
      />
      <PreferenceModal
        showModal={showPreferenceModal}
        setShowModal={setShowPreferenceModal}
        query={query}
        rolesArr={rolesArr}
        allRoles={allRoles}
        save={save}
      />
      <SocialMediaModal
        showModal={showSocialModal}
        setShowModal={setShowSocialModal}
      />
      <div
        className='main'
        style={
          showAddExpiModal ||
          showEditProfileModal ||
          showPreferenceModal ||
          showSocialModal
            ? { overflow: 'hidden' }
            : {}
        }
      >
        <div className='left-sidebar-container'></div>
        <div className='dash-container'>
          <div className='mobile hidenav'>
            <div class='toggle'>
              <div class='toggle-line'></div>
              <div class='toggle-line'></div>
              <div class='toggle-line'></div>
            </div>
            <div className='drawer'>
              <div class='header'></div>
              <div className='nav-items'></div>
            </div>
          </div>
          <div className='dash_component' style={{ display: 'block' }}>
            <div className='newProfile'>
              <div className='newProfile__container'>
                <section class='newProfile__left'>
                  <div class='newProfile__userBio'>
                    <div class='newProfile__userBio__image__bg'></div>
                    <div>
                      <span class='MuiBadge-root'>
                        <input
                          type='file'
                          id='avatar-file'
                          style={{ display: 'none' }}
                        ></input>
                        <div class='MuiAvatar-root MuiAvatar-circle MuiAvatar-colorDefault'>
                          A
                        </div>
                        <span class='MuiBadge-badge MuiBadge-anchorOriginTopRightCircle'>
                          <img
                            src={avatar}
                            alt='avatar-edit'
                            style={{
                              display: 'block',
                              width: '20px',
                              marginLeft: '-35px',
                              cursor: 'pointer',
                            }}
                          />
                        </span>
                      </span>
                      <div class='newProfile__userBio__info'>
                        <h4>fffffv f</h4>
                        <h5>ss ss, Spring 2023</h5>
                        <p>BBA, Computer Science</p>
                        <button
                          class='btn'
                          onClick={openEditProfileModal}
                          style={{ marginTop: '7px' }}
                        >
                          Edit Profile
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class='newProfile__experience'>
                    <h1>EXPERIENCE</h1>
                    <div class='newProfile__experience__bg'>
                      <h3 style={{ padding: '0px' }}>Add your experience</h3>
                      <p>
                        Stand out to recruiters by adding your past and upcoming
                        experiences
                      </p>
                      <button class='btn' onClick={openAddExpiModal}>
                        Add Experience
                      </button>
                    </div>
                    <div></div>
                  </div>
                  <div class='newProfile__resume'>
                    <h1>RESUME</h1>
                    <div>
                      <h3>Add your resume</h3>
                      <p>
                        Your resume is essential for recruiters to learn more
                        about you! Upload one as soon as possible to boost your
                        chances of being discovered
                      </p>
                      <button class='btn'>Add Resume</button>
                      <input type='file' id='file' name='file' />
                    </div>
                  </div>
                </section>
                <section class='newProfile__right'>
                  <div>
                    <div class='newProfile__preference'>
                      <div class='newProfile__role'>
                        <h2>
                          Preferred roles
                          <svg
                            class='MuiSvgIcon-root hide'
                            focusable='false'
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                            onClick={() => openPreferenceModal('roles')}
                          >
                            <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z'></path>
                          </svg>
                        </h2>
                        <div></div>
                        {rolesArr.length > 0 ? (
                          <div>{rolesUI}</div>
                        ) : (
                          <p>What are your roles</p>
                        )}
                      </div>
                      <div class='newProfile__exp'>
                        <h2>
                          Experience
                          <svg
                            class='MuiSvgIcon-root hide'
                            focusable='false'
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                            onClick={() => openPreferenceModal('experience')}
                          >
                            <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z'></path>
                          </svg>
                        </h2>
                        <div></div>
                        <p>What areas of experience do you have?</p>
                      </div>
                      <div class='newProfile__skill'>
                        <h2>
                          Skills
                          <svg
                            class='MuiSvgIcon-root hide'
                            focusable='false'
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                            onClick={() => openPreferenceModal('skills')}
                          >
                            <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z'></path>
                          </svg>
                        </h2>
                        <div></div>
                        <p>Rank your skills</p>
                      </div>
                      <div class='newProfile__loc'>
                        <h2>
                          Preferred locations
                          <svg
                            class='MuiSvgIcon-root hide'
                            focusable='false'
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                            onClick={() => openPreferenceModal('location')}
                          >
                            <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z'></path>
                          </svg>
                        </h2>
                        <div></div>
                        <p>Where do you want to work?</p>
                      </div>
                    </div>
                  </div>
                  <div class='newProfile__right__elsewhere'>
                    <h1>
                      Social Media
                      <svg
                        class='MuiSvgIcon-root hide'
                        focusable='false'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                        onClick={openSocialModal}
                      >
                        <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z'></path>
                      </svg>
                    </h1>
                    <p>
                      <img src={personal} alt='personal' />
                      Add Website
                    </p>
                    <p>
                      <img src={linkedin} alt='linkedin' />
                      Add Linkedin
                    </p>
                    <p>
                      <img src={heart} alt='heart' />
                      Add Passion Project
                    </p>
                    <p>
                      <img src={github} alt='github' />
                      Add Github
                    </p>
                  </div>
                  <div class='newProfile__right__elsewhere-new'>
                    <img src={badges} alt='badge' class='badge' />
                    <h6 class='badge-txt'>Earn badges</h6>
                    <p class='badge-txt-p'>
                      Get noticed by recruitments. Add things like hackathons
                      and classes you’ve TA’d.
                    </p>
                    <button class='btn btn-badge'>Add ID Card</button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
