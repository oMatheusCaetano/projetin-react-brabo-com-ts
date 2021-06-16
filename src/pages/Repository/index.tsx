import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, useHistory, Link } from 'react-router-dom';

import repositoriesApi from '@/services/api/repositories_api';

import logoImg from '@/assets/logo.svg';

import { IRouteParams, IRepository, IIssue } from './interfaces';

import {
  Header,
  ContentContainer,
  RepositoryInfo,
  RepositoryInfoHeader,
  RepositoryInfoList,
  IssuesList,
  IssuesListItem,
  IssuesListItemInfo,
  LoadingMessage,
} from './styles';

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<IRepository | null>(null);
  const [issues, setIssues] = useState<IIssue[]>([]);
  const { params: routeParams } = useRouteMatch<IRouteParams>();
  const browserHistory = useHistory();

  useEffect(() => {
    document.title = 'Repo Info | Github Explorer';

    async function loadPageData() {
      const [{ data: apiRepository }, { data: apiIssues }] = await Promise.all([
        repositoriesApi.get(`repos/${routeParams.repository}`),
        repositoriesApi.get(`repos/${routeParams.repository}/issues`),
      ]);

      setRepository(apiRepository);
      setIssues(apiIssues);
    }

    loadPageData();
  }, [routeParams.repository]);

  return (
    <>
      <Header>
        <Link to="/">
          <img src={logoImg} alt="Github Explorer" />
        </Link>
        <button onClick={() => browserHistory.goBack()}>
          <FiChevronLeft />
          Voltar
        </button>
      </Header>

      <ContentContainer>
        {repository ? (
          <RepositoryInfo>
            <RepositoryInfoHeader>
              <img src={repository.owner.avatar_url} alt="" />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            </RepositoryInfoHeader>

            <RepositoryInfoList>
              <li>
                <strong>{repository.stargazers_count}</strong>
                <span>Stars</span>
              </li>
              <li>
                <strong>{repository.forks_count}</strong>
                <span>Forks</span>
              </li>
              <li>
                <strong>{repository.open_issues_count}</strong>
                <span>Issues abertas</span>
              </li>
            </RepositoryInfoList>
          </RepositoryInfo>
        ) : (
          <LoadingMessage>Carregando dados do repositório...</LoadingMessage>
        )}

        <IssuesList>
          {issues.map((issue) => (
            <IssuesListItem href={issue.html_url} key={issue.id} target="_blank">
              <IssuesListItemInfo>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </IssuesListItemInfo>
              <FiChevronRight />
            </IssuesListItem>
          ))}
        </IssuesList>
      </ContentContainer>
    </>
  );
};

export default Repository;
