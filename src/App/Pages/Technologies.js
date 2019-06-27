import React from "react";
import { Container, Item, Label, Icon, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
class Technologies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      technologies: [],
      accounts: []
    }
  }

  componentDidMount() {
    var that = this;
    fetch("/assets/data/universe.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(universe) {
        let accounts = universe.accounts;
        let technologiesNode = universe.nodes[2];
        console.log(technologiesNode);
        let technologies = technologiesNode.children.map((child) => {
          return universe.nodes[child];
        });
        that.setState({
          technologies,
          accounts
        })
      });
  }

  render() {
    let { technologies, accounts } = this.state;
    return (
      <Container text>
        <Item.Group divided>
          {
            technologies.map((tech, index) => {
              return (
                <Item key={index}>
                  <Item.Image src='assets/images/icon.png' size='small'/>

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <Link to={`/nodes/${tech.id}`}>{tech.metadata}</Link>
                    </Item.Header>
                    <Item.Meta>
                      <span>{`By ${accounts[tech.author_id].username}`}</span>
                    </Item.Meta>
                    <Item.Extra>
                      <Icon color='green' name='check' />121 Votes &nbsp;
                      <Icon color='green' name='thumbs up outline' />121 Votes &nbsp;
                      <Icon color='green' name='comment outline' />{tech.children.length} &nbsp;
                    </Item.Extra>
                  </Item.Content>
                </Item>
              );
            })
          }

        </Item.Group>


      </Container>
    );
  }
}

export default Technologies;
