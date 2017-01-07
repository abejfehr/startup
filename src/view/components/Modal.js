import { h, Component } from 'preact';

class Modal extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.visible) {
      return  <div className="backdrop">
                <div className="modal">
                  { this.props.children }
                </div>
              </div>
    } else {
      return <div />
    }
  }

}

export default Modal;
