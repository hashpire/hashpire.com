import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import MarkdownRenderer from '../Utils/MarkdownRenderer';
import { Button } from 'semantic-ui-react';


class App extends React.Component {
  render() {
    return <div><MarkdownRenderer url={'/assets/test.md'}/><Button>Click Here</Button></div>;
  }
}

export default App;