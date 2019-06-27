import React from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';


class NodeRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    let nodeId = this.props.match.params.id;
    var that = this;
    fetch("/assets/data/universe.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(universe) {
        let accounts = universe.accounts;
        let node = universe.nodes[nodeId];
        that.setState({
          node,
          accounts,
          url: `assets/data/${node.data_path}`
        })
        
        fetch(`/assets/data/${node.data_path}`)
        .then(response => response.text())
        .then(data => {
          that.setState({
            data
          });
        });

      })

  }

  render() {
    return (
      <Container text>
        <ReactMarkdown source={this.state.data} />
      </Container>
    )
  }
}

export default NodeRenderer;