import { FormEvent } from 'react';

export interface LoginProps {
  userLogin: Function
};

export interface LoginState {
  email: string,
  password: string,
  is_submit: boolean
}

export interface LoginFormProps {
  handleSubmit: Function
}