import React from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import List from './List';
import Cards from './Cards';

class NodeRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      accounts: []
    }
  }

  componentDidMount() {
    let { nodeId } = this.props
    var that = this;
    fetch("/assets/data/universe.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(universe) {
        let accounts = universe.accounts;
        let node = universe.nodes[nodeId];
        let children = node.children.map((child) => {
          return universe.nodes[child];
        });
        that.setState({
          node,
          accounts,
          children
        })

        if(node.tid == 1) {
          fetch(`/assets/data/${node.data_path}`)
          .then(response => response.text())
          .then(data => {
            that.setState({
              data
            });
          });  
        }
         

      })

  }

  render() {
    let { node } = this.state;
    let { cards } = this.props;

    if(!node) {
      return (
        <div>Loading</div>
      )
    }


    if(node.tid == 0) {
      if(cards) {
        return <Cards {...this.state} />
      } else {
        return <List {...this.state} />
      }
    } else if(node.tid == 1) {
      return ( 
        <Container text>
          <ReactMarkdown source={this.state.data} />
        </Container>
      )
    }

  }
}

export default NodeRenderer;