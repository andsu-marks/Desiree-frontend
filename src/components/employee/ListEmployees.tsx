import { TiUserAdd } from "react-icons/ti";
import { GoToCreateEmployee, GoToEditEmployee, ListEmployeesBackground, Table, TableCell, TableHeader, TableRow } from "../../styles/ListEmployee.styles";
import { useRedirect } from "../../hooks/useRedirect";
import { employeesFake } from "../../database";
import { BiPen } from "react-icons/bi";

const employees = employeesFake;

export function ListEmployees() {
  const { goToPage } = useRedirect();

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
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell>{employee.id}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>{employee.role}</TableCell>
            <TableCell>{employee.addedAt}</TableCell>
            <TableCell>{employee.updatedAt}</TableCell>
            <TableCell>
              <GoToEditEmployee>
                <BiPen size={24} onClick={() => goToPage(`/editemployee/${employee.id}`)}/>
              </GoToEditEmployee>
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