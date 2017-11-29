import React, { Component, PropTypes } from 'react';

const defaultStyle = {
  width: 300,
  marginLeft: 20
};


class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    return (
      <section className="main" style={defaultStyle}>
        Hello material
      </section>
    );
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;
