import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translatey(-50px);
  }
  to {
    opacity: 1;
    transform: translateY();
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

    animation: ${appearFromLeft} 1.5s;

    h1 {
      margin-bottom: 1rem;
    }

    a {
      color: #bd93f9;
      display: block;
      font-size: 1rem;
      margin-top: 2rem;
      text-decoration: none;
      transition: color 0.5s;

      &:hover {
        color: ${shade(0.2, '#bd93f9')};
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
