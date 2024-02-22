import { Card, Col, Container, Row } from "react-bootstrap";

const WhyMe = () => {
  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-between">
          <Col>
            <Card border="info" className="h-100">
              <Card.Body className="text-center">
                <Card.Title>n+ Years of Experience</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col>
            <Card border="info" className="h-100">
              <Card.Body className="text-center">
                <Card.Title>Attention to Details</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col>
            <Card border="info" className="h-100">
              <Card.Body className="text-center">
                <Card.Title>24/7 Support</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WhyMe;
