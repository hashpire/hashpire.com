import React from 'react';
import NodeRenderer from '../Components/NodeRenderer';

class Post extends React.Component {

  render() {
    let nodeId = this.props.match.params.id;
    return (
      <NodeRenderer nodeId={nodeId}/>
    );
  }


}

export default Post