import React from 'react';
import Image from '@src/components/image/Image';
import { IBodyProps } from '@src/pages/winners/table/body/IBodyProps';
import TableBody from '@src/components/tableBody/TableBody';
import TableRow from '@src/components/tableRow/TableRow';
import TableData from '@src/components/tableData/TableData';
import { WinnersPageLimit } from '@src/requests/InterfaceAPI';

const Body: React.FC<IBodyProps> = ({ winnersInfo, winnersPage }) => {
  const dosens = (winnersPage - 1) * WinnersPageLimit.value;
  return (
    <TableBody>
      {winnersInfo.map((winner, index) => (
        <TableRow key={winner.id} id={winner.id.toString()}>
          <TableData text={`${index + 1 + dosens}`} />
          <TableData>
            <Image color={winner.color} classes="track__img--table" />
          </TableData>
          <TableData text={winner.name} />
          <TableData text={`${winner.wins}`} />
          <TableData text={`${winner.time}`} />
        </TableRow>
      ))}
    </TableBody>
  );
};

export default Body;
