import styled from "styled-components";

export const HeaderBackground = styled.header`
  background-color: #d0d0d0;
  width: 100%;
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Paragraph = styled.p`
  font-family: 'Courier New', Courier, monospace;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Nav = styled.nav`
   margin-left: 15px;
   margin-right: 15px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderButton = styled.button`
  background-color: inherit;
  height: 35px;
  border: gray;
`;