import styled from "styled-components";

export const EmployeesFormBackground = styled.form`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 40%;
  border: black;
  background-color: var(--primary);
  color: black;
  margin: 20px;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 8px var(--shadow-color);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  background-color: white;
  border: 2px solid gray;
  height: 20px;
  width: 98%;
  box-shadow: 0 4px 8px var(--shadow-color);
`;

export const Label = styled.label`
  color: black;
  height: 20px;
`;

export const Select = styled.select`
  background-color: white;
  border: 2px solid gray;
  height: 31px;
  width: 100%;
  box-shadow: 0 4px 8px var(--shadow-color);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const SubmitButton = styled.button`
  border-radius: 5px;
  box-shadow: 0 4px 8px var(--shadow-color);
  width: 30%;
  align-self: flex-end;
`;

