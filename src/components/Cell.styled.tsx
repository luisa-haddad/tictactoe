import styled from '../styled';

export const Cell = styled.td`
  font-family: ${props => props.theme.typography.fontFamily};
  width: 100px;
  height: 100px;
  cursor: pointer;
  text-align: center;
  font-size: 50px;

  &.x {
    color: ${props => props.theme.colors.fireRead};
  }
  &.o {
    color: ${props => props.theme.colors.autoBlue};
  }

  tr:first-of-type &:first-of-type,
  tr:first-of-type &:nth-of-type(2),
  tr:nth-of-type(2) &:first-of-type,
  tr:nth-of-type(2) &:nth-of-type(2) {
    border-right: 2px solid ${props => props.theme.colors.autoOrange};
    border-bottom: 2px solid ${props => props.theme.colors.autoOrange};
  }

  tr:first-of-type &:last-of-type,
  tr:nth-of-type(2) &:last-of-type {
    border-bottom: 2px solid ${props => props.theme.colors.autoOrange};
  }

  tr:last-of-type &:first-of-type,
  tr:last-of-type &:nth-of-type(2) {
    border-right: 2px solid ${props => props.theme.colors.autoOrange};
  }
`;
