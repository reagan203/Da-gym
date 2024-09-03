import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      {/* Header (optional) */}
      <header className="bg-dark text-white py-3">
        <div className="container text-center">
          <h1 className="display-4">Choose Your Fitness Journey</h1>
          <p className="lead">Select a plan that best suits your goals.</p>
          <p>Dare to make your choice</p>
        </div>
      </header>
      {/* Main Content */}
      <Container className="py-5">
        <Row className="justify-content-center">
          {/* Weight Loss Plan Card */}
          <Col md={6} lg={5} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/11/workout-plan-for-weight-loss-scaled.jpg?fit=2560%2C1878&ssl=1" alt="Weight Loss Plan" />
              <Card.Body className="text-center">
                <Card.Title className="h4">Weight Loss Plan</Card.Title>
                <Card.Text>
                  Burn fat and lose weight with our customized weight loss programs.
                </Card.Text>
                <Link to="/weight">
            <Button variant="primary" size="lg">Get started</Button>
          </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Muscle Gain Plan Card */}
          <Col md={6} lg={5} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src="https://cdn.muscleandstrength.com/sites/default/files/feature_3.jpg" alt="Muscle Gain Plan" />
              <Card.Body className="text-center">
                <Card.Title className="h4">Muscle Gain Plan</Card.Title>
                <Card.Text>
                  Build muscle mass and strength with our expert-designed programs.
                </Card.Text>
                <Link to="/muscle">
            <Button variant="primary" size="lg">Get started</Button>
          </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>&copy; 2024 GymFit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
