import React from 'react';
import NodeRenderer from '../Components/NodeRenderer';
import Disqus from 'disqus-react';
import { Container } from 'semantic-ui-react';

class Post extends React.Component {
  render() {
    let nodeId = this.props.match.params.id;
    console.log(this.props);
    const disqusShortname = 'example';
    const disqusConfig = {
      url: this.props.match.url,
      identifier: this.props.match.params.id,
      title: 'Tata',
    };

    return (
      <Container text>
        <NodeRenderer nodeId={nodeId} />
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Container>
    );
  }


}

export default Post