import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/authSlice';
import { BtnForm, InputForm, Label, Form } from './LoginPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();
    const email = evt.currentTarget.elements.email.value;
    const password = evt.currentTarget.elements.password.value;
    const formData = {
      email,
      password,
    };

    dispatch(loginThunk(formData));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Email
        <InputForm
          type="email"
          name="email"
          placeholder="hotemail@hotmail.com"
          required
        />
      </Label>

      <Label>
        Password
        <InputForm
          type="password"
          name="password"
          placeholder="******"
          required
          minLength="7"
        />
      </Label>
      <BtnForm type="submit">Sign in</BtnForm>
    </Form>
  );
};

export default LoginPage;
