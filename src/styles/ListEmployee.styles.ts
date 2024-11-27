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
  overflow-y: scroll;
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #d0d0d0;
  }
`;

export const TableHeader = styled.th`
  padding: 12px 15px;
  color: black;
  border: 1px solid gray;
  background-color: #d0d0d0;
`;

export const TableCell = styled.td`
  padding: 8px;
  word-wrap: break-word;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;
