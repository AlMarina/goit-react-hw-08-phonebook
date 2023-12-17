import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
  margin: auto;
  border: 1px solid;
  border-radius: 4px;
  width: 450px;
background-color: rgba(197, 212, 180, 0.9);

  &:focus-within {
  border-color: blue;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
  font-size: 18px;

  &:focus-within {
  color: blue;
`;

export const InputForm = styled.input`
  width: 250px;
  height: 25px;
  font-size: 18px;

  &::placeholder {
    color: rgba(134, 133, 136, 0.9);
  }
`;

export const BtnForm = styled.button`
  width: 150px;
  height: 25px;
  border: 1px solid green;
  border-radius: 4px;
  font-size: 18px;

  &:hover {
    background-color: #c77676;
    color: white;
    border: 1px solid black;
  }
`;
