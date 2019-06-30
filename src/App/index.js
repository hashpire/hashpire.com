import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Stylesheets/index.css';
import { Button } from 'semantic-ui-react';
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
import ResponsiveContainer from './Components/ResponsiveContainer';
import routesConfig from './Config/routesConfig';
import RouteWithSubRoutes from './Utils/RouteWithSubRoutes';
import { HashRouter as Router } from "react-router-dom";
import menuConfig from './Config/menuConfig';

class App extends React.Component {


  render() {
    // <MarkdownRenderer url={'/assets/test.md'}/><Button>Click Here</Button>
    return (
      <Router>
        <ResponsiveContainer menuConfig={menuConfig}>
          <div>
            {routesConfig.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </div>
        </ResponsiveContainer>
      </Router>
    );
  }
}

export default App;