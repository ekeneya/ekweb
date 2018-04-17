import React from 'react';

import Filtre from './listFiltre';

import ToolBar from './listToolbar';

import Table from './table';

export default class Index extends React.Component {

  render() {
    return (
      <div>
          <Filtre />
          <ToolBar />
          <Table />
      </div>
    )
  }

}