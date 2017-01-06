import React from 'react';

import SkillBar from './components/SkillBar';
import WorkersTable from './components/WorkersTable';

class Master extends React.Component {

  constructor (props) {
    super(props);

    this.adInitialized = false;
  }

  componentWillUpdate (nextProps, nextState) {
    if (this.props.totalViews >= 100 && ! this.adInitialized) {
      // Add the Google AdSense script
      var google = document.createElement('script');
      google.setAttribute('src', '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
      google.setAttribute('async', true);
      document.head.appendChild(google);

      // Run the script that Google has in their snippet
      (window.adsbygoogle = window.adsbygoogle || []).push({});

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
                <ins className="adsbygoogle"
                     style={{ display: 'inline-block', width: '728px', height: '90px' }}
                     data-ad-client="ca-pub-4885767461778395"
                     data-ad-slot="4261754677"></ins>
              </div> :
              <div />
            }
            </div>
  }

}

export default Master;
