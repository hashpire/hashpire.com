import React from 'react';
import NodeRenderer from '../Components/NodeRenderer';

class Post extends React.Component {
  render() {
    let nodeId = this.props.match.params.id;
    return (
      <Container>
        <NodeRenderer nodeId={nodeId}/>
      </Container>
    );
  }


}

export default Post