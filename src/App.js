import React, { useState } from 'react';
import { GlobalStyle } from './globalStyles';
import styled from 'styled-components';
import { Modal } from './Components/Modal/Modal';
import { NewProfile } from './Components/NewProfile/NewProfile';
import { SignUp } from './Components/SignUp/SignUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          {/* dashboard/profile */}
          {/* <Route path='/' exact component={SignUp}></Route> */}
          <Route path='/' exact component={NewProfile}></Route>
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </Container>
  );
};

export default App;
