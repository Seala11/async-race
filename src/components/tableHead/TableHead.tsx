import React from 'react';
import { ITableHeadProps } from '@src/components/tableHead/ITableHeadProps';
import '@src/components/tableHead/style.scss';

const TableHead: React.FC<ITableHeadProps> = ({ children }) => {
  return <thead className="table__head">{children}</thead>;
};

export default TableHead;
