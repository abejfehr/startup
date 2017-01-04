import React from 'react';

import WorkersTable from './components/WorkersTable'

class Master extends React.Component {

  constructor (props) {
    super(props);

    // Update the title to untitled for the early game
    document.title = "Untitled";
  }

  render () {
    return <div>
    { this.props.totalViews > 0 ?
      <p>
        This page has been viewed {this.props.views} time{this.props.views !== 1 ? 's' : ''}.
      </p> :
      <div />
    }
    { this.props.totalViews >= 5 ?
      <WorkersTable workers={this.props.workers} teams={this.props.teams} onHire={this.props.onHire} /> :
      <div />
    }
    </div>
  }

}

export default Master;
