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

  handleLogin (e) {
    if (!this.state.username || !this.state.password) {
      alert('You must put in your username and password.');
      return;
    }

    var oldCursor = e.target.style.cursor;

    // Don't do this twice
    if (oldCursor == 'wait') { return; }

    // Start "loading"
    document.body.style.cursor = 'wait';
    e.target.style.cursor = 'wait';

    setTimeout(
      () => {
        this.setState({
          newsFeed: true,
        });
        document.body.style.cursor = 'default';
        e.target.style.cursor = oldCursor;
      }, this.props.skills.find(el => el == 'php') ? 300 : 500
    )
  }

  handleLogout (e) {
    var oldCursor = e.target.style.cursor;

    // Don't do this twice
    if (oldCursor == 'wait') { return; }

    // Start "loading"
    document.body.style.cursor = 'wait';
    e.target.style.cursor = 'wait';

    setTimeout(
      () => {
        this.setState({
          newsFeed: false,
          password: '',
        });
        document.body.style.cursor = 'default';
        e.target.style.cursor = oldCursor;
      }, this.props.skills.find(el => el == 'php') ? 300 : 500
    )
  }

  render () {
    var newsFeedItems = [
      {
        poster: 'Jane Doe',
        post: `this new startup thing is terrible, I can't believe I was obligated to get it.`,
      },
      {
        poster: 'Steve Mortenson',
        post: `Just got a new job at the post office! So excited. Can't believe the old guy left such a stable job, he must be crazy..`,
      },
      {
        poster: 'Tim Jefferson',
        post: `Day 1 of my new diet where all I eat is woodchips. It's all natural and one of the healthiest things a person can do for themselves!`,
      },
      {
        poster: 'Peter Frankson',
        post: `Does anyone use startup anymore? I feel like Bookface is better.`,
      },
    ].map(function (item) {
      return  <div className="post">
                <div>
                  <div className="avatar">
                    <img src={`https://api.adorable.io/avatars/80/${item.poster.split(' ').join()}%40adorable.io`} />
                  </div>
                </div>
                <div>
                  <div className="name">{item.poster}</div>
                  <div>{item.post}</div>
                </div>
              </div>
    }.bind(this));

    return  <div className="social-page">
              <div className="header">
                <div>
                  <h1 className="headline">StartUp</h1>
                  <p className="tagline">
                    { this.state.newsFeed ?
                      `Now ${this.props.views} member${this.props.views !== 1 ? 's' : ''}, with ${this.props.viewsPerSecond.toFixed(1)} new member${this.props.viewsPerSecond !== 1 ? 's' : ''} each second` :
                      'A place for people...and cats.'
                    }
                  </p>
                </div>
                { this.state.newsFeed ?
                  <div>
                    <a className="logout-link" href="javascript:void(0)" onClick={this.handleLogout.bind(this)}>
                      <span className="icon-exit"></span>
                      Log Out
                    </a>
                  </div> :
                  <div />
                }
              </div>
              { this.state.newsFeed ?
                <div className="social-page-feed-container">
                  <div className="left-side">
                    <div className="avatar">
                      <img src={`http://www.avatarpro.biz/avatar/${this.state.username.split(' ').join()}?s=160`} />
                    </div>
                    <div className="username">{this.state.username}</div>
                  </div>
                  <div className="right-side">
                    <h3>News Feed</h3>
                    <div className="posts">{ newsFeedItems }</div>
                  </div>
                </div> :
                <div className="social-page-home-container">
                  <div className="left-side">
                    <h2>Share cat pictures and spy on people.</h2>
                    <h3>It's free, and never won't be.</h3>
                    <p>We want to connect the world and make it a better place, so we built a website where you can upload the most intimate photos of yourself and communicate with strangers.</p>
                    <h3>Join your friends today.</h3>
                    <p>What are you waiting for? All your friends want to share their amazing baby pictures with you and write posts that are cryptic so you can ask them for more information.</p>
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
              }
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
