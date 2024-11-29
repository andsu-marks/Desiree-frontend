'use client';

import { useFormData } from "../../hooks/useFormData";
import { useRedirect } from "../../hooks/useRedirect";
import { Input, InputContainer, Label, SubmitButton } from "../../styles/EmployeeForm.styles";
import { LoginForm } from "../../styles/Login.styles";
import { LoginProps } from "../../types/LoginTypes";
import { employeesFake } from "../../database";
import toast from "react-hot-toast";

export function Login() {
  const { goToPage } = useRedirect();

  const { formData, setFormData } = useFormData<LoginProps>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const employee = employeesFake.find((emp) => (emp.email === formData.email) && (emp.password === formData.password));
    
    if (!employee) {
      toast.error('Funcionário não encontrado');
      return;
    }
    
    goToPage('/employees');
  }
  return(
    <LoginForm onSubmit={handleSubmit}>
      <InputContainer>
        <Label htmlFor='email'>E-mail</Label>
        <Input type='text' id='email' placeholder='Digite o seu e-mail' value={formData.email} onChange={handleChange}required/>
      </InputContainer>

      <InputContainer>
        <Label htmlFor='password'>Senha</Label>
        <Input type='password' id='password' placeholder='Digite a sua senha' value={formData.password} onChange={handleChange} required/>
      </InputContainer>

      <SubmitButton type='submit'>Cadastrar</SubmitButton>
    </LoginForm>
  )
}