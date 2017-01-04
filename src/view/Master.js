import React from 'react';

import WorkersTable from './components/WorkersTable'

class Master extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    var classNames = this.props.workers.length >= 1 ? 'css1' : '';

    return <div className={"website " + classNames}>
            { this.props.totalViews >= 100 ?
              <div className="header">
                <h1 className="headline">Your Startup</h1>
                <p className="tagline">An amazing website</p>
                <hr />
              </div> :
              <div />
            }
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
            { this.props.totalViews >= 100 ?
              <div className="footer">
                <hr />
                <p>Copyright &copy; {(new Date()).getFullYear()} Your Startup. All Rights Reserved</p>
              </div> :
              <div />
            }
            </div>
  }

}

export default Master;
