const API_URL = 'http://localhost:5000/employees';

export const listEmployeesService = async () => {
  try {
    const response = await fetch(`${API_URL}`);

    if (!response.ok) {
      throw new Error('Erro ao buscar dados do usuário');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw error;
  }
}