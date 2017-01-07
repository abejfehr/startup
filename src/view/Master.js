import { h, Component } from 'preact';

import SkillBar from './components/SkillBar';
import WorkersTable from './components/WorkersTable';
import Modal from './components/Modal';

import Basic from './pages/Basic';
import Search from './pages/Search';
import Social from './pages/Social';
import Startup from './pages/Startup';

class Master extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    var Page = Basic;
    if (this.props.skills.indexOf('social') > -1) {
      Page = Social;
    } else if (this.props.skills.indexOf('search') > -1) {
      Page = Search;
    } else if (this.props.skills.indexOf('startup') > -1) {
      Page = Startup;
    }

    return <div className={"website " + this.props.skills.join(' ')}>
            <SkillBar
              totalViews={this.props.totalViews}
              views={this.props.views}
              teams={this.props.teams}
              skills={this.props.skills}
              onSkillPurchased={this.props.onSkillPurchased} />
            <div className="container">
              <Page {...this.props} />
            </div>
            { this.props.skills.find(el => el == 'startup') ?
              <WorkersTable
                workers={this.props.workers}
                teams={this.props.teams}
                onHire={this.props.onHire}
                onFire={this.props.onFire} /> :
              <div />
            }
            </div>
  }

}

export default Master;
