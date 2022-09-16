import React from 'react';
import { ITableRowProps } from '@src/components/tableRow/ITableRowProps';
import '@src/components/tableRow/style.scss';

const TableRow: React.FC<ITableRowProps> = ({ id, children }) => {
  return <tr id={id}>{children}</tr>;
};

export default TableRow;
