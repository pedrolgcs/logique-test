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
  }

  a {
    color: #f2545b;
    display: block;
    margin-top: 2.4rem;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: ${shade(0.1, '#F2545B')};
    }

    svg {
      margin-right: 1.6rem;
    }

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
