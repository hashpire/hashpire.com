import React from 'react';
import ReactMarkdown from 'react-markdown';

const input = '# This is a header\n\nAnd this is a paragraph  \n ## hi \n'

class App extends React.Component {
  render() {
    return <div><ReactMarkdown source={input} /></div>;
  }
}

export default App;