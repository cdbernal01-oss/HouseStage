import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  // Obtener el año actual
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    backgroundColor: "#AB9D85", color:'black' 
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col className="text-center py-2" fontColor='black'>
            <p>HouseStage &copy; Todos los derechos reservados {currentYear} Soporte y ayuda En caso de necesitar ayuda o soporte con la pagina por favor ponerse en contacto a través del correo cdbernal@housetage.com o a la línea +57 3152005881 en el horario de lunes a viernes de 8 am a 5 pm
</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;