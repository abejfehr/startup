import { h, render, Component } from 'preact';

import About from '../components/About';
import Modal from '../components/Modal';
import Ad from '../components/Ad';
import WebPage from '../components/WebPage'

class Startup extends WebPage {

  constructor (props) {
    super(props);

    this.state = {
      showModal: false,
      aboutShown: false,
    };
  }

  componentWillUpdate () {
    if (!this.props.skills.find(el => el == 'search' || el == 'social') && this.props.totalViews > 80000) {
      this.setState({ showModal: true });
    }
  }

  goBack (e) {
    if (!this.state.aboutShown) { return; }

    this.changePage(e, { aboutShown: false }, 500);
  }

  showAbout (e) {
    if (this.state.aboutShown) { return; }

    this.changePage(e, { aboutShown: true }, 500);
  }

  render () {
    return  <div>
              <Modal visible={this.state.showModal}>
                <h2>Make a choice.</h2>
                <p>{`Congratulations! You've grown your startup to a sizeable company. It's time for you to make a choice about how you'd like to proceed.`}</p>
                <br />
                <p>What kind of company would you like to become?</p>
                <div className="site-options">
                  <a onClick={() => this.props.onChoice('social')} className="site-option">
                    <span class="icon-social"></span>
                    <h3>Social Media</h3>
                  </a>
                  <a onClick={() => this.props.onChoice('search')} className="site-option">
                    <span class="icon-search"></span>
                    <h3>Search</h3>
                  </a>
                </div>
              </Modal>
              <div className="header">
                <h1 className="headline">{this.state.aboutShown ? 'About Startup' : 'Startup'}</h1>
                <p className="tagline">A serious business.</p>
                <div className="menu">
                  <a href="javascript:void(0)" onClick={this.goBack.bind(this)}>Home</a> <a href="javascript:void(0)" onClick={this.showAbout.bind(this)}>About</a>
                </div>
                <hr />
              </div>
              { this.state.aboutShown ?
                <About /> :
                <div>
                { this.props.totalViews > 0 ?
                  <div>
                    <p>
                      This page has been viewed {this.props.views} time{this.props.views !== 1 ? 's' : ''}.
                    </p>
                    { this.props.viewsPerSecond > 0 ?
                      <p>
                        You are earning {this.props.viewsPerSecond.toFixed(2)} view{this.props.viewsPerSecond !== 1 ? 's' : ''} per second.
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
                      <Ad /> :
                      <div />}
                  </div> :
                  <div />
                }
                </div>
              }
            </div>
  }

}

export default Startup;
