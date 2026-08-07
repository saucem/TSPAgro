import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  FormLabel,
  FormControl,
  FormGroup,
  Button,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { useLanguageContext } from "../../context/languageContext";

export default function ContactForm() {
  const { t } = useLanguageContext();
  // Initial form state
  const initialFormData = { name: "", email: "", phone: "", cuit: "" };
  const [formData, setFormData] = useState(initialFormData);

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "bd6be732-968b-4c8b-a29a-da0edece6d19",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          loading: false,
          success: t("send-success"),
          error: null,
        });
        setFormData(initialFormData); // Reset form
        toast.success(t("send-success"), { autoClose: 3000 });
      } else {
        toast.error(t("send-error"), { autoClose: 5000 });
        throw new Error(result.message || t("send-error"));
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <Form className="p-3 rounded-3 h-100 d-flex flex-column justify-content-between" onSubmit={handleSubmit}>
      <div role="input-wrapper" className="mb-4">
        <Form.Group controlId="control-input-1" className="mb-3">
          <Form.Label>{t("control-input-1-label")}</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="name"
            value={formData.name}
            placeholder={t("control-input-1-placeholder")}
            required
          />
        </Form.Group>
        <Form.Group controlId="control-input-2" className="mb-3">
          <Form.Label>{t("control-input-2-label")}</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="email"
            name="email"
            value={formData.email}
            placeholder={t("control-input-2-placeholder")}
            required
          />
        </Form.Group>
        <Row xs={1} md={2}>
          <Col>
            <Form.Group controlId="control-input-3" className="mb-3">
              <Form.Label>{t("control-input-3-label")}</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                name="phone"
                value={formData.phone}
                placeholder={t("control-input-3-placeholder")}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="control-input-4" className="mb-3">
              <Form.Label>{t("control-input-4-label")}</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                name="cuit"
                value={formData.cuit}
                placeholder={t("control-input-4-placeholder")}
              />
            </Form.Group>
          </Col>
        </Row>
      </div>
      <Button type="submit" className="btn-success">
        {t("submit-text")}
      </Button>
    </Form>
  );
}
