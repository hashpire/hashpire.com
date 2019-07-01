import React from 'react';
import NodeRenderer from '../Components/NodeRenderer';
import { Breadcrumb, Container, Grid } from 'semantic-ui-react';

class Home extends React.Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      // <Container>
          <Grid stackable centered>
            <Grid.Row>
              <Grid.Column width={8}>
                <NodeRenderer nodeId={1} />
              </Grid.Column>
              <Grid.Column width={3} verticalAlign='middle'>
                <a className="twitter-timeline" data-lang="th" data-width="400" data-height="500" data-theme="dark" href="https://twitter.com/anak0rn/lists/test?ref_src=twsrc%5Etfw">A Twitter List by anak0rn</a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      // </Container>
    )
  }
}

export default Home;