import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const SocialLinksContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2em;
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
