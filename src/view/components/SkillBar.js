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

    var props = this.props;
    var hasAllPrereqs = (prereqs) => {
      var passes = true;
      for (let prereq of prereqs) {
        passes = passes && (this.props.skills.indexOf(prereq) > -1);
      }
      return passes;
    }

    var list = skills.reduce((acc, cur, i) => {
      if (
        ! props.skills.find(el => el == cur.id) && // Only show the skill if we have it
        props.totalViews >= cur.trigger && // and if we don't have the views to show it yet
        (!cur.team || (cur.team && props.teams[cur.team] && props.teams[cur.team].workers.length > 0)) && // Or if it's for a team and we don't have any members of that team yet
        (!cur.prerequisites || hasAllPrereqs(cur.prerequisites)) // And make sure the prerequisites are met
      ) {
        var item = <SkillItem skill={cur} key={i} onSkillPurchased={this.props.onSkillPurchased} />
        return acc.concat(item);
      } else {
        return acc;
      }
    }, []);

    return <div className="skill-bar">
      <h2 className="skills-title">Skills</h2>
      <div>
        {list.length ? list : "There are currently no skills available."}
      </div>
    </div>;
  }

}

export default SkillBar;
