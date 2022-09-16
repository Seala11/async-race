import React from 'react';
import { ITableDataProps } from '@src/components/tableData/ITableDataProps';
import '@src/components/tableData/style.scss';

const TableData: React.FC<ITableDataProps> = ({ text, children }) => {
  return (
    <td className="table__data">
      {text}
      {children}
    </td>
  );
};

export default TableData;
