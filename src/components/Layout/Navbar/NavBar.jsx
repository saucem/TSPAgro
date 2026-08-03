import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { HashLink as Link } from "react-router-hash-link";
import { useLanguageContext } from "../../../context/languageContext";
import LanguageSelect from "../../LanguageSelect/LanguageSelect";

function NavBar() {
  const { t } = useLanguageContext()
  
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <img src="/static/img/logo.svg" alt="Logo" width={32}/>
          <img src="/static/img/isotipo.svg" alt="Logo" width={128}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Link to={"#work"} className="nav-link">{t("navlink1")}</Link>
            <Link to={"#services"} className="nav-link">{t("navlink2")}</Link>
            <Link to={"#values"} className="nav-link">{t("navlink3")}</Link>
            <Link to={"#contact"} className="nav-link">{t("navlink4")}</Link>
            <div className="vr d-none d-lg-block mx-1" />
            <LanguageSelect />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
