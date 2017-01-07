import React from 'react';

import Modal from 'react-modal';

import SkillBar from './components/SkillBar';
import WorkersTable from './components/WorkersTable';

class Master extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      showModal: false,
      shown: !this.props.skills.find(el => el == 'video' || el == 'social'),
    };
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentWillUpdate () {
    if (!this.state.shown && this.props.totalViews > 1000) {
      this.setState({ showModal: true, shown: true });
    }
  }

  render () {
    return <div className={"website " + this.props.skills.join(' ')}>
            <Modal
              style={{
                content: {
                  position: 'absolute',
                  top: '150px',
                  left: '150px',
                  right: '150px',
                  bottom: '150px',
                }
              }}
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example">
              <p>Inspirational message goes here.</p>
              <div className="site-options">
                <div className="site-option">
                  <h2>Video Site</h2>
                  <a href="javascript:void(0)" onClick={() => this.setState({ showModal: false }, () => this.props.onChoice('video'))}>Do this</a>
                </div>
                <div className="site-option">
                  <h2>Social Media Site</h2>
                  <a href="javascript:void(0)" onClick={() => this.setState({ showModal: false }, () => this.props.onChoice('social'))}>Do this</a>
                </div>
              </div>
            </Modal>
            <SkillBar
              totalViews={this.props.totalViews}
              views={this.props.views}
              teams={this.props.teams}
              skills={this.props.skills}
              onSkillPurchased={this.props.onSkillPurchased} />
            <div className="container">
              { this.props.skills.find(el => el == 'html2') ?
                <div className="header">
                  <h1 className="headline">{ this.props.skills.find(el => el == "startup") ? 'Startup' : 'My Website' }</h1>
                  <p className="tagline">{ this.props.skills.find(el => el == "startup") ? 'Serious business' : 'My personal page' }</p>
                  <hr />
                </div> :
                <div />
              }
              { this.props.totalViews > 0 ?
                <div>
                  <p>
                    This page has been viewed {this.props.views} time{this.props.views !== 1 ? 's' : ''}.
                  </p>
                  { this.props.viewsPerSecond > 0 ?
                    <p>
                      You are earning {this.props.viewsPerSecond.toFixed(1)} view{this.props.viewsPerSecond !== 1 ? 's' : ''} per second.
                    </p> :
                    <div />
                  }
                </div> :
                <div />
              }
              { this.props.skills.find(el => el == 'html2') && ! this.props.skills.find(el => el == 'startup') ?
                <img src="assets/pikachu.gif" /> :
                <div />
              }
              { this.props.skills.find(el => el == 'html2') ?
                <div className="footer">
                  <hr />
                  <p>
                    Copyright &copy; {(new Date()).getFullYear()} { this.props.skills.find(el => el == "startup") ? 'Startup' : 'My Website' }. All Rights Reserved. <a href="javascript:void(0)" onClick={() => this.props.onReset()}>
                      Reset
                    </a>
                  </p>
                  { this.props.skills.find(el => el == 'monetize') ?
                    <div style={{
                      display: 'inline-block',
                      width: '728px',
                      height: '90px',
                      border: '1px solid black',
                      backgroundColor: '#aaa'
                    }} /> :
                    <div />}
                </div> :
                <div />
              }
              </div>
              { this.props.skills.find(el => el == 'startup') ?
                <WorkersTable
                  workers={this.props.workers}
                  teams={this.props.teams}
                  onHire={this.props.onHire} /> :
                <div />
              }
            </div>
  }

}

export default Master;
