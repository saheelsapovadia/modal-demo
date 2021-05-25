import React, { useState, useRef } from 'react';
import './NewProfile.css';
import '../Modal/Modal.css';
import './dashboard.css';
import './toggle.css';
import './sidedrawer.css';
import './StudentSidebar.css';
import './importantStyle.css';
import avatar from './avatar-edit.png';
import personal from './personal-website.0111f690.svg';
import linkedin from './linkedin.2932a798.svg';
import github from './github.09c9500e.svg';
import heart from './heart.079db34b.svg';
import badges from './badges.fbd62946.svg';
import uploadResume from './resume-selected.178e0255.svg';
import { EditProfile } from '../Editprofile/EditProfile';
import { AddExperience } from '../Editprofile/AddExperience';
import PreferenceModal from '../PreferenceModal/PreferenceModal';
import { SocialMediaModal } from '../SocialMedia/SocialMediaModal';
import { Editor, EditorState, RichUtils } from 'draft-js';

export const NewProfile = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showAddExpiModal, setShowAddExpiModal] = useState(false);
  const [showPreferenceModal, setShowPreferenceModal] = useState(false);
  const [showSocialModal, setShowSocialModal] = useState(false);
  const [query, setQuery] = useState(null);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [rolesArr, setRolesArr] = useState([]);
  const [expisArr, setExpiArr] = useState([]);
  const [skillsArr, setSkillsArr] = useState([]);
  const [locationsArr, setLocationsArr] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [editExpi, setEditExpi] = useState([
    0,
    {
      company: '',
      website: '',
      location: '',
      remote: '',
      title: '',
      from: {
        month: '',
        year: '',
      },
      present: '',
      to: {
        month: '',
        year: '',
      },
      desc: 'des',
      editorState: () => EditorState.createEmpty(),
    },
  ]);
  const [socials, setSocials] = useState({
    linkedin: '',
    github: '',
    line: '',
    wechat: '',
    personal: '',
    projects: '',
  });
  const [edit, setEdit] = useState(false);
  const [suggestions, setSuggestions] = useState([
    { img: 'https://i.ibb.co/T1W3Ctq/amwalcom.png', name: 'Amwalcom' },
    { img: 'https://i.ibb.co/fv0XS7D/ARVORE.png', name: 'ARVORE' },
    {
      img: 'https://i.ibb.co/5TSTY4C/Administrate.jpg',
      name: 'Administrate',
    },
    { img: 'https://i.ibb.co/Njp0GMr/Antwork.png', name: 'Antwork' },
    { img: 'https://i.ibb.co/XZJstjB/Andovar.png', name: 'Andovar' },
    { img: 'https://i.ibb.co/9nBjbwz/Arthur-AI.png', name: 'ArthurAI' },
  ]);
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
  const [allExpis, setAllExpis] = useState([
    'Business',
    'Sales',
    'Marketing',
    'Networking',
    'Systems',
    'Backend',
    'Security',
    'Frontend',
    'Data Science',
    'Testing',
    'Product Management',
    'Finance',
    'Hardware',
    'UI/UX Design',
    'Full Stack',
    'Mobile',
    'Product Design',
    'Machine Learning',
    'Accounting',
    'Trading',
    'Art',
    'Legal',
    'Biotech',
  ]);
  const [allSkills, setAllSkills] = useState([
    'Angular js',
    'Apache spark',
    'C',
    'C++',
    'Kotlin',
    'Java',
    'Python',
    'Node js',
    'React js',
    'Linux',
    'Github',
    'SQL',
    'MongoDB',
  ]);
  const [allLocations, setAllLocations] = useState([]);

  const openEditProfileModal = () => {
    setShowEditProfileModal((prev) => !prev);
    scrollRecord();
  };
  const openAddExpiModal = () => {
    setShowAddExpiModal((prev) => !prev);

    scrollRecord();
  };
  const openPreferenceModal = (q) => {
    setQuery(q);
    scrollRecord();
    setShowPreferenceModal((prev) => !prev);
  };
  const openSocialModal = () => {
    setShowSocialModal((prev) => !prev);
    scrollRecord();
  };
  const save = (result, all) => {
    setRolesArr(result);
    setAllRoles(all);
  };
  const savePrefExpi = (result, all) => {
    setExpiArr(result);
    setAllExpis(all);
    //console.log(result, all);
  };
  const saveSkills = (result, all) => {
    setAllSkills(all);
    setSkillsArr(result);
  };
  const saveLocations = (result, all) => {
    setLocationsArr(result);
    setAllLocations(all);
  };
  const saveExpi = (result) => {
    console.log(result);
    setEditorState(result.editorState);
    setExperiences([...experiences, result]);
  };
  const editCurrExp = (result, index) => {
    let currExp = [...experiences];
    currExp[index] = result;
    setExperiences(currExp);
    setEditorState(result.editorState);
  };
  const deleteExpi = (index) => {
    let newState = [...experiences];

    let deletedState = newState.filter((ele, i) => {
      return index != i;
    });

    setExperiences(deletedState);
  };
  const saveSocials = (result) => {
    setSocials(result);
  };
  //console.log(socials);
  const rolesUI = rolesArr.map((role) => {
    return <p>{role}</p>;
  });
  const expiUI = expisArr.map((expi) => {
    return <p>{expi}</p>;
  });
  const skillsUi = skillsArr.map((skill) => {
    return <p>{skill}</p>;
  });
  const locationUI = locationsArr.map((location) => {
    return <p>{location}</p>;
  });

  const editModal = (exp, index) => {
    console.log(exp, index);
    setEdit(true);
    setEditExpi([index, exp]);
    openAddExpiModal();
  };
  //console.log(rolesArr);
  //console.log(experiences);
  const expUI = experiences.map((exp, index) => {
    let img = [];
    img = suggestions.filter((sugg) => {
      return sugg.name == exp.company;
    });
    //console.log(img[0].img);
    return (
      <>
        <div className='experiences__card'>
          <div>
            <img
              src={
                img.length > 0
                  ? img[0].img
                  : 'https://wi-images.condecdn.net/image/nrjyg4aGK0k/crop/2040/f/hangout.jpg'
              }
              alt='ss'
            />
            <div
              style={{
                width: '90%',
                fontSize: '0.875rem',
                lineHeight: '150%',
              }}
            >
              <h2 style={{ display: 'inline' }}>
                {exp.title}{' '}
                <a style={{ textDecoration: 'none' }} href={exp.website}>
                  - {exp.company}
                </a>
              </h2>
              {/* <h2 className='job__company'>
                <a href='ss.eee.com'>{exp.company}</a>
              </h2> */}
              <h3>
                {exp.from.month} {exp.from.year} -{' '}
                {!exp.present ? exp.to.month + ' ' + exp.to.year : ' present'}
              </h3>
              <h4>{exp.location}</h4>
              <div>
                {/* <div dangerouslySetInnerHTML={{ __html: exp.desc }} /> */}
                <Editor
                  editorState={exp.editorState}
                  onChange={setEditorState}
                  style={{
                    outline: 'none',
                    height: 'fit-content',
                    marginBottom: '10px',
                  }}
                  readOnly={true}
                />
                {/* <div class='DraftEditor-root'>
                                <div class='DraftEditor-editorContainer'>
                                  <div
                                    class='public-DraftEditor-content'
                                    contenteditable='false'
                                    spellcheck='false'
                                    style='outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;'
                                  >
                                    <div data-contents='true'>
                                      <div
                                        class=''
                                        data-block='true'
                                        data-editor='194hg'
                                        data-offset-key='9cgdd-0-0'
                                      >
                                        <div
                                          data-offset-key='9cgdd-0-0'
                                          class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'
                                        >
                                          <span data-offset-key='9cgdd-0-0'>
                                            <span data-text='true'>@S4vvy</span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
              </div>
            </div>
            <svg
              class='MuiSvgIcon-root hide'
              focusable='false'
              viewBox='0 0 24 24'
              aria-hidden='true'
              onClick={() => editModal(exp, index)}
            >
              <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z'></path>
            </svg>
          </div>
          <button
            onClick={() => {
              openAddExpiModal();
              setEdit(false);
            }}
          >
            + Add Experience
          </button>
        </div>
      </>
    );
  });

  const scrollRecord = () => {
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    setLeft(left);
    setTop(top);
    document.body.className = 'modal-open';
    document.body.style.scrollTo = left;
    document.body.style.scroll = top;
    // document.body.style.overflow = 'hidden';
    // document.body.style.position = 'fixed';
    window.scrollTo(left, top);
  };
  const scrollRemove = () => {
    document.body.className = '';
    // document.body.style.overflow = 'auto';
    // document.body.style.position = 'relative';
    window.scrollTo(left, top);
  };
  //console.log(left, top);

  // File Upload
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const deleteFile = () => {
    setFile(null);
  };
  const onFileUpload = (e) => {};
  console.log(file);

  return (
    <>
      <EditProfile
        showModal={showEditProfileModal}
        setShowModal={setShowEditProfileModal}
        scrollRemove={scrollRemove}
      ></EditProfile>
      <AddExperience
        showModal={showAddExpiModal}
        setShowModal={setShowAddExpiModal}
        save={saveExpi}
        scrollRemove={scrollRemove}
        edit={edit}
        editExpi={editExpi}
        currSave={editCurrExp}
        deleteExpi={deleteExpi}
      />
      <PreferenceModal
        showModal={showPreferenceModal}
        setShowModal={setShowPreferenceModal}
        query={query}
        rolesArr={rolesArr}
        expiArr={expisArr}
        skillsArr={skillsArr}
        locationsArr={locationsArr}
        allRoles={allRoles}
        allExpis={allExpis}
        allSkills={allSkills}
        allLocations={allLocations}
        save={save}
        savePrefExpi={savePrefExpi}
        saveSkills={saveSkills}
        saveLocations={saveLocations}
        scrollRemove={scrollRemove}
      />
      <SocialMediaModal
        showModal={showSocialModal}
        setShowModal={setShowSocialModal}
        save={saveSocials}
        scrollRemove={scrollRemove}
      />
      <div
        className='main'
        // style={
        //   showAddExpiModal ||
        //   showEditProfileModal ||
        //   showPreferenceModal ||
        //   showSocialModal
        //     ? { overflow: 'hidden' }
        //     : {}
        // }
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

                  {experiences.length > 0 ? (
                    <div
                      class='newProfile__experience'
                      style={{ background: '#fff' }}
                    >
                      <h1>EXPERIENCE</h1>
                      {expUI}
                      <div></div>
                    </div>
                  ) : (
                    <div class='newProfile__experience'>
                      <h1>EXPERIENCE</h1>
                      <div class='newProfile__experience__bg'>
                        <h3 style={{ padding: '0px' }}>Add your experience</h3>
                        <p>
                          Stand out to recruiters by adding your past and
                          upcoming experiences
                        </p>
                        <button class='btn' onClick={openAddExpiModal}>
                          Add Experience
                        </button>
                      </div>
                      <div></div>
                    </div>
                  )}

                  <div
                    className={
                      file
                        ? 'newProfile__resume newProfile__resume_noback'
                        : 'newProfile__resume'
                    }
                  >
                    <h1>RESUME</h1>
                    {file ? (
                      <div class='newProfile__resume__selected'>
                        <img src={uploadResume} alt='resume' />
                        <div>
                          <h3>s4vvy.jpg</h3>
                          <p>Last updated: May 25, 2021</p>
                        </div>
                        <div class='newProfile__resume__selected__icons'>
                          <svg
                            class='MuiSvgIcon-root'
                            focusable='false'
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                            onClick={deleteFile}
                          >
                            <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'></path>
                          </svg>
                          <input
                            type='file'
                            id='file'
                            name='file'
                            ref={fileInput}
                            onChange={onFileChange}
                          />
                          <svg
                            class='MuiSvgIcon-root'
                            focusable='false'
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                            id='file-selected'
                            onClick={(e) => {
                              fileInput.current && fileInput.current.click();
                              onFileUpload();
                            }}
                          >
                            <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z'></path>
                          </svg>
                          <input type='file' id='file' name='file' />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h3>Add your resume</h3>
                        <p>
                          Your resume is essential for recruiters to learn more
                          about you! Upload one as soon as possible to boost
                          your chances of being discovered
                        </p>
                        <input
                          type='file'
                          id='file'
                          name='file'
                          ref={fileInput}
                          onChange={onFileChange}
                        />
                        <button
                          class='btn'
                          onClick={(e) => {
                            fileInput.current && fileInput.current.click();
                            onFileUpload();
                          }}
                        >
                          Add Resume
                        </button>
                      </div>
                    )}
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
                        {expisArr.length > 0 ? (
                          <div>{expiUI}</div>
                        ) : (
                          <p>What areas of experience do you have?</p>
                        )}
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
                        {skillsArr.length > 0 ? (
                          <div>{skillsUi}</div>
                        ) : (
                          <p>Rank your skills</p>
                        )}
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
                      {socials.personal == '' ? (
                        'Add Website'
                      ) : (
                        <a href={socials.personal}>{socials.personal}</a>
                      )}
                    </p>
                    <p>
                      <img src={linkedin} alt='linkedin' />
                      {socials.linkedin == '' ? (
                        'Add Linkedin'
                      ) : (
                        <a href={socials.linkedin}>{socials.linkedin}</a>
                      )}
                    </p>
                    <p>
                      <img src={heart} alt='heart' />
                      {socials.projects == '' ? (
                        'Add Passion Project'
                      ) : (
                        <a href={socials.projects}>{socials.projects}</a>
                      )}
                    </p>
                    <p>
                      <img src={github} alt='github' />
                      {socials.github == '' ? (
                        'Add Github'
                      ) : (
                        <a href={socials.github}>{socials.github}</a>
                      )}
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
