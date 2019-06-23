import React from 'react';
import PropTypes from 'prop-types';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const ResponsiveContainer = ({ children, menuConfig }) => (
  <div>
    <DesktopContainer menuConfig={menuConfig}>{children}</DesktopContainer>
    <MobileContainer menuConfig={menuConfig}>{children}</MobileContainer>
  </div>
)

// ResponsiveContainer.propTypes = {
//   children: PropTypes.node,
// }

export default ResponsiveContainer;