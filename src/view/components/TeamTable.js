import { h, Component } from 'preact';

class TeamTable extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    var workers = this.props.workers.map((worker) => {
      return <tr key={worker.name}>
        <td>{worker.name}</td>
        <td><a className="fire-worker" href="javascript:void(0)" onClick={() => this.props.onFire(this.props.team, worker.id)}>
        { this.props.icon ?
          <span className="icon-exit"></span> :
          'fire'
        }
        </a></td>
      </tr>
    });

    return  <div className="old-table-wrapper">
              <table className="old-table">
                <thead>
                  <tr>
                    <th colSpan="2">
                      {this.props.team}
                      <br />
                      <div className="hire-worker">
                        <a
                          href="javascript:void(0)"
                          onClick={() => this.props.onHire(this.props.team)}>
                          [Hire Employee]
                        </a>
                        <br />
                        (Cost: {this.props.cost} views)
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {workers}
                </tbody>
              </table>
            </div>;
  }

}

export default TeamTable;
