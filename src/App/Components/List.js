import React from "react";
import { Container, Item, Label, Icon, Button, Header } from "semantic-ui-react";
import { Link } from 'react-router-dom';
class List extends React.Component {

  render() {
    let { node, children, accounts } = this.props;
    console.log(this.props)
    return (
      <Container text>
        <Header as='h1' textAlign='center' dividing>{node.metadata}</Header>
        <Item.Group divided>
          {
            children.map((child, index) => {
              let url;
              if(child.tid == 0) {
                url = `/tags/${child.id}`
              } else {
                url = `/posts/${child.id}`
              }

              return (
                <Item key={index}>
                  <Item.Image src='assets/images/icon.png' size='small'/>
                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <Link to={url}>{child.metadata}</Link>
                    </Item.Header>
                    <Item.Meta>
                      <span>{`By ${accounts[child.author_id].username}`}</span>
                    </Item.Meta>
                    <Item.Extra>
                      <Icon color='green' name='check' />121 Votes &nbsp;
                      <Icon color='green' name='thumbs up outline' />121 Votes &nbsp;
                      <Icon color='green' name='comment outline' />{child.children.length} &nbsp;
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

export default List;
