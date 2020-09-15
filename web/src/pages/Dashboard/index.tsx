import React, { useCallback, useRef, useState, useEffect } from 'react';
import { FiPower, FiFileText, FiLink, FiDelete } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// utils
import getValidationErros from '../../utils/getValidationErros';

// styles
import { Container, Header, HeaderContent, Content, Card } from './styles';

// context
import { useAuth } from '../../hooks/auth';

// services
import api from '../../services/api';

// components
import Input from '../../components/Input';
import Button from '../../components/Button';

interface UrlFormData {
  title: string;
  url: string;
}

interface FavoriteItem {
  id: string;
  title: string;
  url: string;
  short_url: string;
  url_code: string;
  created_at: string;
}

const Dashboard: React.FC = () => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const formRef = useRef<FormHandles>(null);
  const { user, signOut } = useAuth();

  useEffect(() => {
    async function loadFavorites() {
      const response = await api.get('/favorites');
      setFavorites(response.data);
    }

    loadFavorites();
  }, []);

  const handleSubmit = useCallback(
    async (data: UrlFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('título obrigatório'),
          url: Yup.string().required('url obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        const response = await api.post('/favorites', data);

        setFavorites([...favorites, response.data]);

        toast.info('url salvo!');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
          return;
        }
        toast.error('error ao salvar url');
      }
    },
    [favorites],
  );

  return (
    <Container>
      <Header>
        <HeaderContent>
          <div>
            <strong>Bem vindo</strong>
            <span>{user.email}</span>
          </div>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="title"
            icon={FiFileText}
            type="text"
            placeholder="título"
          />
          <Input name="url" type="text" icon={FiLink} placeholder="URL" />
          <Button type="submit">salvar</Button>
        </Form>
      </Content>

      {favorites &&
        favorites.map(favorit => (
          <Card key={favorit.id}>
            <div>
              <h2>{favorit.title}</h2>
              <p>{favorit.url}</p>
              <p>{favorit.short_url}</p>
              <time>{favorit.created_at}</time>
            </div>
            <button type="button">
              <FiDelete />
            </button>
          </Card>
        ))}
    </Container>
  );
};

export default Dashboard;
