import React from 'react';

import TeamTypes from '../../teamtype';

class WorkersTable extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    var workers = this.props.workers.map((worker) => {
      return <tr key={worker.name}>
        <td>{worker.name}</td>
        <td><a href="javascript:void(0)">fire</a></td>
      </tr>
    });

    return <table className="old-table">
      <thead>
        <tr>
          <th colSpan="2">Graphic Designers</th>
        </tr>
      </thead>
      <tbody>
        {workers}
        <tr>
          <td colSpan="2">
            <a href="javascript:void(0)" onClick={() => this.props.onHire(TeamTypes.GRAPHIC_DESIGN)}>
              Hire New Graphic Designer ({this.props.teams[TeamTypes.GRAPHIC_DESIGN].getCost()} views)
            </a>
          </td>
        </tr>
      </tbody>
    </table>;
  }

}

export default WorkersTable;
