import { useRedirect } from "../../hooks/useRedirect";
import { ButtonsContainer, EmployeesFormBackground, Input, InputContainer, Label, Select, SubmitButton } from "../../styles/EmployeeForm.styles";
import { useFormData } from "../../hooks/useFormData";
import { formDataProps, Role } from "../../types/formDataProps";

export function EmployeesForm() {
  const { goBackPage } = useRedirect();

  const { formData, setFormData } = useFormData<formDataProps>({
    name: '',
    role: Role.employee,
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
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
        <SubmitButton type='button' onClick={() => goBackPage()}>Voltar</SubmitButton>
        <SubmitButton type='submit'>Cadastrar</SubmitButton>
      </ButtonsContainer>
    </EmployeesFormBackground>
  )
}