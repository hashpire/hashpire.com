import React from 'react';
import ReactMarkdown from 'react-markdown';

const input = '# This is a header\n\nAnd this is a paragraph  \n ## hi \n'

class MarkdownRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: ''
    }
  }

  componentDidMount() {
    let { url } = this.props;
    fetch(url)
      .then(response => response.text())
      .then(data => {
        this.setState({
          html: <ReactMarkdown source={data} />
        });
      });
   
  }

  render() {
    return <div className='md'>{this.state.html}</div>
  }
}

export default MarkdownRenderer;