import { h, Component } from 'preact';

class SkillItem extends Component {

  constructor (props) {
    super(props);
  }

  purchaseSkill (e) {
    this.props.onSkillPurchased(this.props.skill);
    e.stopPropagation();
  }

  render () {
    return <div className="skill-bar-item" onClick={(e) => this.props.clickable && this.purchaseSkill(e)}>
      <div className="skill-title">
      { this.props.basic ?
        <a className="skill-purchase" href="javascript:void(0)" onClick={this.purchaseSkill.bind(this)}>{this.props.skill.name}</a>:
        this.props.skill.name
      }</div>
      <p className="skill-description-tooltip">{this.props.skill.description}</p>
      { this.props.skill.multiplier ? <p>Increases {this.props.skill.team ? '' : 'company'} efficiency {this.props.skill.team ?  `of the ${this.props.skill.team} Team` : ''} by {this.props.skill.multiplier.multiplier * 100}%.</p> : <div /> }
      { this.props.basic ?
        <div /> :
        <div>Cost: {this.props.skill.cost} views</div>
      }
      { this.props.basic ?
        <div />:
        <a className="skill-purchase" href="javascript:void(0)" onClick={this.purchaseSkill.bind(this)}>Train skill</a>
      }
    </div>;
  }

}

export default SkillItem;
