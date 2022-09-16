import React from 'react';
import { ITableBodyProps } from '@src/components/tableBody/ITableBodyProps';

const TableBody: React.FC<ITableBodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export default TableBody;
