import React from 'react';
import Data from '../models/Data';

interface Props {
  data: Data;
  pageContext: {
    currentPage: number;
    totalPages: number;
  };
}

export default class ProjectPage extends React.Component<Props> {
  public render() {
    return <h1> Hello</h1>;
  }
}
