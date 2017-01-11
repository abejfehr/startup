import { h, Component } from 'preact';

class About extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return  <div className="about-page">
              <a href="javascript:void(0)" onClick={this.props.goBack}>Go back</a>
              <h2>About this thing</h2>
              <p>Startup is a game that was developed by <a href="https://www.abefehr.com/">Abe Fehr</a> and <a href="javascript:void(0)" onClick={() => alert("He's shy and doesn't give out his info. Sorry!")}>Scott Andrechek</a></p>
            </div>;
  }
}

export default About;
