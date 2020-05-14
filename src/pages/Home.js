import React from 'react';
import styled from 'styled-components';

import PageContentWrapper from '../components/PageContentWrapper';
import SocialIcons from '../components/SocialIcons';

const HomeWrapper = styled(PageContentWrapper)`
  display: flex;
  align-items: center;
`;

const HomeTitle = styled.h2`
  font-size: 65px;
  font-weight: 300;
`;

const HomeTitleSpan = styled.span`
  font-size: 100px;
  font-weight: 500;
  color: ${(props) => props.color};
`;

const HomeSubtitle = styled.h3`
  margin-top: 5vh;
  margin-bottom: 5vh;
  font-weight: 300;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <div>
        <HomeTitle>
          Olá, sou um <br />
          <HomeTitleSpan color="#5386e4">desenvolvedor web</HomeTitleSpan>{' '}
          <br />
          apaixonado por <br />
          <HomeTitleSpan color="#47e5bc">javascript</HomeTitleSpan> <br />e suas
          possibilidades infinitas.
        </HomeTitle>
        <HomeSubtitle>
          Dica: navegue clicando na minha comida preferida :)
        </HomeSubtitle>
        <SocialIcons />
      </div>
    </HomeWrapper>
  );
};

export default Home;
