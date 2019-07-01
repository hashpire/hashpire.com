import React from "react";
import { Container, Item, Label, Icon, Button, Card, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import NodeRenderer from '../Components/NodeRenderer';

class Projects extends React.Component {

  render() {
    return (
      <NodeRenderer nodeId={2} cards/>
    );
  }
}

export default Projects;
