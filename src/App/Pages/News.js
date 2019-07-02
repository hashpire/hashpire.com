import React from 'react';
import NodeRenderer from '../Components/NodeRenderer';
import { Breadcrumb, Container, Grid, Menu, Loader } from 'semantic-ui-react';

class News extends React.Component {

  state = { activeItem: 'From Hashpire' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {

    const { activeItem } = this.state

    return (
      <Container text style={{padding: '20px'}}>
        <Menu attached='top' tabular>
          <Menu.Item name='From Hashpire' active={activeItem === 'From Hashpire'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Global'
            active={activeItem === 'Global'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <div className={`${activeItem === 'From Hashpire' ? '' : 'hidden'}`}> 
          <a className='twitter-timeline'  data-link-color="#E95F28" data-lang="th" data-width="100%" data-height="600" href="https://twitter.com/hashpire/lists/hashpire-news?ref_src=twsrc%5Etfw">
            A Twitter List by hashpire
            <Loader content='Loading' active inline='centered' size='small'/>
          </a>
        </div>
        <div className={`${activeItem === 'Global' ? '' : 'hidden'}`}>
          <a className='twitter-timeline' data-link-color="#E95F28" data-lang="th" data-width="100%" data-height="600" href="https://twitter.com/hashpire/lists/global?ref_src=twsrc%5Etfw">
            A Twitter List by hashpire
            <Loader content='Loading' active inline='centered' size='small'/>
          </a>
        </div>
        
          {/* <Grid stackable centered>
            <Grid.Row>
              <Grid.Column width={4} verticalAlign='middle'>
                <a className="twitter-timeline" data-link-color="#E95F28" data-lang="th" data-width="400" data-height="500" data-theme="dark" href="https://twitter.com/hashpire/lists/hashpire-news?ref_src=twsrc%5Etfw">A Twitter List by hashpire</a>
              </Grid.Column>
              <Grid.Column width={4} verticalAlign='middle'>
                <a className="twitter-timeline" data-link-color="#E95F28" data-lang="th" data-width="400" data-height="500" data-theme="dark" href="https://twitter.com/hashpire/lists/global?ref_src=twsrc%5Etfw">A Twitter List by hashpire</a>
              </Grid.Column>
            </Grid.Row>
          </Grid> */}
      </Container>
    )
  }
}

export default News;