import { h, Component } from 'preact';

class SkillItem extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return <div className="skill-bar-item" onClick={() => this.props.onSkillPurchased(this.props.skill)}>
      <div className="skill-title">{this.props.skill.name}</div>
      <p className="skill-description-tooltip">{this.props.skill.description}</p>
      { this.props.skill.multiplier ? <p>Increases {this.props.skill.team ? '' : 'company'} efficiency {this.props.skill.team ?  `of the ${this.props.skill.team} Team` : ''} by {this.props.skill.multiplier * 100}%.</p> : <div /> }
      <div>Cost: {this.props.skill.cost} views</div>
      <a className="skill-purchase" href="javascript:void(0)" onClick={() => this.props.onSkillPurchased(this.props.skill)}>Train skill</a>
    </div>;
  }

}

export default SkillItem;
