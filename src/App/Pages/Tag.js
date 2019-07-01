import React from 'react';
import NodeRenderer from '../Components/NodeRenderer';

class Tag extends React.Component {

  render() {
    let nodeId = this.props.match.params.id;
    return (
      <NodeRenderer nodeId={nodeId}/>
    );
  }


}

export default Tag;