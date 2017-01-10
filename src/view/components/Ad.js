import { h, Component } from 'preact';

class Ad extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return  <iframe src="ad.html" style="border: none; width: 728px; height: 90px;"></iframe>;
  }
}

export default Ad;
