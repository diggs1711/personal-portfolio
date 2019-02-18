import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const SocialLinksContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2em 0;

  > a {
    transition: all 0.3s linear;
    border-radius: 50% / 50%;

    &:hover {
      transform: scale(1.5);
      filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.5));
      opacity: 0.8;
      border: 1px solid orange;
    }
  }
`;
export default class SocialLinks extends React.Component {
  render() {
    return (
      <SocialLinksContent>
        <SocialIcon url="https://twitter.com/dhiggs1711" fgColor="#fff" bgColor="none" />
        <SocialIcon url="https://www.linkedin.com/in/davidnoelhiggins/" fgColor="#fff" bgColor="none" />
        <SocialIcon url="https://github.com/diggs1711" fgColor="#fff" bgColor="none" />
        <SocialIcon url="mailto:davidhiggins1712@gmail.com" fgColor="#fff" bgColor="none" />
      </SocialLinksContent>
    );
  }
}
