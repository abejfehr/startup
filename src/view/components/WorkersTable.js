import { h, Component } from 'preact';

import TeamTypes from '../../teamtype';

class WorkersTable extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    var workers = this.props.workers.map((worker) => {
      return <tr key={worker.name}>
        <td>{worker.name}</td>
        <td><a className="fire-worker" href="javascript:void(0)" onClick={() => this.props.onFire(TeamTypes.GRAPHIC_DESIGN, worker.id)}>
        { this.props.icon ?
          <span className="icon-exit"></span> :
          'fire'
        }
        </a></td>
      </tr>
    });

    return  <div className="worker-table">
              <div>
                <h2>Employees</h2>
                <div className="old-table-wrapper">
                  <table className="old-table">
                    <thead>
                      <tr>
                        <th colSpan="2">
                          Graphic Designers<br />
                          <div className="hire-worker">
                            <a
                              href="javascript:void(0)"
                              onClick={() => this.props.onHire(TeamTypes.GRAPHIC_DESIGN)}>
                              [Hire Employee]
                            </a> ({this.props.teams[TeamTypes.GRAPHIC_DESIGN].getCost()} views)
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {workers}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>;
  }

}

export default WorkersTable;
