import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Background, CloseModalButton } from '../Modal/Modal';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import '../Modal/Modal.css';
import './PreferenceModal.css';
import '../NewProfile/NewProfile.css';

const Id = ({ closeModal, save, idArr, allId }) => {
  const [noOfSelected, setNoOfSelected] = useState(0);
  const [selectedArr, setSelectedArr] = useState(rolesArr);
  const [id, setId] = useState(allRoles);
};
