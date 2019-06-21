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
  Dropdown
} from 'semantic-ui-react';
import Footer from './Footer';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends Component {

  render() {
    const { children } = this.props

    return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <div id='page'>
            <div>
              <Menu fixed='top' inverted id='navbar'>
                <Container>
                  <Menu.Item as='a' header>
                    <Image size='small' src='assets/images/logo.png' />
                  </Menu.Item>
                  <Menu.Item as='a'>Home</Menu.Item>

                  <Dropdown item simple text='Dropdown'>
                    <Dropdown.Menu>
                      <Dropdown.Item>List Item</Dropdown.Item>
                      <Dropdown.Item>List Item</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Header Item</Dropdown.Header>
                      <Dropdown.Item>
                        <i className='dropdown icon' />
                        <span className='text'>Submenu</span>
                        <Dropdown.Menu>
                          <Dropdown.Item>List Item</Dropdown.Item>
                          <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown.Item>
                      <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Container>
              </Menu>
              <div style={{ marginTop: '9em' }}>
                {children}
              </div>
            </div>  
            <Footer/>
          </div>
        </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer;