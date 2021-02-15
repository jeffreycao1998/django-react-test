import React from 'react';
import styled from 'styled-components';
import twitchLogo from '../assets/twitch-logo.png';
import profilePic from '../assets/profile-pic.jpg';

const Header = () => {
  return (
    <Container>
      <Logo src={twitchLogo} />
      <Profile>
        <img src={profilePic} alt='profile-pic'/>
      </Profile>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 2px #e0e0e0,0 0 2px rgba(0,0,0,.3)!important;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Logo = styled.img`
  height: 28px;
  object-fit: contain;
`;

const Profile = styled.div`
  width: 30px;
  height: 30px;

  img {
    object-fit: contain;
    border-radius: 50%;
    height: 100%;
  }
`;

export default Header;