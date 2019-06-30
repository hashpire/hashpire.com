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
import { Route } from "react-router-dom";
import { matchPath } from "react-router";


const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { }
    this.onChangeMenu = this.onChangeMenu.bind(this);
  }

  onChangeMenu(history, item) {
    history.push(item.path); 
  }

  render() {
    const { children, menuConfig } = this.props

    return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <div id='page'>
            <div>
              <Menu fixed='top' inverted id='navbar'>
                <Container>
                  <Menu.Item as='a' header>
                    <Image size='small' src='assets/images/logo.png' />
                  </Menu.Item>
                  <Route render={({ history, location}) => {
                    return menuConfig.map((item, i)=> {
                      let active = matchPath(location.pathname, 
                        {
                          path: item.path,
                          exact: true,
                          strict: false
                        }
                      )
                      
                      if(item.sub) {
                        return (
                          <Dropdown item simple text={item.name}>
                            <Dropdown.Menu>
                              { item.sub.map((child) => {
                                return (
                                  <Dropdown.Item>{child.name}</Dropdown.Item>
                                );
                              })

                              }
                            </Dropdown.Menu>
                          </Dropdown>
                        );
                      } else {
                        return (
                          <Menu.Item key={i} active={active ? true : false} as='a' onClick={ () => this.onChangeMenu(history, item)}>
                            {item.name}
                          </Menu.Item>
                        );
                      }

                    })
                  }}/>

                </Container>
              </Menu>
              <div style={{ marginTop: '9em' }}>
                {children}
              </div>
            </div>  
            <Footer menuConfig={menuConfig}/>
          </div>
        </Responsive>
    )
  }
}

// DesktopContainer.propTypes = {
//   children: PropTypes.node,
// }

export default DesktopContainer;