import React from "react";
import { Container, Item, Label, Icon, Button, Header } from "semantic-ui-react";
import { Link } from 'react-router-dom';
class List extends React.Component {

  render() {
    let { node, children, accounts } = this.props;
    console.log(this.props)
    return (
      <Container text>
        <Header as='h1' textAlign='center' dividing>{node.metadata.title}</Header>
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
                  <Item.Image src={child.metadata.image ? `assets/data/${child.metadata.image}` : 'assets/images/icon.png'} size='small'/>
                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <Link to={url}>{child.metadata.title}</Link>
                    </Item.Header>
                    <Item.Meta>
                      <span>{`By ${accounts[child.author_id].username}`}</span>
                    </Item.Meta>
                    <Item.Extra>
                      <Icon color='orange' name='comment outline' />{child.children.length} &nbsp;
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
