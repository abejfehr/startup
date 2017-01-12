import { h } from 'preact';

import About from '../components/About';
import WebPage from '../components/WebPage';

class Basic extends WebPage {

  constructor (props) {
    super(props);

    this.state = {
      aboutShown: false,
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
            { this.props.skills.find(el => el == 'html2') ?
              <div className="header">
                <h1 className="headline">{this.state.aboutShown ? 'About Startup' : 'My Website'}</h1>
                { this.props.skills.find(el => el == 'about') ?
                  <div>
                    <a href="javascript:void(0)" onClick={this.goBack.bind(this)}>Home</a> <a href="javascript:void(0)" onClick={this.showAbout.bind(this)}>About</a>
                  </div> :
                  <div />
                }
                <hr />
              </div> :
              <div />
            }
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
              { this.props.skills.find(el => el == 'html2') && ! this.props.skills.find(el => el == 'about') ?
                <img src="assets/pikachu.gif" /> :
                <div />
              }
              </div>
            }
            { this.props.skills.find(el => el == 'html2') ?
              <div className="footer">
                <hr />
                <p>
                  Copyright &copy; {(new Date()).getFullYear()} My Website. All Rights Reserved.
                </p>
                <a href="javascript:void(0)" onClick={() => this.props.onReset()}>
                  Reset
                </a>
              </div> :
              <div />
            }
            </div>
  }

}

export default Basic;
