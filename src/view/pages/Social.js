import { h, Component } from 'preact';

class Social extends Component {

  constructor (props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      newsFeed: false,
    }
  }

  handleLogin () {
    if (!username || !password) {
      alert('You must put in your username and password.');
    } else {
      this.setState({
        newsFeed: true,
      });
    }
  }

  render () {
    return  <div className="social-page">
              <div className="header">
                <div>
                  <h1 className="headline">StartUp</h1>
                  <p className="tagline">A place for people...and cats.</p>
                </div>
              </div>
              <div className="social-page-content-container">
                <div className="left-side">
                  <h2>Share cat pictures and spy on people.</h2>
                  <h3>Join your friends today.</h3>
                  <p>This is just a bunch of BS about social networks that you can read. We want you to join today so you can sell us your data and feel obligated to keep in touch with people you hate.</p>
                  <br />
                  <p>
                    Our social network has {this.props.views} member{this.props.views !== 1 ? 's' : ''}, and is growing by {this.props.viewsPerSecond.toFixed(1)} member{this.props.viewsPerSecond !== 1 ? 's' : ''} each second!
                  </p>
                  <span className="icon-globe"></span>
                </div>
                <div className="right-side">
                  <h3>Sign In</h3>
                  <input onInput={(e) => this.setState({ username: e.target.value })} value={this.state.username} placeholder="Username" />
                  <br />
                  <input onInput={(e) => this.setState({ password: e.target.value })} value={this.state.password} placeholder="Password" type="password" />
                  <br />
                  <button onClick={this.handleLogin.bind(this)}>Login</button>
                  <a href="javascript:void(0)">Forgot your password?</a>
                </div>
              </div>
              <div className="footer">
                { this.props.skills.find(el => el == 'monetize') ?
                  <div style={{
                    display: 'inline-block',
                    width: '728px',
                    height: '90px',
                    border: '1px solid black',
                    backgroundColor: '#aaa'
                  }} /> :
                  <div />
                }
                <p>
                  Copyright &copy; {(new Date()).getFullYear()} StartUp. All Rights Reserved. <a href="javascript:void(0)" onClick={() => this.props.onReset()}>
                    Reset
                  </a>
                </p>
              </div>
            </div>
  }

}

export default Social;
