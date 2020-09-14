import React, { useState, FormEvent } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';

// styles
import { Container, Error } from './styles';

// service
import api from '../../services/api';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Digite um e-mail valido')
        .required('E-mail obrigatório'),
      password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
    });

    try {
      await schema.validate({ email, password });

      api.post('/users', { email, password });
    } catch {
      setError('Error, verifiqe seus dados');
      return;
    }
    setError('');
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>

        <input
          name="email"
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          name="password"
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Cadastrar</button>

        {error && <Error>{error}</Error>}

        <a href="create">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </form>
    </Container>
  );
};

export default SignUp;
