import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class MobileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChangeMenu = this.onChangeMenu.bind(this);
  }

  onChangeMenu(history, item, i) {
    this.setState({active: i})
    history.push(item.path); 
    this.handleSidebarHide();
  }

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children, menuConfig } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='overlay'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          width='thin'
          size='huge'
        >
          { 
            menuConfig && menuConfig.map((item, i)=>{
              return (
                <Route key={i} render={({ history}) => (
                  <Menu.Item  active={this.state.active == i} as='a' onClick={ () => this.onChangeMenu(history, item, i)}>
                    {item.name}
                  </Menu.Item>
                )} />
              )
            })
          }
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened} onClick={()=> sidebarOpened && this.handleSidebarHide()}>
          <Segment
            inverted
            textAlign='center'
            vertical
            id='navbar'
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle} id='mobile-left-menu'>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item onClick={this.handleToggle}>
                  <Image size='mini' src='assets/images/icon.png' />
                </Menu.Item>
                <Menu.Item position='right' id='mobile-right-menu'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          <div style={{ marginTop: '2em' }}>
            {children}
          </div>
          <Footer/>
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

export default MobileContainer;