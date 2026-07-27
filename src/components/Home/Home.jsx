import React from "react";
import { useLanguageContext } from "../../context/languageContext";
import { HashLink as Link } from "react-router-hash-link"
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormLabel,
  FormControl,
  Card,
} from "react-bootstrap";

function Home() {
  const { t } = useLanguageContext();

  return (
    <>
      <Container>
        <Row className="above-fold flex-md-row-reverse flex-centered pb-4 pb-md-0">
          <Col className="img-container p-md-0 mb-4" md={4} lg={5}>
            <img
              src="./static/img/foto_atardecer.jpeg"
              alt="Imagen de la planta TSP Agro"
              className="rounded-3 rounded-lg-0"
            />
          </Col>
          <Col
            md={6}
            lg={6}
            className="d-flex flex-column justify-content-center align-items-center gap-3"
          >
            <div className="d-flex flex-row align-items-end justify-content-between flex-md-column justify-content-md-center align-items-md-center">
              <img
                src="./static/img/isologotipo.svg"
                alt="Logo"
                className="hero-logo"
              />
              <p className="montserrat fw-medium hero-subtitle text-end text-md-center">
                {t("hero-subtitle")}
              </p>
            </div>
            <Link to={"#services"} className="btn btn-lg btn-success my-4 col-lg-8">{t("hero-cta")}</Link>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-primary-custom text-light">
        <Row className="py-4">
          <Col>
            <h1 className="text-center h3">
              <strong>{t("banner-heading")}</strong>
              {t("banner-text")}
            </h1>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex flex-column flex-centered py-4" id="work">
        <Row className="flex-centered gap-2 mb-4 mb-lg-0">
          <Col className="img-container h-25 p-md-0" lg={6}>
            <img
              src="./static/img/horsemen.png"
              alt=""
              className="rounded-3 rounded-lg-0"
            />
          </Col>
          <Col lg={5}>
            <h2 className="fw-bold text-primary-custom h1 text-center text-lg-start">
              {t("work-title")}
            </h2>
            <p className="h5">{t("work-text")}</p>
          </Col>
        </Row>
        <Container className="d-flex flex-column flex-centered hmin-30 gap-5" id="values">
          <h2 className="fw-bold text-primary-custom h1">
            {t("values-title")}
          </h2>
          <Row className="flex-centered text-center gap-lg-4">
            <Col
              className="d-flex flex-centered flex-column"
              xs={6}
              md={4}
              lg="auto"
            >
              <img
                src="./static/img/check_circle.svg"
                alt={t("work-1-heading")}
                width={64}
              />
              <h3 className="text-primary-custom h4">{t("work-1-heading")}</h3>
              <p className="text-small">{t("work-1-description")}</p>
            </Col>
            <Col
              className="d-flex flex-centered flex-column"
              xs={6}
              md={4}
              lg="auto"
            >
              <img
                src="./static/img/mistery.svg"
                alt={t("work-2-heading")}
                width={64}
              />
              <h3 className="text-primary-custom h4">{t("work-2-heading")}</h3>
              <p className="text-small">{t("work-2-description")}</p>
            </Col>
            <Col
              className="d-flex flex-centered flex-column"
              xs={6}
              md={4}
              lg="auto"
            >
              <img
                src="./static/img/conversion_path.svg"
                alt={t("work-3-heading")}
                width={64}
              />
              <h3 className="text-primary-custom h4">{t("work-3-heading")}</h3>
              <p className="text-small">{t("work-3-description")}</p>
            </Col>
            <Col
              className="d-flex flex-centered flex-column"
              xs={6}
              md={4}
              lg="auto"
            >
              <img
                src="./static/img/verified_user.svg"
                alt={t("work-4-heading")}
                width={64}
              />
              <h3 className="text-primary-custom h4">{t("work-4-heading")}</h3>
              <p className="text-small">{t("work-4-description")}</p>
            </Col>
            <Col
              className="d-flex flex-centered flex-column"
              xs={6}
              md={4}
              lg="auto"
            >
              <img
                src="./static/img/trending_up.svg"
                alt={t("work-5-heading")}
                width={64}
              />
              <h3 className="text-primary-custom h4">{t("work-5-heading")}</h3>
              <p className="text-small">{t("work-5-description")}</p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="d-flex flex-column flex-centered" id="services">
        <h2 className="fw-bold text-primary-custom text-center h1 my-4">
          {t("services-title")}
        </h2>
        <Row className="justify-content-center hmin-40 w-100 row-cols-1 row-cols-md-2 row-cols-lg-3 row-gap-4">
          <Col>
            <Card className="rounded-3 h-100">
              <Card.Img
                variant="top"
                src="./static/img/tsp-agro-plant.jpeg"
                className="rounded-top-3"
              />
              <Card.Body>
                <Card.Title>{t("service-1-heading")}</Card.Title>
                <Card.Text>{t("service-1-description")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="rounded-3 h-100">
              <Card.Img
                variant="top"
                src="./static/img/subproducts.jpeg"
                className="rounded-top-3"
              />
              <Card.Body>
                <Card.Title>{t("service-2-heading")}</Card.Title>
                <Card.Text>{t("service-2-description")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="rounded-3 h-100">
              <Card.Img
                variant="top"
                src="./static/img/tsp-staff.jpeg"
                className="rounded-top-3"
              />
              <Card.Body>
                <Card.Title>{t("service-3-heading")}</Card.Title>
                <Card.Text>{t("service-3-description")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex flex-column flex-centered hmin-30">
        <h2 className="fw-bold text-primary-custom text-center h1 my-4">
          {t("mission-title")}
        </h2>
        <Row className="flex-centered">
          <Col lg={8}>
            <p className="h5 text-lg-center">{t("mission-text")}</p>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex flex-column flex-centered py-4">
        <Row className="flex-centered flex-lg-row-reverse hmin-50 gap-2 mb-4 mb-lg-0">
          <Col className="img-container h-50 p-md-0" lg={6}>
            <img
              src="./static/img/trabajando-pico.jpeg"
              alt=""
              className="rounded-3 rounded-lg-0"
            />
          </Col>
          <Col lg={5}>
            <h2 className="fw-bold text-primary-custom h1 text-center text-lg-start">
              {t("how-title")}
            </h2>
            <p className="h5">{t("how-text")}</p>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex flex-column flex-centered hmin-20 mb-4">
        <h2 className="fw-bold text-primary-custom text-center h1 mb-4">
          {t("vision-title")}
        </h2>
        <Row className="flex-centered">
          <Col lg={9}>
            <p className="h5 text-lg-center">{t("vision-text")}</p>
          </Col>
        </Row>
      </Container>
      <Container className="mb-4" id="contact">
        <Row className="justify-content-center flex-lg-row-reverse" xs={1} lg={2}>
          <Col className="mb-4 mb-lg-0 h-100">
            <h2 className="fw-bold text-primary-custom h1">{t("contact")}</h2>
            <Form className="p-3 rounded-3">
              <Form.Group controlId="control-input-1" className="mb-3">
                <Form.Label>{t("control-input-1-label")}</Form.Label>
                <Form.Control type="text" name="nombre" placeholder={t("control-input-1-placeholder")} required/>
              </Form.Group>
              <Form.Group controlId="control-input-2" className="mb-3">
                <Form.Label>{t("control-input-2-label")}</Form.Label>
                <Form.Control type="email" name="email" placeholder={t("control-input-2-placeholder")} required/>
              </Form.Group>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="control-input-3">
                    <Form.Label>{t("control-input-3-label")}</Form.Label>
                    <Form.Control type="text" name="telefono" placeholder={t("control-input-3-placeholder")} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="control-input-4">
                    <Form.Label>{t("control-input-4-label")}</Form.Label>
                    <Form.Control type="text" name="cuit" placeholder={t("control-input-4-placeholder")} />
                  </Form.Group>
                </Col>
              </Row>
              <Button className="btn-success">
                {t("submit-text")}
              </Button>          
            </Form>
          </Col>
          <Col className="h-100">
            <h2 className="fw-bold text-primary-custom h1">{t("where")}</h2>
            <div className="iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7950577740926!2d-63.78451752350696!3d-35.68204797258698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c363083c2fb407%3A0x8305d40357268c69!2sTSP%20AGRO%20SA!5e0!3m2!1ses!2sar!4v1785110800036!5m2!1ses!2sar"
                className="w-100 hmin-40 rounded-3"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
