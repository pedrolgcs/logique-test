import React, { useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';
import { toast } from 'react-toastify';

// styles
import { Container } from './styles';

// services
import api from '../../services/api';

// utils
import getValidationErros from '../../utils/getValidationErros';

// components
import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignUpFormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        // clear erros
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail valido')
            .required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/users', data);

        history.push('/');

        toast.success('Cadastro realizado!');
      } catch (err) {
        // form error
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
          return;
        }
        toast.error('Error ao cadastrar');
      }
    },
    [history],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>

        <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          type="password"
          icon={FiLock}
          placeholder="Senha"
        />

        <Button type="submit">cadastrar</Button>

        <Link to="/">
          <FiArrowLeft />
          valtar para logon
        </Link>
      </Form>
    </Container>
  );
};

export default SignUp;
