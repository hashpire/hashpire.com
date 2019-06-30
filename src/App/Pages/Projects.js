import React from "react";
import { Container, Item, Label, Icon, Button, Card, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';
class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
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
        let projects = technologiesNode.children.map((child) => {
          return universe.nodes[child];
        });
        that.setState({
          projects,
          accounts
        })
      });
  }

  render() {
    let { projects, accounts } = this.state;
    return (
      <Container text>
        <Card.Group stackable>
          {
            projects.map((tech, index) => {
              return (
                <Card key={index} link as={Link} to={`/nodes/${tech.id}`}>
                  <Image src='/assets/images/logo.png' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Description>
                      Daniel is a comedian living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='user' />
                    10 Friends
                  </Card.Content>
                </Card>
              );
            })
          }

        </Card.Group>


      </Container>
    );
  }
}

export default Projects;
