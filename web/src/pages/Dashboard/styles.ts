import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 20px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  width: 90vw;
  max-width: 1120px;
  margin: 0 auto;

  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    border: 0;
    transition: color 0.5s;

    svg {
      color: #bd93f9;
      font-size: 1.2rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;

    strong {
      color: #6272a4;
    }

    span {
      color: #f8f8f2;
    }
  }
`;

export const Content = styled.div`
  width: 90vw;
  max-width: 1120px;
  margin: 1rem auto;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 90vw;
    max-width: 1120px;

    display: flex;
    align-items: center;

    div {
      & + div {
        margin-left: 10px;
      }
    }

    button {
      margin-left: 10px;
      max-width: 100px;
    }
  }
`;

export const Card = styled.div`
  width: 90vw;
  max-width: 1120px;
  margin: 1rem auto;
  padding: 16px 24px;
  border-radius: 10px;
  background: #28262e;
  position: relative;
  line-height: 1.6rem;

  &::before {
    position: absolute;
    height: 80%;
    width: 1px;
    left: 0%;
    top: 10%;
    content: '';
    background: #8be9fd;
  }

  & + div {
    margin-top: 10px;
  }

  div {
    width: 90%;

    h2 {
      border-bottom: 1px solid #3e3b47;
      padding-bottom: 10px;
    }

    p {
      margin-top: 5px;
      font-size: 1rem;
      color: #ffb86c;
      word-wrap: break-word;

      & + p {
        color: #50fa7b;
        margin-bottom: 5px;
      }
    }

    time {
      color: #ff79c6;
      font-size: 1rem;
    }
  }

  > button {
    margin-left: auto;
    font-size: 2rem;
    border: 0;
    background: transparent;

    svg {
      color: #ff5555;
    }
  }

  display: flex;
  align-items: center;
`;
