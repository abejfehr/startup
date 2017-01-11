import { h, Component } from 'preact';

import About from '../components/About';

class Basic extends Component {

  constructor (props) {
    super(props);

    this.state = {
      aboutShown: false,
    }
  }

  goBack (e) {
    var oldCursor = e.target.style.cursor;

    // Don't do this twice
    if (oldCursor == 'wait') { return; }

    document.body.style.cursor = 'wait';
    e.target.style.cursor = 'wait';


    setTimeout(
      () => {
        this.setState({
          aboutShown: false,
        });
        document.body.style.cursor = 'default';
        e.target.style.cursor = oldCursor;
      }, 500
    )
  }

  showAbout (e) {
    var oldCursor = e.target.style.cursor;

    // Don't do this twice
    if (oldCursor == 'wait') { return; }

    // Start "loading"
    document.body.style.cursor = 'wait';
    e.target.style.cursor = 'wait';

    setTimeout(
      () => {
        this.setState({
          aboutShown: true,
        });
        document.body.style.cursor = 'default';
        e.target.style.cursor = oldCursor;
      }, 500
    )
  }

  render () {
    if (this.state.aboutShown) {
      return <About title={ this.props.skills.find(el => el == "startup") ? 'Startup' : 'My Website' } onGoBack={this.goBack.bind(this)} />;
    }
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
            { this.props.skills.find(el => el == 'html2') && ! this.props.skills.find(el => el == 'about') ?
              <img src="assets/pikachu.gif" /> :
              <div />
            }
            {
              this.props.skills.find(el => el == 'about') ?
              <a href="javascript:void(0)" onClick={this.showAbout.bind(this)}>About</a> :
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
