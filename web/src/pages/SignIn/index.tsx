import React, { useState, FormEvent } from 'react';
import { FiLogIn } from 'react-icons/fi';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// styles
import { Container } from './styles';

// service
import api from '../../services/api';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Digite um e-mail valido')
        .required('E-mail obrigatório'),
      password: Yup.string().required('Senha obrigatória'),
    });

    try {
      await schema.validate({ email, password }, { abortEarly: false });
      api.post('/sessions', { email, password });
    } catch (err) {
      toast.error('Error, virifique seus dados!');
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Faça seu logon</h1>
        <input
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>

        <a href="create">
          <FiLogIn />
          Criar conta
        </a>
      </form>
    </Container>
  );
};

export default SignIn;
