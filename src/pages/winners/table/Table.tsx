import React from 'react';
import { ITableProps } from '@src/pages/winners/table/ITableProps';
import TableElement from '@src/components/table/Table';
import Head from '@src/pages/winners/table/head/Head';
import Body from '@src/pages/winners/table/body/Body';

const Table: React.FC<ITableProps> = ({ winnersInfo, winnersPage }) => {
  return (
    <TableElement>
      <Head />
      <Body {...{ winnersInfo, winnersPage }} />
    </TableElement>
  );
};

export default Table;
