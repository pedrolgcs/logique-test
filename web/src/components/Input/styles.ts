import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f8f7f9;
  color: #255957;
  border-radius: 1rem;
  border: 2px solid #f8f7f9;
  padding: 1.6rem;
  width: 100%;

  & + div {
    margin-top: 1.6rem;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #a98743;
      border-color: #a98743;
    `}

  display: flex;
  align-items: center;

  input {
    background: transparent;
    border: 0;
    color: #255957;

    &::placeholder {
      color: #255957;
    }

    flex: 1;
  }

  svg {
    margin-right: 16px;
  }
`;
