import React from 'react';

import AdSense from 'react-adsense';

import SkillBar from './components/SkillBar';
import WorkersTable from './components/WorkersTable';

class Master extends React.Component {

  constructor (props) {
    super(props);
  }

  componentWillUpdate () {
    if (this.props.skills.find(el => el == 'monetize') && ! this.adInitialized) {
  //     // Add the Google AdSense script
  //     var google = document.createElement('script');
  //     google.setAttribute('src', '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
  //     google.setAttribute('async', true);
  //     document.head.appendChild(google);
  //
      // Run the script that Google has in their snippet
      (window.adsbygoogle = window.adsbygoogle || []).push({});
  //
      // Note that we already ran the script, so no need to run it again
      this.adInitialized = true;
    }
  }

  render () {
    return <div className={"website " + this.props.skills.join(' ')}>
            { this.props.skills.find(el => el == 'html2') ?
              <div className="header">
                <h1 className="headline">{ this.props.skills.find(el => el == "startup") ? 'Startup' : 'My Website' }</h1>
                <p className="tagline">{ this.props.skills.find(el => el == "startup") ? 'Serious business' : 'My personal page' }</p>
                <hr />
              </div> :
              <div />
            }
            { this.props.totalViews > 0 ?
              <p>
                This page has been viewed {this.props.views} time{this.props.views !== 1 ? 's' : ''}.
              </p> :
              <div />
            }
            { this.props.skills.find(el => el == 'html2') && ! this.props.skills.find(el => el == 'startup') ?
              <img src="assets/pikachu.gif" /> :
              <div />
            }
            { this.props.skills.find(el => el == 'startup') ?
              <WorkersTable
                workers={this.props.workers}
                teams={this.props.teams}
                onHire={this.props.onHire} /> :
              <div />
            }
            <SkillBar
              totalViews={this.props.totalViews}
              views={this.props.views}
              teams={this.props.teams}
              skills={this.props.skills}
              onSkillPurchased={this.props.onSkillPurchased} />
            { this.props.skills.find(el => el == 'html2') ?
              <div className="footer">
                <hr />
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
                  // <AdSense.Google
                  //   client="ca-pub-4885767461778395"
                  //   slot="4261754677"
                  //   style={{ display: 'inline-block', width: '728px', height: '90px' }}
                  //   format="" /> :
                  <div />}
              </div> :
              <div />
            }
            </div>
  }

}

export default Master;
