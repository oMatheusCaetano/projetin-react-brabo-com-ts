import React, { useEffect, useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import repositoriesApi from '@/services/api/repositories_api';

import logoImg from '@/assets/logo.svg';

import { IRepository } from './interfaces';

import {
  Cotainer,
  Title,
  Form,
  Input,
  SubmitButton,
  ErrorMessage,
  RepositoriesList,
  RepositoriesListItem,
  RepositoriesListItemRepoInfo,
} from './styles';

const Dashboard: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<IRepository[]>(handleRepositoriesInitialValue);

  useEffect(() => {
    document.title = 'Repositorios | Github Explorer';
  }, []);

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function addRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateInputText()) return;

    try {
      const { data } = await repositoriesApi.get<IRepository>(`/repos/${inputText}`);
      setRepositories([...repositories, data]);
      setInputText('');
      setInputError('');
    } catch {
      setInputError('Repositório não encontrado :/');
    }
  }

  function handleRepositoriesInitialValue() {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');
    return storagedRepositories ? JSON.parse(storagedRepositories) : [];
  }

  function validateInputText() {
    if (!inputText) {
      setInputError('Por favor, informe um repositório válido. ex: autor/repositório');
      return false;
    }

    return true;
  }

  return (
    <Cotainer>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios do Github</Title>

      <Form onSubmit={addRepository}>
        <Input
          value={inputText}
          onChange={({ target }) => setInputText(target.value)}
          hasError={!!inputError}
          placeholder="Digite o nome do repositório"
        />
        <SubmitButton>Pesquisar</SubmitButton>
      </Form>

      {inputError && <ErrorMessage>{inputError}</ErrorMessage>}

      <RepositoriesList>
        {repositories.map((repository) => (
          <RepositoriesListItem
            to={`/repositories/${repository.full_name}`}
            key={repository.full_name}
          >
            <img src={repository.owner.avatar_url} alt="" />
            <RepositoriesListItemRepoInfo>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </RepositoriesListItemRepoInfo>
            <FiChevronRight />
          </RepositoriesListItem>
        ))}
      </RepositoriesList>
    </Cotainer>
  );
};

export default Dashboard;
