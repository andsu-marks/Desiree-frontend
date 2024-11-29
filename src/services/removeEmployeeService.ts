const API_URL = 'http://localhost:5000/employees';

export const removeEmployeeService = async (id: string ) => {
  try {
    const response = await fetch(`${API_URL}/${id}`,{
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Erro ao remover o usuário');
    }
    return { message: 'Usuário removido com sucesso' };
  } catch (error) {
    console.error("Erro ao buscar os dados do usuário:", error);
    throw error;
  }
}