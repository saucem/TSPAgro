import { Container, Row, Col, Nav, NavLink, Button } from "react-bootstrap";
import { useLanguageContext } from "../../../context/languageContext";
import { BsEnvelope, BsWhatsapp, BsPhone, BsGeo, BsGeoAlt } from "react-icons/bs"
import { HashLink as Link } from "react-router-hash-link";
import LanguageSelect from "../../LanguageSelect/LanguageSelect";

function Footer() {
  const { t } = useLanguageContext();

  return (
    <Container fluid className="bg-primary-custom text-light">
      <Container className="pt-4 pb-2">
        <Row className="justify-content-between align-items-center gap-4 gap-md-0" xs="auto">
          <Col className="d-flex gap-2 align-items-center">
            <img src="/static/img/logo.svg" alt="Logo" width={48}/>
            <img src="/static/img/isotipo_light.svg" alt="Logo" width={192}/>          
          </Col>
          <Col>
            <p><BsEnvelope className="me-2 align-middle"/>info@tspagro.com.ar</p>
            <p className="d-none d-md-block"><BsWhatsapp className="me-2 align-middle"/><a href="https://wa.me/+5492302618307" className="text-light text-link">+54 9 2302 61-8307</a></p>
            <p><BsGeoAlt className="me-2 align-middle"/><a href="https://maps.app.goo.gl/JSR9FEP3kFUnh4uWA" className="text-light text-link">Parque Industrial Gral. Pico, La Pampa</a></p>
            <Button className="d-block d-md-none btn btn-success"><BsWhatsapp className="me-2 align-middle"/>{t("whatsapp-button")}</Button>
          </Col>
          <Col>
            <Nav className="flex-column" >
              <Link to={"#work"} className="nav-link text-light" >{t("navlink1")}</Link>
              <Link to={"#services"} className="nav-link text-light" >{t("navlink2")}</Link>
              <Link to={"#values"} className="nav-link text-light" >{t("navlink3")}</Link>
              <Link to={"#contact"} className="nav-link text-light" >{t("navlink4")}</Link>
            </Nav>
          </Col>
        </Row>
        <h6 className="text-center text-success">&copy; TSP Agro 2026 - Diseño: <a href="" className="text-link">Saucem</a></h6>
      </Container>
    </Container>
  )
}

export default Footer;
