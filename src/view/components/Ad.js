import { h, Component } from 'preact';

class Ad extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return  <div className="ad">
              <div>Advertisement</div>
              <iframe src="ad.html"></iframe>
            </div>;
  }
}

export default Ad;
