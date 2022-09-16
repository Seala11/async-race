import React from 'react';
import { ITableHeaderProps } from '@src/components/tableHeader/ITableHeaderProps';
import '@src/components/tableHeader/style.scss';

const TableHeader: React.FC<ITableHeaderProps> = ({ text, handler, classes = '' }) => {
  return (
    <th onClick={handler} className={`table__header ${classes}`}>
      {text}
    </th>
  );
};

export default TableHeader;
