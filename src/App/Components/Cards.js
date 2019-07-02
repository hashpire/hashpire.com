import React from "react";
import { Container, Item, Label, Icon, Button, Card, Image, Header } from "semantic-ui-react";
import { Link } from 'react-router-dom';
class Cards extends React.Component {

  render() {
    let { children, accounts, node } = this.props;
    return (
      <Container>
        <Header as='h1' textAlign='center' dividing>{node.metadata.title}</Header>
        <Card.Group stackable itemsPerRow={4}>
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
                  <Image src={child.metadata.image ? `assets/data/${child.metadata.image}` : 'assets/images/icon-dark.png'} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>{child.metadata.title}</Card.Header>
                    <Card.Description>
                      {child.metadata.description}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='file outline' />
                    {child.children.length}
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
