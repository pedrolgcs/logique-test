import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

// styles
import { Container } from './styles';

// components
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <form>
        <h1>Faça seu logon</h1>
        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>

        <a href="create">
          <FiLogIn />
          Entrar
        </a>
      </form>
    </Container>
  );
};

export default SignIn;
