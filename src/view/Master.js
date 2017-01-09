import { h, render, Component } from 'preact';

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

    this.state = {
      showAcquire: false,
      showAcquired: false,
    }
  }

  componentWillUpdate () {
    if (!this.props.skills.find(el => el == 'acquired' || el == 'notacquired') && this.props.totalViews > 800) {
      this.setState({ showAcquired: true, acquiredShown: true });
    }
    if (this.props.totalViews > 1000 && !this.props.skills.find(el => el == 'acquired')) {
      this.setState({ showAcquire: true, acquireShown: true });
    }
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
            <Modal visible={this.state.showAcquired}>
              <h2>{"Congratulations!"}</h2>
              <p>{`You've done it, you've lived the new American dream. Your website is somehow so popular and innovative that search giant Boogle thought it would make an excellent addition to their portfolio of crazy projects.`}</p>
              <p>What would you like to do?</p>
              <div>
                <a href="javascript:void(0)" onClick={() => this.setState({ showAcquired: false }) && this.props.onSkillPurchased({ id: 'acquired', cost: 0 })}>Sell the company</a>
                <a href="javascript:void(0)" onClick={() => this.setState({ showAcquired: false }) && this.props.onSkillPurchased({ id: 'notacquired', cost: 0})}>Keep the company</a>
              </div>
            </Modal>
            <Modal visible={this.state.showAcquire}>
              <h2>{"You've acquired Boogle."}</h2>
              <p>Wow. Your company is SO big, that you acquired search giant Boogle. Your organization has offices all across the globe and now accounts for almost half of all internet activity. There is nothing left to do at this point, and no more room to grow. Great work.</p>
              <a href="javascript:void(0)" onClick={() => this.props.onReset()}>Do it all over again</a>
            </Modal>
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
                icon={this.props.skills.find(el => el == 'css1')}
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
