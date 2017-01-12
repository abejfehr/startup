import { h, Component } from 'preact';

class WebPage extends Component {

  constructor (props) {
    super(props);
  }

  changePage (e, state, timeout) {
    var oldCursor = e.target.style.cursor;

    // Don't do this twice
    if (oldCursor == 'wait') { return; }

    document.body.style.cursor = 'wait';
    e.target.style.cursor = 'wait';

    setTimeout(
      () => {
        this.setState(state);
        document.body.style.cursor = 'default';
        e.target.style.cursor = oldCursor;
      }, timeout
    )
  }
}

export default WebPage;
