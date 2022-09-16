import React from 'react';
import { ITableProps } from '@src/components/table/ITableProps';
import '@src/components/table/style.scss';

const TableElement: React.FC<ITableProps> = ({ children }) => {
  return <table className="table">{children}</table>;
};

export default TableElement;
