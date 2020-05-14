import React from 'react';
import styled from 'styled-components';

import { TiDocumentText } from 'react-icons/ti';
import {
  DiReact,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiSass,
} from 'react-icons/di';

import ImgMeProfile from '../assets/images/perfil.jpg';
import CV from '../assets/documents/cv_caique almeida_frontend.pdf';
import colors from '../styles/colors';

import SocialIcons from '../components/SocialIcons';
import PageContentWrapper from '../components/PageContentWrapper';
import TextTitle from '../components/TextTitle';
import Timeline from '../components/timeline/Timeline';
import TextParagraph from '../components/TextParagraph';

const AboutSection = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const AboutContentTimeline = styled.div`
  width: 55%;
`;

const AboutContentProfile = styled.div`
  width: 15%;
  position: fixed;
  left: 12vw;
  max-width: 300px;
`;

const AboutContentItem = styled.div`
  margin-bottom: 5vh;
`;

const AboutContentImg = styled(AboutContentItem)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconDownloadCv = styled(TiDocumentText)`
  color: #707070;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    color: ${colors.blue};
    transform: scale(1.2);
  }
`;

const ProfileImg = styled.img`
  max-width: 100%;
`;
const AbilitiesGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BaseTechIconStyle = `
width: 36px;
height: 36px;
transition: all .3s linear;
background: transparent;
  &:hover {
    transform: scale(1.5);
  }
  `;

const IconHtml = styled(DiHtml5)`
  ${BaseTechIconStyle}
  color: #DD4A25;
`;

const IconCss = styled(DiCss3)`
  ${BaseTechIconStyle}
  color: #118ABE;
`;

const IconSass = styled(DiSass)`
  ${BaseTechIconStyle}
  color: #C76494;
`;

const IconJavascript = styled(DiJavascript1)`
  ${BaseTechIconStyle}
  color: #F0D91B;
`;

const IconReact = styled(DiReact)`
  ${BaseTechIconStyle}
  color: #5ED4F4;
`;

const IconNode = styled(DiNodejs)`
  ${BaseTechIconStyle}
  color: #88C043;
`;

const About = () => {
  return (
    <PageContentWrapper>
      <AboutSection>
        <AboutContentTimeline>
          <TextTitle color={colors.green} letterSpacing="0px">
            24 anos, desenvolvedor web não por formação mas por vocação.
          </TextTitle>
          <TextParagraph>
            Descobri o poder da programação no final de 2018, e desde então a
            principal coisa em que venho focando meus esforços é em aprender
            cada vez mais sobre tecnologias e suas possibilidades.
          </TextParagraph>
          <Timeline />
        </AboutContentTimeline>

        <AboutContentProfile>
          <AboutContentImg>
            <ProfileImg src={ImgMeProfile} alt="Caíque Almeida" />
          </AboutContentImg>
          <AboutContentItem>
            <TextTitle>Habilidades</TextTitle>

            <AbilitiesGrid>
              <IconHtml />
              <IconCss />
              <IconSass />
              <IconJavascript />
              <IconReact />
              <IconNode />
            </AbilitiesGrid>
          </AboutContentItem>
          <AboutContentItem>
            <TextTitle>Contato</TextTitle>

            <SocialIcons />
          </AboutContentItem>
          <AboutContentItem>
            <TextTitle>Baixar Currículo</TextTitle>
            <a href={CV} download="cv_caique_almeida">
              <IconDownloadCv />
            </a>
          </AboutContentItem>
        </AboutContentProfile>
      </AboutSection>
    </PageContentWrapper>
  );
};

export default About;
