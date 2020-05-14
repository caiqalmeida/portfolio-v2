import React from 'react';
import styled from 'styled-components';

import timelineData from './TimelineData';
import TimelineItem from './TimelineItem';

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0;

  &:after {
    background-color: #2b2b2d;
    content: '';
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
  }
`;

const Timeline = () => {
  return (
    timelineData.length > 0 && (
      <TimelineContainer>
        {timelineData.map((data, index) => {
          const isOdd = (index + 1) % 2 !== 0;

          return <TimelineItem isOdd={isOdd} data={data} key={index} />;
        })}
      </TimelineContainer>
    )
  );
};

export default Timeline;
