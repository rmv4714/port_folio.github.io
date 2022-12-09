import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    📨
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href=" kamalshweta9@gmail.com"
                    >
                      {" "}
                      kamalshweta9@gmail.com
                    </a>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    📱{" "}
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href=""
                    >
                      {" "}
                      +91 8707294714
                    </a>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
