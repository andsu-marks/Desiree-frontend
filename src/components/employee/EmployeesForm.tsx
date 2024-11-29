'use-client';

import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRedirect } from "../../hooks/useRedirect";
import { ButtonsContainer, EmployeesFormBackground, Input, InputContainer, Label, Select, SubmitButton } from "../../styles/EmployeeForm.styles";
import { useFormData } from "../../hooks/useFormData";
import { EmployeesFormDataProps, Role } from "../../types/EmployeeTypes";
import { createEmployeeService } from "../../services/createEmployeeService";
import { fetchEmployeeByIdService } from "../../services/fetchEmployeeByIdService";
import { updateEmployeeService } from "../../services/updateEmployeeService";

export function EmployeesForm() {
  const { goToPage } = useRedirect();
  const { id } = useParams();

  const { formData, setFormData } = useFormData<EmployeesFormDataProps>({
    name: '',
    role: Role.employee,
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      if(id) {
        try {
          const employee = await fetchEmployeeByIdService(id);
          setFormData({
            name: employee.name,
            role: employee.role,
            email: employee.email,
            confirmEmail: employee.email,
            password: employee.password,
            confirmPassword: employee.password,
          });
        } catch {
          toast.error("Erro ao buscar os dados do funcionário.");
        }      
      }
    }

    fetchEmployee();
  }, [id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      toast.error("Os e-mails não coincidem!");
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      toast.error("As senhas não coincidem!");
      return;
    }

    if (id) {
      try {
        await updateEmployeeService(formData, id);
        toast.success("Funcionário atualizado com sucesso!");
      } catch {
        toast.error("Erro ao atualizar o funcionário.");
      }
    } else {
      try {
        await createEmployeeService(formData);
        toast.success("Funcionário criado com sucesso!");
      } catch {
        toast.error("Erro ao criar o funcionário.");
      }
    }

  };

  return (
    <EmployeesFormBackground onSubmit={handleSubmit}>
      <InputContainer>
        <Label htmlFor='name'>Nome</Label>
        <Input 
          type='text' 
          id='name' 
          placeholder='Digite o seu nome completo' 
          value={formData.name} 
          onChange={handleChange} 
          required
        />
      </InputContainer>

      <InputContainer>
        <Label htmlFor='role'>Papel</Label>
        <Select 
          id='role'
          value={formData.role}
          onChange={handleChange}
        >
            <option value='employee'>Funcionário</option>
            <option value='admin'>Administrador</option>
        </Select>
      </InputContainer>

      <InputContainer>
        <Label htmlFor='email'>E-mail</Label>
        <Input 
          type='email' 
          id='email' 
          placeholder='Digite seu e-mail' 
          value={formData.email}
          onChange={handleChange}  
          required
        />
      </InputContainer>

      <InputContainer>
        <Label  htmlFor='confirmEmail'>Confirmação de E-mail</Label>
        <Input 
          type='email' 
          id='confirmEmail' 
          placeholder='Confirme seu e-mail' 
          value={formData.confirmEmail}
          onChange={handleChange}
          required
        />
      </InputContainer>

      <InputContainer>
        <Label htmlFor='password'>Senha</Label>
        <Input 
          type='password' 
          id='password' 
          placeholder='Digite sua senha' 
          value={formData.password}
          onChange={handleChange}
          required
        />
      </InputContainer>

      <InputContainer>
        <Label htmlFor='confirmPassword'>Confirmação de Senha</Label>
        <Input 
          type='password' 
          id='confirmPassword' 
          placeholder='Confirme sua senha' 
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </InputContainer>

      <ButtonsContainer>
        <SubmitButton type='button' onClick={() => goToPage('/employees')}>Voltar</SubmitButton>
        <SubmitButton type='submit'>Cadastrar</SubmitButton>
      </ButtonsContainer>
    </EmployeesFormBackground>
  )
}