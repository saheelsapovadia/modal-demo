import React, { useState } from 'react';
import { GlobalStyle } from '../globalStyles';
import styled from 'styled-components';
import { Modal } from '../Components/Modal/Modal';
import { NewProfile } from '../Components/NewProfile/NewProfile';
import { SignUp } from '../Components/SignUp/SignUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
export const Layout = () => {
  const [userData, setUserData] = useState({});
  //console.log(userData);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path='/'
            exact
            render={(props) => <SignUp {...props} setUserData={setUserData} />}
            //component={SignUp}
          ></Route>
          <Route
            path='/dashboard/profile'
            exact
            //   component={NewProfile}
            render={(props) => (
              <NewProfile
                {...props}
                user={userData}
                setUserData={setUserData}
              />
            )}
          ></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
