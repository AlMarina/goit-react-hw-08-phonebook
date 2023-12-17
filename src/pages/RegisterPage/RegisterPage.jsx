import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/authSlice';
import { BtnForm, InputForm, Label, Form } from './RegisterPage.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.elements.name.value;
    const email = evt.currentTarget.elements.email.value;
    const password = evt.currentTarget.elements.password.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(registerThunk(formData));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Full name
        <InputForm
          type="text"
          name="name"
          placeholder="Taras Shevchenko"
          required
        />
      </Label>

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
      <BtnForm type="submit">Sign up</BtnForm>
    </Form>
  );
};

export default RegisterPage;
