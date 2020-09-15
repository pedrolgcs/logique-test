import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  background: #6272a4;
  color: #f8f8f2;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.5s;

  &:hover {
    background: ${shade(0.2, '#6272a4')};
  }
`;
