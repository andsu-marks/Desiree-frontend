import { EmployeesFormDataProps } from "../types/EmployeeTypes";

const API_URL = 'http://localhost:5000/employees';

export const createEmployeeService = async (employee: EmployeesFormDataProps) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    })

    if (!response) {
      throw new Error('Erro ao criar o usuário');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao criar o usuário:", error);
    throw error;
  }
}