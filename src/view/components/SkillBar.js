import React from 'react';

import skills from '../../skills';
import SkillItem from './SkillItem';

class SkillBar extends React.Component {

  constructor (props) {
    super(props);
  }

  // TODO: Write this using a reduce function
  hasAllPrereqs (prereqs) {
    var passes = true;
    for (let prereq of prereqs) {
      passes = passes && this.props.skills.indexOf(prereq);
    }
    return passes;
  }

  render () {
    if (this.props.totalViews < 5) {
      return <div />;
    }

    var list = skills.reduce((acc, cur, i) => {
      if (
        ! this.props.skills.find(el => el == cur.id) && // Only show the skill if we have it
        this.props.totalViews >= cur.reveal && // and if we don't have the views to show it yet
        (!cur.team || (cur.team && this.props.teams[cur.team] && this.props.teams[cur.team].workers.length > 0)) && // Or if it's for a team and we don't have any members of that team yet
        (!cur.prerequisites || this.hasAllPrereqs(cur.prerequisites)) // And make sure the prerequisites are met
      ) {
        var item = <SkillItem skill={cur} key={i} onSkillPurchased={this.props.onSkillPurchased} />
        return acc.concat(item);
      } else {
        return acc;
      }
    }, []);

    return <div>
      <div className="skills-title">Skills</div>
      <div>
        {list.length ? list : "There are currently no skills available."}
      </div>
    </div>;
  }

}

export default SkillBar;
