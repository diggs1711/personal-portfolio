import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import { Link } from '@reach/router';

const ProjectContainer = styled.div`
  max-width: 25em;
  min-height: 10em;
  padding: 1em;
  margin-bottom: 2em;
  display: grid;
  grid-template-columns: 60px 1fr;
  transition: all 0.5s linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.1) translateX(15px);
  }
`;

const ProjectImage = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 50px;
  width: 50px;

  &:hover {
    filter: drop-shadow(1px 1px 0.5px rgba(0, 0, 0, 0.5));
  }
`;

const ProjectContent = styled.div`
  margin-left: 0.5em;
`;

const ProjectHeading = styled.h4``;

const ProjectText = styled.div``;
export default class Project extends React.Component {
  render() {
    return (
      <Zoom>
        <ProjectContainer onClick={this.onProjectClicked}>
          <ProjectImage src="/assets/ffl.png" />
          <ProjectContent>
            <ProjectHeading>Fantasy Football Live</ProjectHeading>
            <ProjectText>
              I developed an Ionic Hybrid Application written with Angular 6 using Typescript. Interacts with Official Fantasy Premier
              League API and the Reddit API. Uses Firebase on the backend. Click to view on the play store.
            </ProjectText>
          </ProjectContent>
        </ProjectContainer>
      </Zoom>
    );
  }

  onProjectClicked() {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.fantasy.live';
  }
}
