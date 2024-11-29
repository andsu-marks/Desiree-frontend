'use client';

import { TiUserAdd } from "react-icons/ti";
import { ActionButtons, ActionButtonsContainer, GoToCreateEmployee, ListEmployeesBackground, Table, TableCell, TableHeader, TableRow } from "../../styles/ListEmployee.styles";
import { useRedirect } from "../../hooks/useRedirect";
import { BiPen, BiTrash } from "react-icons/bi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { listEmployeesService } from "../../services/listEmployeeService";
import type { EmployeesProps } from "../../types/EmployeeTypes";
import { removeEmployeeService } from "../../services/removeEmployeeService";

export function ListEmployees() {
  const [employeesData, setEmployeesData] = useState<EmployeesProps[]>([]);
  
  const { goToPage } = useRedirect();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listEmployeesService();
        setEmployeesData(data);
      } catch {
        toast.error('Erro ao carregar perfil');
      }
    };
    
    fetchData();
  }, []);

  const handleRemoveEmployee = async (id: string) => {
    try {
      // Chama o serviço de remoção
      const response = await removeEmployeeService(id);
      toast.success(response.message);

      // Atualiza a lista removendo o funcionário localmente
      setEmployeesData((prevData) => prevData.filter((employee) => employee.id !== id));
    } catch {
      toast.error('Erro ao remover o funcionário');
    }
  };

  return (
    <ListEmployeesBackground>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Papel</TableHeader>
            <TableHeader>Adicionado em:</TableHeader>
            <TableHeader>Atualizado em:</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </thead>
        <tbody>
        {employeesData.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell>{employee.id}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>{employee.role}</TableCell>
            <TableCell>{employee.created_at}</TableCell>
            <TableCell>{employee.updated_at}</TableCell>
            <TableCell>
              <ActionButtonsContainer>
                <ActionButtons>
                  <BiPen size={20} onClick={() => goToPage(`/editemployee/${employee.id}`)}/>
                </ActionButtons>
                <ActionButtons>
                  <BiTrash size={19} onClick={() => handleRemoveEmployee(employee.id)}/>
                </ActionButtons>
              </ActionButtonsContainer>
            </TableCell>
          </TableRow>
        ))}
        </tbody>
      </Table>
      <GoToCreateEmployee onClick={() => goToPage('/newemployee')}>
        <TiUserAdd size={30}/>
      </GoToCreateEmployee>
    </ListEmployeesBackground>
  )
}