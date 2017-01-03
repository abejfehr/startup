import React from 'react';

import TeamTypes from '../../teamtype';

class WorkersTable extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return <table>
      <thead>
        <tr>
          <th colSpan="3">Graphic Designers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="3">
            <a href="javascript:void()" onClick={() => this.props.onHire(TeamTypes.GRAPHIC_DESIGN)}>
              Hire New Graphic Designer
            </a>
          </td>
        </tr>
      </tbody>
    </table>;
  }

}

export default WorkersTable;
