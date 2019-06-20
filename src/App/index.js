import React from 'react';
import MarkdownRenderer from '../Utils/MarkdownRenderer';

class App extends React.Component {
  render() {
    return <div><MarkdownRenderer url={'/assets/test.md'}/></div>;
  }
}

export default App;