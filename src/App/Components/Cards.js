import React from "react";
import { Container, Item, Label, Icon, Button, Card, Image, Header } from "semantic-ui-react";
import { Link } from 'react-router-dom';
class Cards extends React.Component {

  render() {
    let { children, accounts, node } = this.props;
    return (
      <Container>
        <Header as='h1' textAlign='center' dividing>{node.metadata}</Header>
        <Card.Group stackable>
          {
            children.map((child, index) => {
              let url;
              if(child.tid == 0) {
                url = `/tags/${child.id}`
              } else {
                url = `/posts/${child.id}`
              }

              return (
                <Card key={index} link as={Link} to={url}>
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

export default Cards;
