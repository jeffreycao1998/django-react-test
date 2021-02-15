import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './screens/Home';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  
  * {
    box-sizing: border-box;
  }
`;

const Content = styled.div`
  width: calc(100vw - 50px);
  height: calc(100vh - 50px);

  position: fixed;
  top: 50px;
  left: 50px;
`;

function App() {

  return (
    <Container>
      <Header />
      <Navbar />

      <Content>
        <Router>
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Content>
    </Container>
  );
}

export default App;
