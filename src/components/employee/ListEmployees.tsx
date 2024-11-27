import { ListEmployeesBackground, Table, TableCell, TableHeader, TableRow } from "../../styles/ListEmployee.styles";

const employees = [
  {
    id: 'b8e27d66-8f25-4f47-bb92-d3d8f67a4c9e',
    name: 'Anderson Santos',
    email: 'anderson@exemplo.com',
    role: 'Admin',
    addedAt: '2024-11-25',
    updatedAt: '2024-11-26',
  },
  {
    id: 'c0a4c6f0-d8e4-4a12-905c-3a4e3f4f3f8e',
    name: 'João Silva',
    email: 'joao@exemplo.com',
    role: 'Editor',
    addedAt: '2024-11-20',
    updatedAt: '2024-11-24',
  },
];

export function ListEmployees() {
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
          </TableRow>
        </thead>
        <tbody>
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell>{employee.id}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>{employee.role}</TableCell>
            <TableCell>{employee.addedAt}</TableCell>
            <TableCell>{employee.updatedAt}</TableCell>
          </TableRow>
        ))}
        </tbody>
      </Table>
    </ListEmployeesBackground>
  )
}