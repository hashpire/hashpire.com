import React from 'react';
import NodeRenderer from '../Components/NodeRenderer';
import { Breadcrumb, Container } from 'semantic-ui-react';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <NodeRenderer nodeId={1} />
      </Container>
    )
  }
}

export default Home;