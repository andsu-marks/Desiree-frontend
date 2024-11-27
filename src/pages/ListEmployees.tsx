import { ListEmployees } from "../components/employee/ListEmployees";
import { EmployeePageWrapper } from "../styles/ListEmployee.styles";

export default function EmployeePage() {
  return <EmployeePageWrapper>
    <ListEmployees/>
  </EmployeePageWrapper>
}