import React from 'react';

type Props = {
  winnersNumber: number;
  winnersPage: number;
};

const WinnersCounter = (props: Props) => {
  const { winnersNumber, winnersPage } = props;

  return (
    <div className="winners__header">
      <h2>Winners ({winnersNumber})</h2>
      <h3>Page # {winnersPage}</h3>
    </div>
  );
};

export default WinnersCounter;
