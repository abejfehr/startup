import { h, Component } from 'preact';

import TeamTable from './TeamTable';

import TeamType from '../../teamtype';

class WorkersTable extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.teams) {
      var teams = Object.keys(this.props.teams).reduce(function (acc, cur, i) {
        if (!this.props.teams[cur].trigger) {
          return acc.concat(cur);
        }
        if (this.props.totalViews > this.props.teams[cur].trigger) {
          return acc.concat(cur);
        }
        return acc;
      }.bind(this), []).map(function (team) {
        return  <TeamTable
                  workers={this.props.teams[team].workers}
                  team={team}
                  cost={this.props.teams[team].getCost()}
                  onHire={this.props.onHire}
                  onFire={this.props.onFire} />;
      }.bind(this));
    }

    return  <div className="worker-table">
              <div>
                <h2>Employees</h2>
                { teams }
              </div>
            </div>;
  }

}

export default WorkersTable;
