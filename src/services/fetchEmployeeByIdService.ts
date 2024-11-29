const API_URL = 'http://localhost:5000/employees';

export const fetchEmployeeByIdService = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'GET',
    });
    console.log(response);

    if (!response) {
      throw new Error('Erro ao criar o usuário');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar os dados do usuário:", error);
    throw error;
  }
}