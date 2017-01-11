import { h, Component } from 'preact';

class About extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return  <div className="about-page">
              <a href="javascript:void(0)" onClick={this.props.onGoBack}>&lt; Go back</a>
              <h1>About this thing</h1>
              <p>Startup is a game that was developed by <a href="https://www.abefehr.com/">Abe Fehr</a> and <a href="javascript:void(0)" onClick={() => alert("He's shy and doesn't give out his info. Sorry!")}>Scott Andrechek</a></p>
              <div className="footer">
                <hr />
                <p>
                  Copyright &copy; {(new Date()).getFullYear()} {this.props.title}. All Rights Reserved.
                </p>
              </div>
            </div>;
  }
}

export default About;
