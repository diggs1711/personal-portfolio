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
import Project from '../components/Project';
import Zoom from 'react-reveal/Zoom';

const Homepage = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;

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
  height: ${(props: any) => (props.fullWidth ? `100vh` : `100%`)};
  background: ${(props: any) =>
    props.background
      ? `linear-gradient(
      -185deg,
      ${rgba(darken(0.1, props.theme.colors.primary), 0.7)},
      ${rgba(lighten(0.1, props.theme.colors.grey.dark), 0.9)}), url(/assets/bg.webp) no-repeat`
      : null};
  background-size: cover;
  background-position: center;
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
  overflow: hidden;
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
`;

const TypedHeading = styled.h1`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.1em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  margin-bottom: 0.55em;
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: ${typing} 4s steps(40, end), ${blink} 0.75s step-end infinite;

  @media ${media.phone} {
    white-space: unset;
    animation: none;
    width: 100%;
  }
`;

const TypedText = styled.div`
  p {
    margin: 0;
    margin-bottom: 0.3em;
    padding: 0;
  }
`;

const ProfiilePic = styled.img`
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  filter: grayscale(1);
  transition: all 0.3s linear;
  object-fit: cover;
  display: block;
  margin: 1em auto 3.5em auto;

  :hover {
    opacity: 0.8;
    transform: scale(1.1);
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
            <GridRow fullWidth={true} background={true}>
              <HomepageContent center={true}>
                {/* <img src={config.siteLogo} /> */}
                <TypedHeading>Hi. I am David</TypedHeading>
                <TypedText>
                  <p>A Web Developer who creates UX rich performant websites and web applications.</p>
                </TypedText>
                <SocialLinks />
              </HomepageContent>
            </GridRow>
            <GridRow>
              <HomepageContent>
                <Zoom>
                  <ProfiilePic height="200px" width="200px" src="/assets/profile.webp" alt="profile picture" />
                  <h2>About Me</h2>
                  <p>
                    Graduate of National University Ireland, Galway with a honours degree in Electronic and Computer Engineering. I have
                    over 2.5 years of experience working with a major public sector client. I am passionate about Web Development and
                    learning new technologies.
                  </p>
                  <hr />
                  <h2>Projects</h2>
                </Zoom>
                <Project />
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
