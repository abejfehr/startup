import { h, Component } from 'preact';

class Basic extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return  <div>
            { this.props.skills.find(el => el == 'html2') ?
              <div className="header">
                <h1 className="headline">{ this.props.skills.find(el => el == "startup") ? 'Startup' : 'My Website' }</h1>
                <p className="tagline">{ this.props.skills.find(el => el == "startup") ? 'A serious business.' : 'My personal page' }</p>
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
                  Copyright &copy; {(new Date()).getFullYear()} { this.props.skills.find(el => el == "startup") ? 'Startup' : 'My Website' }. All Rights Reserved.
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
