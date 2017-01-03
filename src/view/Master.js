import React from 'react';

import WorkersTable from './components/WorkersTable'

class Master extends React.Component {

  constructor (props) {
    super(props);

    // Update the title to untitled for the early game
    document.title = "Untitled";
  }

  shouldComponentUpdate (props, state) {
    return this.props.views !== props.views;
  }

  render () {
    return <div>
    { this.props.views > 0 ?
      <p>
        This page has been viewed {this.props.views} time{this.props.views !== 1 ? 's' : ''}.
      </p> :
      <div />
    }
    { this.props.views >= 5 ?
      <WorkersTable workers={this.props.workers} onHire={this.props.onHire} /> :
      <div />
    }
    </div>
  }

}

export default Master;
