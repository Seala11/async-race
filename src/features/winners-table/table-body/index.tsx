import React from 'react';
import { IWinnerInfo, WinnersValues } from '@src/shared/api/winners';
import '@src/features/winners-table/table-body/style.scss';
import Image from '@src/shared/components/image';

type Props = {
  winnersPage: number;
  winnersCars: IWinnerInfo[];
};

const Body = (props: Props) => {
  const { winnersCars, winnersPage } = props;
  const dosens = (winnersPage - 1) * WinnersValues.PAGE_LIMIT;

  return (
    <tbody>
      {winnersCars.map((winner, index) => (
        <tr className="table__row" key={winner.id} id={winner.id.toString()}>
          <td className="table__data">{index + 1 + dosens}</td>
          <td className="table__data">
            <Image color={winner.color} classes="track__img--table" />
          </td>
          <td className="table__data">{winner.name}</td>
          <td className="table__data">{winner.wins}</td>
          <td className="table__data">{winner.time}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
