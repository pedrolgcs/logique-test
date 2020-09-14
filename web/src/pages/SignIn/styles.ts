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
      background: #f8f8f2;
      color: #6272a4;
      border-radius: 1rem;
      border: 2px solid #f8f8f2;
      padding: 1.6rem;
      width: 100%;

      & + input {
        margin-top: 1.6rem;
      }
    }

    button {
      background: #6272a4;
      height: 56px;
      border-radius: 1rem;
      border: 0;
      padding: 0 1.6rem;
      width: 100%;
      color: #f8f8f2;
      font-weight: 500;
      margin-top: 1.6rem;
      transition: background-color 0.5s;

      &:hover {
        background: ${shade(0.1, '#6272a4')};
      }
    }
  }

  a {
    color: #50fa7b;
    display: block;
    margin-top: 2.4rem;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: ${shade(0.1, '#50fa7b')};
    }

    svg {
      margin-right: 1.6rem;
    }

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
