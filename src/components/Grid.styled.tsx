import * as React from 'react';
import styled from '../styled';

const Table = styled.table`
  border-collapse: collapse;
`;

interface IProps {
  children: React.ReactNode;
}

export const Grid: React.FC<IProps> = ({ children }) => (
  <Table>
    <tbody>{children}</tbody>
  </Table>
);
