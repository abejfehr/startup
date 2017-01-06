import React from 'react';

class SkillItem extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return <div>
      <div className="skill-title">{this.props.skill.name}</div>
      <p>{this.props.skill.description}</p>
      <div>Cost: {this.props.skill.cost} views</div>
      <a href="javascript:void(0)" onClick={() => this.props.onSkillPurchased(this.props.skill)}>Train skill</a>
    </div>;
  }

}

export default SkillItem;
