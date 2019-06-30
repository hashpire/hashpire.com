import React from "react";
import { Container, Item, Label, Icon, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import NodeRenderer from '../Components/NodeRenderer';

class Technologies extends React.Component {

  render() {
    return (
      <NodeRenderer nodeId={3} cards/>
    );
  }
}

export default Technologies;
