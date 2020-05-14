import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { FaHamburger } from 'react-icons/fa';

const HeaderContainer = styled.div`
  padding: 0 2.5%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0);
`;

const HeaderWrapper = styled.header`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled.button`
  width: 30px;
  height: 30px;
`;

const MenuButtonIcon = styled(FaHamburger)`
  width: 100%;
  height: 100%;
  color: #707070;
`;

const HeaderTitleWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
`;

const HeaderTitle = styled.span`
  font-size: 24px;
  color: ${(props) => props.color};
  font-weight: 300;
  letter-spacing: 0.1em;
`;

const Header = ({ handleSidebar }) => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderTitleWrapper to="/">
          <HeaderTitle color="#5386e4">{'{caíque'}</HeaderTitle>
          <HeaderTitle color="#47e5bc">{'almeida}'}</HeaderTitle>
        </HeaderTitleWrapper>
        <MenuButton onClick={() => handleSidebar()}>
          <MenuButtonIcon />
        </MenuButton>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
