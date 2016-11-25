import React from 'react';

class Master extends React.Component {

  constructor (props) {
    super(props);

    // Update the title to untitled for the early game
    document.title = "untitled";
  }

  shouldComponentUpdate (props, state) {
    return this.props.views !== props.views;
  }

  render () {
    // Only render if there are more than 0 views to avoid a flash of 0.
    if (this.props.views > 0) {
      return <p>This page has been viewed {this.props.views} time{this.props.views !== 1 ? 's' : ''}.</p>;
    } else {
      return <div />;
    }
  }

}

export default Master;
