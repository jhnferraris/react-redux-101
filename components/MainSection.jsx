import React, { Component, PropTypes } from 'react';
import CreateFaqForm from './CreateFaqForm';

class MainSection extends Component {
  render() {
    return (
      <CreateFaqForm/>
    );
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;
