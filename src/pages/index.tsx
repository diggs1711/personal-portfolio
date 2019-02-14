import React from 'react';
import { Link, graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { Layout, Wrapper, Button, Article } from '../components';
import PageProps from '../models/PageProps';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import { media } from '../utils/media';
import rgba from 'polished/lib/color/rgba';
import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';
import SocialLinks from '../components/SocialLinks';

const Homepage = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: row;
  @media ${media.tablet} {
    height: 100%;
    flex-direction: column;
  }
  @media ${media.phone} {
    height: 100%;
    flex-direction: column;
  }
`;

const GridRow: any = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props: any) =>
    props.background
      ? `linear-gradient(
      -185deg,
      ${rgba(darken(0.1, props.theme.colors.primary), 0.7)}, 
      ${rgba(lighten(0.1, props.theme.colors.grey.dark), 0.9)}), url(/assets/bg.jpg) no-repeat`
      : null};
  background-size: cover;
  padding: 2rem 4rem;
  color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  h1 {
    color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  }
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const typing = keyframes` 
  from { width : 0 }
  to {width: 100% }
`;

const blink = keyframes`
  from,to {border-color: transparent}
  50% {border-color: orange}
`;

const HomepageContent: any = styled.div`
  max-width: 30rem;
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
`;

const TypedContent = styled.h1`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.1em solid orange; /* The typwriter cursor */
  white-space: inherit; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  margin-bottom: 0.55em;
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: ${typing} 3.5s steps(40, end), ${blink} 0.75s step-end infinite;
`;

const TypedText = styled.div`
  p {
    margin: 0;
    margin-bottom: 0.3em;
    padding: 0;
  }
`;

export default class IndexPage extends React.Component<PageProps> {
  public render() {
    // const { data } = this.props;
    // const { edges, totalCount } = data.allMarkdownRemark;
    return (
      <Layout>
        <Wrapper fullWidth={true}>
          <Helmet title={`Homepage | ${config.siteTitle}`} />
          <Homepage>
            <GridRow background={true}>
              <HomepageContent center={true}>
                {/* <img src={config.siteLogo} /> */}
                <TypedContent>Hi. I am David</TypedContent>
                <TypedText>
                  <p>
                    I write JavaScript, Java, C#, Angular, CSS, LESS, SASS and develop Ionic Hybrid Mobile Apps. I'm currently learning
                    React and GatsbyJs which this site is written in.
                  </p>
                </TypedText>
                <SocialLinks />
              </HomepageContent>
            </GridRow>
            <GridRow>
              <HomepageContent>
                <h2>About Me</h2>
                <p>
                  Though I am a results-driven front-end developer by day who have converted inactive designs to fully interactive,
                  well-developed, accessible and standards-based user interfaces. I am completely enthusiast with a full stack environment
                  and passionate about JavaScript world.
                </p>
                <hr />
                <h2>Projects</h2>
              </HomepageContent>
            </GridRow>
          </Homepage>
        </Wrapper>
      </Layout>
    );
  }
}
export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          timeToRead
        }
      }
    }
  }
`;
