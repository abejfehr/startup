import { h, Component } from 'preact';

class Basic extends Component {

  constructor (props) {
    super(props);

    this.state = {
      aboutShown: false,
    }
  }

  goBack (e) {
    if (!this.state.aboutShown) { return; }

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
    if (this.state.aboutShown) { return; }

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
              <div>
                <p>startup is a fun game made by <a href="https://www.abefehr.com/">Abe Fehr</a> and <a href="javascript:void(0)" onClick={() => alert("He's shy and doesn't give out his info. Sorry!")}>Scott Andrechek</a></p>
              </div> :
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
