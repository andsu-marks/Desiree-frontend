import styled from "styled-components";

export const EmployeePageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ListEmployeesBackground = styled.div`
  width: 90%;
  height: 80%;
  border-radius: 5px;
  box-shadow: 0 4px 8px var(--shadow-color);
  margin: 40px;
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: var(--primary);
  }
`;

export const TableHeader = styled.th`
  position: sticky;
  top: 0;
  background-color: var(--primary);
  color: black;
  z-index: 10;
  padding: 10px;
`;

export const TableCell = styled.td`
  padding: 10px;
`;

export const GoToCreateEmployee = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: var(--primary);
  color: black;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  background-color: inherit;
  border: gray;
`;

export const ActionButtons = styled.button`
  background-color: inherit;
  border: gray;
  height: 30px;
  color: black;
`;