import React, { useState } from 'react';
import { GlobalStyle } from './globalStyles';
import styled from 'styled-components';
import { Modal } from './Components/Modal/Modal';
import { NewProfile } from './Components/NewProfile/NewProfile';
import { SignUp } from './Components/SignUp/SignUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './Container/Layout';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <Container>
      <Layout />
      <GlobalStyle />
    </Container>
  );
};

export default App;
