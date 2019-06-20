import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Stylesheets/index.css';
import MarkdownRenderer from '../Utils/MarkdownRenderer';
import { Button } from 'semantic-ui-react';
import FixedMenu from './Components/FixedMenu';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react';
class App extends React.Component {
  render() {
    // <MarkdownRenderer url={'/assets/test.md'}/><Button>Click Here</Button>
    return (
      <FixedMenu>
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Semantic UI React Fixed Template</Header>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>
            A text container is used for the main container, which is useful for single column layouts.
          </p>
          <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        </Container>
      </FixedMenu>
    );
  }
}

export default App;