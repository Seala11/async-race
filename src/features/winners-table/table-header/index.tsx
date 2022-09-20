import React from 'react';

type Props = {
  text: string;
  handler?: () => void;
  classes?: string;
};

const defaultProps = {
  handler: () => {},
  classes: '',
};

const TableHeader = ({ text, handler, classes }: Props) => {
  return (
    <th onClick={handler} className={`table__header ${classes}`}>
      {text}
    </th>
  );
};

TableHeader.defaultProps = defaultProps;

export default TableHeader;
