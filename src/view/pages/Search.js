import { h, render, Component } from 'preact';

class Search extends Component {

  constructor (props) {
    super(props);

    this.state = {
      query: '',
      showResults: false,
    };
  }

  handleSearchChanged (e) {
    this.setState({
      query: e.target.value,
    });
  }

  handleSearch () {
    console.log("HI");
    this.setState({
      showResults: !!this.state.query,
    });
  }

  handleGoBack () {
    this.setState({
      showResults: false,
    });
  }

  render () {
    var results = [{
      title: "Startup with high chance of failure announced",
      url: "http://someurl.com/",
      description: "Recent startup announced with high chance of failure.",
    }, {
      title: "Startup with high chance of failure announced",
      url: "http://someurl.com/",
      description: "Recent startup announced with high chance of failure.",
    }, {
      title: "Startup with high chance of failure announced",
      url: "http://someurl.com/",
      description: "Recent startup announced with high chance of failure.",
    }].map(function (result) {
      return <div className="result">
        <div className="result-title">
          <a href="javascript:void(0)">{result.title}</a>
        </div>
        <div className="result-url">{result.url}</div>
        <div className="result-description">{result.description}</div>
      </div>
    }.bind(this));

    return  <div className="search-page">
              { this.state.showResults ?
                <div>
                  <div className="search-results-header">
                    <a href="javascript:void(0)" onClick={this.handleGoBack.bind(this)}>
                      <h2>
                        <span className="letter-1">S</span>
                        <span className="letter-2">t</span>
                        <span className="letter-3">a</span>
                        <span className="letter-4">r</span>
                        <span className="letter-5">t</span>
                        <span className="letter-6">u</span>
                        <span className="letter-7">p</span>
                      </h2>
                    </a>
                    <input onInput={this.handleSearchChanged.bind(this)} value={this.state.query} placeholder=" Enter your search query here" />
                    <button onClick={this.handleSearch.bind(this)}>Search again</button>
                  </div>
                  <div className="results">
                    <div className="did-you-mean">
                      <a href="javascript:void(0)">Did you mean <span>startup</span>?</a>
                    </div>
                    {results}
                  </div>
                </div> :
                <div className="main-search-page">
                  <h1>
                    <span className="letter-1">S</span>
                    <span className="letter-2">t</span>
                    <span className="letter-3">a</span>
                    <span className="letter-4">r</span>
                    <span className="letter-5">t</span>
                    <span className="letter-6">u</span>
                    <span className="letter-7">p</span>
                  </h1>
                  <input onInput={this.handleSearchChanged.bind(this)} value={this.state.query} placeholder="Enter your search query here" />
                  <br />
                  <button onClick={this.handleSearch.bind(this)}>Search</button>
                </div>
              }
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
