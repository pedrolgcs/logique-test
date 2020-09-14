import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 80vw;
    max-width: 500px;
    text-align: center;

    h1 {
      margin-bottom: 2.4rem;
    }

    input {
      background: #f8f7f9;
      color: #255957;
      border-radius: 1rem;
      border: 2px solid #f8f7f9;
      padding: 1.6rem;
      width: 100%;

      & + input {
        margin-top: 1.6rem;
      }
    }

    button {
      background: #a98743;
      height: 56px;
      border-radius: 1rem;
      border: 0;
      padding: 0 1.6rem;
      width: 100%;
      color: #eeebd3;
      font-weight: 500;
      margin-top: 1.6rem;
      transition: background-color 0.5s;

      &:hover {
        background: ${shade(0.1, '#A98743')};
      }
    }
  }

  a {
    color: #255957;
    display: block;
    margin-top: 2rem;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: ${shade(0.1, '#255957')};
    }

    svg {
      margin-right: 1.6rem;
    }

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Error = styled.span`
  display: block;
  color: #ab2346;
  margin-top: 1.5rem;
  font-size: 1.8rem;
`;
