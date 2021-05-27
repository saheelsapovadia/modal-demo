import React, { useState } from 'react';
import { GlobalStyle } from '../../globalStyles';
import styled from 'styled-components';
import { Modal } from '../Modal/Modal';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

export const SignUp = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <Button onClick={openModal}>Sign up</Button>
      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
    </>
  );
};
