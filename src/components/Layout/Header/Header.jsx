import { Container, Row, Col, Button } from "react-bootstrap";
import { useLanguageContext } from "../../../context/languageContext";
import NavBar from "../Navbar/NavBar";

function Header() {
  const { t } = useLanguageContext();

  return (
    <Container fluid>
      <NavBar />
    </Container>
  );
}

export default Header;
