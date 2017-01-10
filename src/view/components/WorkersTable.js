import { h, Component } from 'preact';

import TeamTable from './TeamTable';

import TeamType from '../../teamtype';

class WorkersTable extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.teams) {
      var teams = Object.keys(this.props.teams).map(function (team) {
        return  <TeamTable
                  workers={this.props.teams[team].workers}
                  team={team}
                  cost={this.props.teams[team].getCost()} />;
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
