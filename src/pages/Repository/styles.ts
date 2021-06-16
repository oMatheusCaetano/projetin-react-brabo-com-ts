import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    color: #a8a8b3;
    border: none;

    &:hover {
      color: #777;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const ContentContainer = styled.main`
  width: fit-content;
  margin: 0 auto;
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
`;

export const RepositoryInfoHeader = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 125px;
    width: 125px;
    border-radius: 50%;
  }

  div {
    margin-left: 24px;

    strong {
      font-size: 36px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #737380;
      margin-top: 4px;
    }
  }
`;

export const RepositoryInfoList = styled.ul`
  display: flex;
  margin: 40px auto 0 auto;
  max-width: fit-content;

  li {

    & + li {
      margin-left: 80px;
    }

    strong {
      color: #3d3d4d;
      display: block;
      font-size: 36px;
    }

    span {
      color: #6c6c80;
      display: block;
      margin-top: 4px;
    }
  }
`;

export const IssuesList = styled.section`
  margin-top: 80px;
`;

export const IssuesListItem = styled.a`
  background: white;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: .3s;

  & + a {
    margin-top: 16px;
  }

  &:hover {
    transform: translateX(10px);
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
    margin-left: 20px;
  }
`;

export const IssuesListItemInfo = styled.div`
  margin-left: 35px;
  flex: 1;

  strong {
    font-size: 20px;
    color: #3d3d4d;
  }

  p {
    font-size: 16px;
    color: #a8a8b3;
    margin-top: 4px;
  }
`;

export const LoadingMessage = styled.h4`
  color: #989893;
  margin: 120px auto;
  text-align: center;
`;
