import { FaUser } from "react-icons/fa";
import { HeaderBackground, List, Nav, Paragraph } from "../../styles/Header.styles";
import { BiLogIn } from "react-icons/bi";

export default function Header() {
  return (
    <HeaderBackground>
      <Paragraph>Seja bem-vindo(a)</Paragraph>
      <Nav>
        <List>
          <FaUser size={30}/>
          <BiLogIn size={30}/>
        </List>
      </Nav>
    </HeaderBackground>
  )
}