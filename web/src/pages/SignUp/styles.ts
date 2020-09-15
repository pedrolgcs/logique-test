import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX();
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 80vw;
    max-width: 500px;

    animation: ${appearFromRight} 1.5s;

    h1 {
      margin-bottom: 1rem;
    }

    div {
      & + div {
        margin-top: 8px;
      }
    }

    button {
      margin-top: 1rem;
    }

    a {
      color: #50fa7b;
      display: block;
      font-size: 1rem;
      margin-top: 2rem;
      text-decoration: none;
      transition: color 0.5s;

      &:hover {
        color: ${shade(0.2, '#50fa7b')};
      }

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 16px;
      }
    }
  }
`;
