import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Background, CloseModalButton } from '../Modal/Modal';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import '../Modal/Modal.css';
import './PreferenceModal.css';
import '../NewProfile/NewProfile.css';
// import './EditModal.css';
// import './ProfileModal.css';
// import './ExperienceModal.css';
// import './inputSearch.css';
// import './Events.css';

const Roles = ({
  closePreferenceModal,
  save,
  rolesArr,
  allRoles,
  scrollRemove,
}) => {
  const [noOfSelected, setNoOfSelected] = useState(rolesArr.length);
  const [selectedArr, setSelectedArr] = useState(rolesArr);
  const [roles, setRoles] = useState(allRoles);
  const [savedRoles, setSavedRoles] = useState(rolesArr);
  // [ heleo
  //   'IT System Administrator',
  //   'Sales',
  //   'Data Scientist',
  //   'Data Engineer',
  //   'ML Engineer',
  //   'Back End Developer',
  //   'Product Manager',
  //   'HR',
  //   'Full Stack Developer',
  //   'Front End Developer',
  //   'Business Operstions',
  //   'Finance',
  //   'Legal',
  //   'Product Designer',
  //   'Devops Engineer',
  //   'Marketing',
  //   'Systems Engineer',
  //   'IOS Engineer',
  //   'Consulting',
  //   'Android Engineer',
  //   'Supply Chain Management',
  //   'Network Engineer',
  //   'Content Strategist',
  //   'Security Engineer',
  //   'Recruiting',
  //   'Accounting',
  //   'Hardware Engineer',
  //   'Graphic Designer',
  //   'Logistics Coordinator',
  //   'Copywriting',
  //   'Not Sure Yet',
  // ]
  const toggleSelected = (event) => {
    let currClass = event.target.className;
    //console.log(event.target.innerText);
    //
    function arrayRemove(arr, value) {
      return arr.filter(function (ele) {
        return ele != value;
      });
    }

    if (currClass == 'preference__modal__roles__role' && noOfSelected < 7) {
      event.target.className = 'preference__modal__roles__role__selected';
      setNoOfSelected(noOfSelected + 1);
      let newArr = [...selectedArr, event.target.innerText];

      setSelectedArr(newArr);
    } else if (currClass == 'preference__modal__roles__role__selected') {
      event.target.className = 'preference__modal__roles__role';
      const rolesSelected = [...selectedArr];
      let newArr = arrayRemove(rolesSelected, event.target.innerText);
      setNoOfSelected(noOfSelected - 1);
      setSelectedArr(newArr);
      //console.log(selectedArr);
    }
  };

  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [nRole, setNRole] = useState('');
  const OnChange = (e) => {
    const suggestions = [...roles];
    const usrInput = e.target.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(usrInput.toLowerCase()) > -1
    );

    setFilteredSuggestions(newFilteredSuggestions);
    setShowSuggestions(true);
    setUserInput(e.target.value);
  };

  const OnClick = (e) => {
    console.log('onclick....');
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.target.innerText);
    if (noOfSelected < 7) {
      const elementID = e.target.innerText;

      const ele = document.getElementById(elementID);
      //ele.ch;
      ele.className = 'preference__modal__roles__role__selected';
      setNoOfSelected(noOfSelected + 1);
      let newArr = [...selectedArr, ele.innerText];
      setSelectedArr(newArr);
      //console.log(ele.innerHTML);
    }
  };
  const close = () => {
    setShowSuggestions(false);
  };

  let newRole;
  const newRoleFunc = (e) => {
    console.log('newRoleFunc....');
    console.log(e.target.innerText);
    // setNRole(
    //   [...nRole] +
    //   (
    //     <p
    //       class='preference__modal__roles__role'
    //       style={{ cursor: 'pointer' }}
    //       onClick={(e) => toggleSelected(e)}
    //       id={e.target.value}
    //     >
    //       {e.target.value}
    //     </p>
    //   )
    // );
    // Roles = [
    //   ...Roles,
    //   <p
    //     class='preference__modal__roles__role'
    //     style={{ cursor: 'pointer' }}
    //     onClick={(e) => toggleSelected(e)}
    //     id={e.target.innerText}
    //   >
    //     {e.target.innerText}
    //   </p>,
    // ];

    if (noOfSelected < 7) {
      let cr = [...roles];
      let ans = cr.find((role) => {
        return role == e.target.innerText;
      });
      console.log(ans);
      if (!ans) {
        let n = [e.target.innerText, ...roles];
        setRoles(n);
        //console.log(Roles);
        setNoOfSelected(noOfSelected + 1);
        let newArr = [...selectedArr, e.target.innerText];
        setSelectedArr(newArr);
        // let nr = [e.target.innerText, ...roles];
        // setRoles(nr);
      }
    }
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.target.innerText);
  };

  let suggestionsList;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsList = (
        <div className='preference__modal__suggestions' onBlur={close}>
          {/* <ul className='suggestions'> */}
          <span className='' key={userInput} onClick={newRoleFunc}>
            {userInput}
          </span>
          {filteredSuggestions.map((suggestion, index) => {
            let className;
            return (
              <span className='' key={suggestion} onClick={OnClick}>
                {suggestion}
              </span>
            );
          })}
          {/* </ul> */}
        </div>
      );
    } else {
      suggestionsList = (
        <div className='preference__modal__suggestions'>
          <span className='' key={userInput} onClick={newRoleFunc}>
            {userInput}
          </span>
        </div>
      );
    }
  }
  let Roles;

  Roles = roles.map((role) => {
    let flag = false;
    selectedArr.map((savedRole) => {
      if (savedRole == role) {
        flag = true;
      }
    });

    if (flag) {
      return (
        <p
          class='preference__modal__roles__role__selected'
          style={{ cursor: 'pointer' }}
          onClick={(e) => toggleSelected(e)}
          id={role}
          key={role}
        >
          {role}
        </p>
      );
    } else {
      return (
        <p
          class='preference__modal__roles__role'
          style={{ cursor: 'pointer' }}
          onClick={(e) => toggleSelected(e)}
          id={role}
          key={role}
        >
          {role}
        </p>
      );
    }
  });
  //console.log(Roles);

  return (
    <>
      <div class='preference__modal__header'>
        <svg
          class='MuiSvgIcon-root'
          focusable='false'
          viewBox='0 0 24 24'
          aria-hidden='true'
          onClick={() => {
            scrollRemove();
            closePreferenceModal();
          }}
        >
          <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
        </svg>
        <button
          onClick={() => {
            save(selectedArr, roles);
            scrollRemove();
            closePreferenceModal();
          }}
        >
          Save
        </button>
      </div>
      <div className='preference__modal__roles'>
        <h2>Edit My Interests</h2>
        <div class='preference__modal__roles__info'>
          <h5>Which of these roles are you most interested in?</h5>
          <p>Choose up to 7</p>
        </div>
        {/* <div class='prefSearch'>
          <input
            type='text'
            placeholder='Example: Sales, Marketing...'
            // value=''
          />
        </div> */}
        <div className='prefSearch'>
          <input
            type='text'
            onChange={OnChange}
            placeholder='Example: Sales, Marketing...'
            // onBlur={close}
            value={userInput}
          />

          {suggestionsList}
        </div>
        <div id='Roles'>
          {nRole}
          {Roles}
          {/* <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            IT System Administrator
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Sales
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Data Scientist
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Data Engineer
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            ML Engineer
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Back End Developer
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Product Manager
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            HR
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Full Stack Developer
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Front End Developer
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Business Operstions
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Finance
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Product Designer
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Legal
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Devops Engineer
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Marketing
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Systems Engineer
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Consulting
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            IOS Engineer
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Android Engineer
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Supply Chain Management
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Network Engineer
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Content Strategist
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Security Engineer
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Recruiting
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Accounting
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Hardware Engineer
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Graphic Designer
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Logistics Coordinator
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Copywriting
          </p>
          <p
            class='preference__modal__roles__role'
            style={{ cursor: 'pointer' }}
            onClick={(e) => toggleSelected(e)}
          >
            Not Sure Yet
          </p> */}
        </div>
      </div>
    </>
  );
};

const Experience = ({
  expiArr,
  save,
  closePreferenceModal,
  allExpis,
  scrollRemove,
}) => {
  const [noOfSelected, setNoOfSelected] = useState(expiArr.length);
  const [selectedArr, setSelectedArr] = useState(expiArr);
  const [expis, setExpis] = useState(allExpis);
  const toggleSelected = (event) => {
    let currClass = event.target.className;
    function arrayRemove(arr, value) {
      return arr.filter(function (ele) {
        return ele != value;
      });
    }
    //
    if (currClass == 'preference__modal__roles__role' && noOfSelected < 7) {
      event.target.className = 'preference__modal__roles__role__selected';
      setNoOfSelected(noOfSelected + 1);
      let newArr = [...selectedArr, event.target.innerText];
      setSelectedArr(newArr);
    } else if (currClass == 'preference__modal__roles__role__selected') {
      event.target.className = 'preference__modal__roles__role';
      const expiSelected = [...selectedArr];
      let newArr = arrayRemove(expiSelected, event.target.innerText);
      setNoOfSelected(noOfSelected - 1);
      setSelectedArr(newArr);
    }
  };

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [nRole, setNRole] = useState('');
  const OnChange = (e) => {
    const suggestions = [...expis];
    const usrInput = e.target.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(usrInput.toLowerCase()) > -1
    );

    setFilteredSuggestions(newFilteredSuggestions);
    setShowSuggestions(true);
    setUserInput(e.target.value);
  };
  const OnClick = (e) => {
    console.log('onclick....');
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.target.innerText);
    if (noOfSelected < 7) {
      const elementID = e.target.innerText;

      const ele = document.getElementById(elementID);
      //ele.ch;
      ele.className = 'preference__modal__roles__role__selected';
      setNoOfSelected(noOfSelected + 1);
      let newArr = [...selectedArr, ele.innerText];
      setSelectedArr(newArr);
      //console.log(ele.innerHTML);
    }
  };
  const close = () => {
    setShowSuggestions(false);
  };

  let newRole;
  const newRoleFunc = (e) => {
    console.log('newRoleFunc....');
    console.log(e.target.innerText);

    if (noOfSelected < 7) {
      let cr = [...expis];
      let ans = cr.find((expi) => {
        return expi == e.target.innerText;
      });
      console.log(ans);
      if (!ans) {
        let n = [e.target.innerText, ...expis];
        setExpis(n);
        //console.log(Roles);
        setNoOfSelected(noOfSelected + 1);
        let newArr = [...selectedArr, e.target.innerText];
        setSelectedArr(newArr);
        // let nr = [e.target.innerText, ...roles];
        // setExpis(nr);
      }
    }
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.target.innerText);
  };

  let suggestionsList;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsList = (
        <div className='preference__modal__suggestions' onBlur={close}>
          {/* <ul className='suggestions'> */}
          <span className='' key={userInput} onClick={newRoleFunc}>
            {userInput}
          </span>
          {filteredSuggestions.map((suggestion, index) => {
            let className;
            return (
              <span className='' key={suggestion} onClick={OnClick}>
                {suggestion}
              </span>
            );
          })}
          {/* </ul> */}
        </div>
      );
    } else {
      suggestionsList = (
        <div className='preference__modal__suggestions'>
          <span className='' key={userInput} onClick={newRoleFunc}>
            {userInput}
          </span>
        </div>
      );
    }
  }
  let Expis;

  Expis = expis.map((role) => {
    let flag = false;

    selectedArr.map((savedRole) => {
      if (savedRole == role) {
        flag = true;
      }
    });

    if (flag) {
      return (
        <p
          class='preference__modal__roles__role__selected'
          style={{ cursor: 'pointer' }}
          onClick={(e) => toggleSelected(e)}
          id={role}
          key={role}
        >
          {role}
        </p>
      );
    } else {
      return (
        <p
          class='preference__modal__roles__role'
          style={{ cursor: 'pointer' }}
          onClick={(e) => toggleSelected(e)}
          id={role}
          key={role}
        >
          {role}
        </p>
      );
    }
  });

  return (
    <>
      <div class='preference__modal__header'>
        <svg
          class='MuiSvgIcon-root'
          focusable='false'
          viewBox='0 0 24 24'
          aria-hidden='true'
          onClick={() => {
            scrollRemove();
            closePreferenceModal();
          }}
        >
          <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
        </svg>
        <button
          onClick={() => {
            save(selectedArr, expis);
            scrollRemove();
            closePreferenceModal();
          }}
        >
          Save
        </button>
      </div>
      <div className='preference__modal__roles'>
        <h2>Edit My Experience</h2>
        <div class='preference__modal__roles__info'>
          <h5>What area have you had the most experience with?</h5>
          <p>Choose up to 7</p>
        </div>
        <div class='prefSearch'>
          <input
            type='text'
            placeholder='Example: Data Science, Data Analyst...'
            value={userInput}
            onChange={OnChange}
          />
          {suggestionsList}
        </div>
        <div id='Roles'>{Expis}</div>
      </div>
    </>
  );
};

const Skills = ({
  closePreferenceModal,
  save,
  skillsArr,
  allSkills,
  scrollRemove,
}) => {
  const [noOfSelected, setNoOfSelected] = useState(skillsArr.length);
  const [selectedArr, setSelectedArr] = useState(skillsArr);
  const [skills, setSkills] = useState(allSkills);
  const toggleSelected = (event) => {
    let currClass = event.target.className;
    function arrayRemove(arr, value) {
      return arr.filter(function (ele) {
        return ele != value;
      });
    }
    //
    if (currClass == 'preference__modal__roles__role' && noOfSelected < 7) {
      event.target.className = 'preference__modal__roles__role__selected';
      setNoOfSelected(noOfSelected + 1);
      let newArr = [...selectedArr, event.target.innerText];
      setSelectedArr(newArr);
    } else if (currClass == 'preference__modal__roles__role__selected') {
      event.target.className = 'preference__modal__roles__role';
      const expiSelected = [...selectedArr];
      let newArr = arrayRemove(skillsArr, event.target.innerText);
      setNoOfSelected(noOfSelected - 1);
      setSelectedArr(newArr);
    }
  };
  const close = () => {
    setShowSuggestions(false);
  };
  let newRole;
  const newRoleFunc = (e) => {
    console.log('newRoleFunc....');
    console.log(e.target.innerText);

    if (noOfSelected < 7) {
      let cr = [...skills];
      let ans = cr.find((skill) => {
        return skill == e.target.innerText;
      });
      console.log(ans);
      if (!ans) {
        let n = [e.target.innerText, ...skills];
        setSkills(n);
        //console.log(Roles);
        setNoOfSelected(noOfSelected + 1);
        let newArr = [...selectedArr, e.target.innerText];
        setSelectedArr(newArr);
        // let nr = [e.target.innerText, ...roles];
        // setExpis(nr);
      }
    }
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.target.innerText);
  };

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [nRole, setNRole] = useState('');
  const OnChange = (e) => {
    const suggestions = [...skills];
    const usrInput = e.target.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(usrInput.toLowerCase()) > -1
    );

    setFilteredSuggestions(newFilteredSuggestions);
    setShowSuggestions(true);
    setUserInput(e.target.value);
  };

  const OnClick = (e) => {
    console.log('onclick....');
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.target.innerText);
    if (noOfSelected < 7) {
      const elementID = e.target.innerText;

      const ele = document.getElementById(elementID);
      //ele.ch;
      ele.className = 'preference__modal__roles__role__selected';
      setNoOfSelected(noOfSelected + 1);
      let newArr = [...selectedArr, ele.innerText];
      setSelectedArr(newArr);
      //console.log(ele.innerHTML);
    }
  };
  let suggestionsList;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsList = (
        <div className='preference__modal__suggestions' onBlur={close}>
          {/* <ul className='suggestions'> */}
          <span className='' key={userInput} onClick={newRoleFunc}>
            {userInput}
          </span>
          {filteredSuggestions.map((suggestion, index) => {
            let className;
            return (
              <span className='' key={suggestion} onClick={OnClick}>
                {suggestion}
              </span>
            );
          })}
          {/* </ul> */}
        </div>
      );
    } else {
      suggestionsList = (
        <div className='preference__modal__suggestions'>
          <span className='' key={userInput} onClick={newRoleFunc}>
            {userInput}
          </span>
        </div>
      );
    }
  }

  let Skills;

  Skills = skills.map((role) => {
    let flag = false;

    selectedArr.map((savedRole) => {
      if (savedRole == role) {
        flag = true;
      }
    });

    if (flag) {
      return (
        <p
          class='preference__modal__roles__role__selected'
          style={{ cursor: 'pointer' }}
          onClick={(e) => toggleSelected(e)}
          id={role}
          key={role}
        >
          {role}
        </p>
      );
    } else {
      return (
        <p
          class='preference__modal__roles__role'
          style={{ cursor: 'pointer' }}
          onClick={(e) => toggleSelected(e)}
          id={role}
          key={role}
        >
          {role}
        </p>
      );
    }
  });
  return (
    <>
      <div class='preference__modal__header'>
        <svg
          class='MuiSvgIcon-root'
          focusable='false'
          viewBox='0 0 24 24'
          aria-hidden='true'
          onClick={() => {
            scrollRemove();
            closePreferenceModal();
          }}
        >
          <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
        </svg>
        <button
          onClick={() => {
            save(selectedArr, skills);
            scrollRemove();
            closePreferenceModal();
          }}
        >
          Save
        </button>
      </div>
      <div className='preference__modal__roles'>
        <h2>Edit My Background</h2>
        <div className='preference__modal__roles__info'>
          <h5>Rank your skills from the list below.</h5>
          <p>Choose up to 7</p>
        </div>
        <div class='prefSearch'>
          <input
            type='text'
            placeholder='Example: Java, C++'
            value={userInput}
            onChange={OnChange}
          />
          {suggestionsList}
        </div>
        <div>
          {Skills}
          {/* <p class='preference__modal__roles__role'>Angular.js</p>
          <p class='preference__modal__roles__role'>Apache Spark</p>
          <p class='preference__modal__roles__role'>C</p>
          <p class='preference__modal__roles__role'>C++</p>
          <p class='preference__modal__roles__role'>C#</p>
          <p class='preference__modal__roles__role'>Hadoop</p>
          <p class='preference__modal__roles__role'>Java</p>
          <p class='preference__modal__roles__role'>Javascript</p>
          <p class='preference__modal__roles__role'>Matlab</p>
          <p class='preference__modal__roles__role'>HTML/CSS</p>
          <p class='preference__modal__roles__role'>PHP</p>
          <p class='preference__modal__roles__role'>Node.js</p>
          <p class='preference__modal__roles__role'>Objective-C</p>
          <p class='preference__modal__roles__role'>R</p>
          <p class='preference__modal__roles__role'>Ruby</p>
          <p class='preference__modal__roles__role'>React.js</p>
          <p class='preference__modal__roles__role'>React Native</p>
          <p class='preference__modal__roles__role'>Python</p>
          <p class='preference__modal__roles__role'>Scala</p>
          <p class='preference__modal__roles__role'>SQL</p>
          <p class='preference__modal__roles__role'>OCaml</p>
          <p class='preference__modal__roles__role'>Swift</p>
          <p class='preference__modal__roles__role'>Linux/Unix</p>
          <p class='preference__modal__roles__role'>Verilog</p>
          <p class='preference__modal__roles__role'>Django</p>
          <p class='preference__modal__roles__role'>Go</p>
          <p class='preference__modal__roles__role'>Vue.js</p>
          <p class='preference__modal__roles__role'>Assembly</p>
          <p class='preference__modal__roles__role'>Tensorflow</p>
          <p class='preference__modal__roles__role'>Pytorch</p>
          <p class='preference__modal__roles__role'>AWS</p>
          <p class='preference__modal__roles__role'>Adobe Suite</p>
          <p class='preference__modal__roles__role'>Sketch</p>
          <p class='preference__modal__roles__role'>Android</p>
          <p class='preference__modal__roles__role'>IOS</p>
          <p class='preference__modal__roles__role'>Figma</p>
          <p class='preference__modal__roles__role'>JIRA</p>
          <p class='preference__modal__roles__role'>Waterfall</p>
          <p class='preference__modal__roles__role'>Scrum</p>
          <p class='preference__modal__roles__role'>Agile</p>
          <p class='preference__modal__roles__role'>After Effects</p>
          <p class='preference__modal__roles__role'>Illustrator</p>
          <p class='preference__modal__roles__role'>Photoshop</p>
          <p class='preference__modal__roles__role'>MongoDB</p>
          <p class='preference__modal__roles__role'>TCP/IP</p>
          <p class='preference__modal__roles__role'>Excel</p>
          <p class='preference__modal__roles__role'>Public Speaking</p>
          <p class='preference__modal__roles__role'>Powerpoint</p>
          <p class='preference__modal__roles__role'>Tableau</p>
          <p class='preference__modal__roles__role'>Communication</p>
          <p class='preference__modal__roles__role'>Presentation</p>
          <p class='preference__modal__roles__role'>Leadership</p>
          <p class='preference__modal__roles__role'>Organization</p>
          <p class='preference__modal__roles__role'>PowerBi</p>
          <p class='preference__modal__roles__role'>Google Analytics</p>
          <p class='preference__modal__roles__role'>Research</p>
          <p class='preference__modal__roles__role'>Casing</p>
          <p class='preference__modal__roles__role'>Negotiation</p>
          <p class='preference__modal__roles__role'>Branding</p>
          <p class='preference__modal__roles__role'>Content</p>
          <p class='preference__modal__roles__role'>Market Insights</p>
          <p class='preference__modal__roles__role'>SEO</p>
          <p class='preference__modal__roles__role'>Socila Media</p>
          <p class='preference__modal__roles__role'>Analysis</p>
          <p class='preference__modal__roles__role'>Writing</p>
          <p class='preference__modal__roles__role'>Salesforce</p>
          <p class='preference__modal__roles__role'>Modelling</p>
          <p class='preference__modal__roles__role'>Cold Calling</p>
          <p class='preference__modal__roles__role'>Prospecting</p>
          <p class='preference__modal__roles__role'>Lead Generation</p>
          <p class='preference__modal__roles__role'>CPA</p>
          <p class='preference__modal__roles__role'>Sales Forecasting</p>
          <p class='preference__modal__roles__role'>Risk Management</p>
          <p class='preference__modal__roles__role'>Attention to Detail</p>
          <p class='preference__modal__roles__role'>Quick Books</p>
          <p class='preference__modal__roles__role'>Abstract</p>
          <p class='preference__modal__roles__role'>Adobe XD</p>
          <p class='preference__modal__roles__role'>Zeplin</p>
          <p class='preference__modal__roles__role'>Principle</p>
          <p class='preference__modal__roles__role'>Invision</p>
          <p class='preference__modal__roles__role'>Entrepreneurship</p>
          <p class='preference__modal__roles__role'>Kotlin</p>
          <p class='preference__modal__roles__role'>Product Thinking</p>
          <p class='preference__modal__roles__role'>Itneraction Design</p>
          <p class='preference__modal__roles__role'>Visual Design</p>
          <p class='preference__modal__roles__role'>User research</p>
          <p class='preference__modal__roles__role'>3D Animation</p>
          <p class='preference__modal__roles__role'>2D Animation</p>
          <p class='preference__modal__roles__role'>3D Character Art</p>
          <p class='preference__modal__roles__role'>Technical Art</p>
          <p class='preference__modal__roles__role'>Motion Graphics</p>
          <p class='preference__modal__roles__role'>Character Concept Art</p>
          <p class='preference__modal__roles__role'>Environment Concept Art</p>
          <p class='preference__modal__roles__role'>3D Environment Art</p>
          <p class='preference__modal__roles__role'>
            2D Environment Art/Matte Painting
          </p>
          <p class='preference__modal__roles__role'>User Experience Design</p>
          <p class='preference__modal__roles__role'>UI Illustration</p>
          <p class='preference__modal__roles__role'>
            World Building Concept Art
          </p>
          <p class='preference__modal__roles__role'>Weapon Art</p>
          <p class='preference__modal__roles__role'>3D Prop Art</p>
          <p class='preference__modal__roles__role'>Storyboard Art</p>
          <p class='preference__modal__roles__role'>Narrative</p>
          <p class='preference__modal__roles__role'>Docker</p>
          <p class='preference__modal__roles__role'>Kubernetes</p>
          <p class='preference__modal__roles__role'>Animation Art</p>
          <p class='preference__modal__roles__role'>Character Rigging</p>
          <p class='preference__modal__roles__role'>(Real-Time) VFX</p>
          <p class='preference__modal__roles__role'>Illustration</p>
          <p class='preference__modal__roles__role'>Concept Art</p>
          <p class='preference__modal__roles__role'>Game Design</p>
          <p class='preference__modal__roles__role'>Visual Development Art</p>
          <p class='preference__modal__roles__role'>Maya</p>
          <p class='preference__modal__roles__role'>Blender</p>
          <p class='preference__modal__roles__role'>Biochemistry</p>
          <p class='preference__modal__roles__role'>Bio Informatics</p>
          <p class='preference__modal__roles__role'>Biology</p>
          <p class='preference__modal__roles__role'>Biomedical Engineering</p>
          <p class='preference__modal__roles__role'>Business</p>
          <p class='preference__modal__roles__role'>Chemical Engineering</p> */}
        </div>
      </div>
    </>
  );
};

const Location = ({
  closePreferenceModal,
  saveLocations,
  locationsArr,
  allLocations,
  scrollRemove,
}) => {
  return (
    <>
      <div class='preference__modal__header'>
        <svg
          class='MuiSvgIcon-root'
          focusable='false'
          viewBox='0 0 24 24'
          aria-hidden='true'
          onClick={() => {
            scrollRemove();
            closePreferenceModal();
          }}
        >
          <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
        </svg>
        <button>Save</button>
      </div>
      <div className='preference__modal__roles'>
        <h2>Edit My Interests</h2>
        <div className='preference__modal__roles__info'>
          <h5>Which location would you like to work in?</h5>
          <p>Choose up to 7</p>
        </div>
        <div class='prefSearch'>
          <input type='text' placeholder='Example: London, Spain...' value='' />
        </div>
        <div>
          <p class='preference__modal__roles__role'>Totally Open</p>
          <p class='preference__modal__roles__role'>Remote</p>
          <p class='preference__modal__roles__role'>Atlanta, GA</p>
          <p class='preference__modal__roles__role'>Austin, TX</p>
          <p class='preference__modal__roles__role'>Boston, MA</p>
          <p class='preference__modal__roles__role'>Chicago, IL</p>
          <p class='preference__modal__roles__role'>Denver, CO</p>
          <p class='preference__modal__roles__role'>Los Angeles, CA</p>
          <p class='preference__modal__roles__role'>Nashville, TN</p>
          <p class='preference__modal__roles__role'>New York, NY</p>
          <p class='preference__modal__roles__role'>Raleigh, NC</p>
          <p class='preference__modal__roles__role'>San Diego, CA</p>
          <p class='preference__modal__roles__role'>San Francisco, CA</p>
          <p class='preference__modal__roles__role'>Seattle, WA</p>
          <p class='preference__modal__roles__role'>Wilmington, DE</p>
          <p class='preference__modal__roles__role'>Houston, TX</p>
          <p class='preference__modal__roles__role'>Dallas, TX</p>
          <p class='preference__modal__roles__role'>Detroit MI</p>
        </div>
      </div>
    </>
  );
};

export const PreferenceModal = ({
  showModal,
  setShowModal,
  query,
  save,
  savePrefExpi,
  saveSkills,
  saveLocations,
  rolesArr,
  expiArr,
  skillsArr,
  locationsArr,
  allRoles,
  allExpis,
  allSkills,
  allLocations,
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
  const closePreferenceModal = () => {
    setShowModal((prev) => !prev);
  };
  let Q;

  if (query == 'roles') {
    Q = (
      <Roles
        closePreferenceModal={closePreferenceModal}
        save={save}
        rolesArr={rolesArr}
        allRoles={allRoles}
        scrollRemove={scrollRemove}
      />
    );
  } else if (query == 'experience') {
    Q = (
      <Experience
        closePreferenceModal={closePreferenceModal}
        save={savePrefExpi}
        expiArr={expiArr}
        allExpis={allExpis}
        scrollRemove={scrollRemove}
      />
    );
  } else if (query == 'skills') {
    Q = (
      <Skills
        closePreferenceModal={closePreferenceModal}
        skillsArr={skillsArr}
        allSkills={allSkills}
        save={saveSkills}
        scrollRemove={scrollRemove}
      />
    );
  } else if (query == 'location') {
    Q = (
      <Location
        closePreferenceModal={closePreferenceModal}
        scrollRemove={scrollRemove}
        locationsArr={locationsArr}
        allLocations={allLocations}
        save={saveLocations}
      />
    );
  }
  return (
    <>
      {showModal ? (
        <Background
          className='newbg background'
          onClick={closeModal}
          ref={modalRef}
        >
          <div
            className='ModalWrapper Modal__Fullscreen experience__modal elevation preference__modal'
            showModal={showModal}
          >
            {/* <CloseModalButton
              className='CloseModalButton'
              aria-label='Close modal'
              onClick={() => closePreferenceModal()}
            /> */}
            <div className='preference__modal__container'>{Q}</div>
          </div>
        </Background>
      ) : null}
    </>
  );
};
export default PreferenceModal;
