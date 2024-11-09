import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Grid = ({ data, columnDefs }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
};

export default Grid;