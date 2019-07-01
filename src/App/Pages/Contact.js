import React from 'react';
import { Container, List, Header, Icon, Breadcrumb } from 'semantic-ui-react';
function Contact() {
  return (
    <Container>
      <Container text>
        <Header as='h1' dividing textAlign='center'>
          <Header.Content>ติดต่อเรา</Header.Content>
        </Header>
        <List>
          <List.Item>
            <List.Icon name='users' />
            <List.Content>Hashpire</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='marker' />
            <List.Content>0x90</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='mail' />
            <List.Content>
              <a href='mailto:support@hashpire.com'>support@hashpire.com</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='github' />
            <List.Content>
              <a href='https://github.com/hashpire'>github.com/hashpire</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='twitter' />
            <List.Content>
              <a href='https://twitter.com/hashpire'>twitter.com/hashpire</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='facebook' />
            <List.Content>
              <a href='https://facebook.com/hashpire'>facebook.com/hashpire</a>
            </List.Content>
          </List.Item>
        </List>
      </Container>
    </Container>
   
  );
}

export default Contact;