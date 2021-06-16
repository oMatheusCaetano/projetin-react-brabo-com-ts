import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

import { InputProps } from './interfaces';

export const Cotainer = styled.div`
  width: max-content;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form`
  display: flex;
  width: 100vw;
  max-width: 700px;
  margin-top: 40px;
`;

export const FormItemStyles = css`
  height: 70px;
  border: 0;
`;

export const Input = styled.input<InputProps>`
  ${FormItemStyles}
  flex: 1;
  padding: 0 24px;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  border: 2px solid transparent;
  border-right: 0;
  transition: .3s;

  ${({ hasError }) => hasError && css`
    border-color: #c53030;
  `}

  &::placeholder {
    color: #a8a8b3;
  }
`;

export const SubmitButton = styled.button`
  ${FormItemStyles}
  width: 180px;
  background: #04d361;
  color: white;
  font-weight: bold;
  border-radius: 0 5px 5px 0;
  transition: .3s;

  &:hover {
    background: ${shade(0.2, '#04d361')};
  }
`;

export const ErrorMessage = styled.small`
  display: block;
  color: #c53030;
  margin-top: 5px;
  margin-left: 3px;
`;

export const RepositoriesList = styled.section`
  margin-top: 80px;
  max-width: 700px;
`;

export const RepositoriesListItem = styled(Link)`
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

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
    margin-left: 20px;
  }
`;

export const RepositoriesListItemRepoInfo = styled.div`
  margin-left: 35px;
  flex: 1;

  strong {
    font-size: 20px;
    color: #3d3d4d;
  }

  p {
    font-size: 18px;
    color: #a8a8b3;
    margin-top: 4px;
  }
`;
