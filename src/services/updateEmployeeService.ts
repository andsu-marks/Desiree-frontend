import { EmployeesFormDataProps } from "../types/EmployeeTypes";

const API_URL = 'http://localhost:5000/employees';

export const updateEmployeeService = async (employee: EmployeesFormDataProps, id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    });

    if (!response.ok) {
      throw new Error('Erro ao atualizar os dados do usuário');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao atualizar os dados do usuário:", error);
    throw error;
  }
}