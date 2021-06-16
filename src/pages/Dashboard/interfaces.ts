export interface IRepository {
  full_name: string,
  description: string,
  owner: {
    login: string,
    avatar_url: string,
  }
}

export interface InputProps { hasError: boolean }
