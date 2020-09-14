import React, { useState, FormEvent } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// styles
import { Container } from './styles';

// service
import api from '../../services/api';

const SignUp: React.FC = () => {
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
      api.post('/users', { email, password });
    } catch (err) {
      toast.error('Error, virifique seus dados!');
    }
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

        <a href="create">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </form>
    </Container>
  );
};

export default SignUp;
