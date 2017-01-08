import { h, Component } from 'preact';

class Search extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return  <div className="search-page">
              <div>
                <h1>
                  <span className="letter-1">S</span>
                  <span className="letter-2">t</span>
                  <span className="letter-3">a</span>
                  <span className="letter-4">r</span>
                  <span className="letter-5">t</span>
                  <span className="letter-6">u</span>
                  <span className="letter-7">p</span>
                </h1>
                <input placeholder=" Enter your search query here" />
                <br />
                <button>Search</button>
              </div>
              <div className="footer">
                <p>
                  {this.props.views} search{this.props.views !== 1 ? 'es' : ''} made, with {this.props.viewsPerSecond.toFixed(1)} search{this.props.viewsPerSecond !== 1 ? 'es' : ''} per second.
                </p>
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
              </div>
              <div />
            </div>
  }

}

export default Search;
