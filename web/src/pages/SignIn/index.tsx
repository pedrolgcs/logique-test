import React, { useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { toast } from 'react-toastify';

// styles
import { Container } from './styles';

// context
import { useAuth } from '../../hooks/auth';

// utils
import getValidationErros from '../../utils/getValidationErros';

// components
import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        // clear erros
        formRef.current?.setErrors({});

        // form validation
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail valido')
            .required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schema.validate(data, { abortEarly: false });

        await signIn(data);

        history.push('/dashboard');

        toast.success('Bem vindo');
      } catch (err) {
        // form error
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
          return;
        }
        toast.error('Error ao realizar login');
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Faça seu logon</h1>

        <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          type="password"
          icon={FiLock}
          placeholder="Senha"
        />

        <Button type="submit">entrar</Button>

        <Link to="/signUp">
          <FiLogIn />
          criar conta
        </Link>
      </Form>
    </Container>
  );
};

export default SignIn;
