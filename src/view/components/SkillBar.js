import React from 'react';

import skills from '../../skills';
import SkillItem from './SkillItem';

class SkillBar extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {

    if (this.props.totalViews < 5) {
      return <div />;
    }

    var list = skills.reduce((acc, cur, i) => {
      if (
        ! this.props.skills.find(el => el == cur.id) && // Don't show the skill if we have it
        this.props.totalViews >= cur.reveal && // Or if we don't have the views to show it yet
        (cur.team && this.props.teams[cur.team].workers.length > 0)) { // Or if it's for a team and we don't have any members of that team yet
        var item = <SkillItem skill={cur} key={i} onSkillPurchased={this.props.onSkillPurchased} />
        return acc.concat(item);
      } else {
        return acc;
      }
    }, []);

    return <div>
      <div className="skills-title">Skills</div>
      <div>
        {list}
      </div>
    </div>;
  }

}

export default SkillBar;
