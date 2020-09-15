import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #282a36;
  border-radius: 10px;
  padding: 16px;

  border: 2px solid #282a36;
  color: #44475a;

  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #ff5555;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #bd93f9;
      border-color: #bd93f9;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #bd93f9;
    `}

  input {
    flex: 1;
    color: #f8f8f2;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.span`
  color: #ff5555;
  margin-left: 10px;
`;
