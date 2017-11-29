import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

class Header extends Component {
  render() {
    return (
      <header className="header">
          <AppBar title="React + Redux + Material UI Boilerplate" />
      </header>
    );
  }
}

Header.propTypes = {
};

export default Header;
