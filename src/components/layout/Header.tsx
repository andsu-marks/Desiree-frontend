import { FaUser } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { HeaderBackground, HeaderButton, List, Nav, Paragraph } from "../../styles/Header.styles";
import { useRedirect } from "../../hooks/useRedirect";

export default function Header() {
  const { goToPage } = useRedirect();

  return (
    <HeaderBackground>
      <Paragraph>Seja bem-vindo(a)</Paragraph>
      <Nav>
        <List>
          <HeaderButton>
            <FaUser size={20}/>
          </HeaderButton>
          <HeaderButton onClick={() => goToPage('/')}>
            <BiLogIn size={20}/>
          </HeaderButton>
        </List>
      </Nav>
    </HeaderBackground>
  )
}