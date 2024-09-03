import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Muscle = () => {
  const exercises = {
    day1: [
      { name: "Squats", reps: "3 sets of 12 reps" },
      { name: "Deadlifts", reps: "4 sets of 8 reps" },
      { name: "Lunges", reps: "3 sets of 15 reps per leg" }
    ],
    day2: [
      { name: "Bench Press", reps: "4 sets of 10 reps" },
      { name: "Incline Dumbbell Press", reps: "3 sets of 12 reps" },
      { name: "Push-Ups", reps: "3 sets to failure" }
    ],
    day3: [
      { name: "Pull-Ups", reps: "4 sets of 8 reps" },
      { name: "Barbell Rows", reps: "3 sets of 10 reps" },
      { name: "Lat Pulldowns", reps: "4 sets of 12 reps" }
    ],
    day4: [
      { name: "Overhead Press", reps: "4 sets of 8 reps" },
      { name: "Dumbbell Side Lateral Raise", reps: "3 sets of 15 reps" },
      { name: "Front Raise", reps: "3 sets of 12 reps" }
    ],
    day5: [
      { name: "Leg Press", reps: "4 sets of 10 reps" },
      { name: "Leg Curls", reps: "3 sets of 15 reps" },
      { name: "Calf Raises", reps: "4 sets of 20 reps" }
    ],
    day6: [
      { name: "Bicep Curls", reps: "4 sets of 12 reps" },
      { name: "Tricep Dips", reps: "3 sets to failure" },
      { name: "Hammer Curls", reps: "3 sets of 12 reps" }
    ],
    day7: [
      { name: "Planks", reps: "3 sets of 1 minute each" },
      { name: "Russian Twists", reps: "4 sets of 20 reps per side" },
      { name: "Hanging Leg Raises", reps: "4 sets of 12 reps" }
    ],
  };

  const advice = {
    day1: "Focus on maintaining proper form during heavy lifts to avoid injury.",
    day2: "Ensure full range of motion to maximize chest development.",
    day3: "Engage your back muscles to improve posture and strength.",
    day4: "Keep your core tight to support your shoulders during pressing movements.",
    day5: "Control the weight on both the upward and downward motion.",
    day6: "Concentrate on slow, controlled movements for maximum muscle activation.",
    day7: "Incorporate proper breathing techniques to stabilize your core."
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-dark text-white py-3">
        <div className="container text-center">
          <h1 className="display-4">Muscle Gain Exercises</h1>
          <p className="lead">Your 7-day workout plan to build muscle.</p>
          <Link to="/mealsB">
            <Button variant="primary" size="lg">Go to Meals</Button>
          </Link>
        </div>
      </header>

      {/* Exercises Section */}
      <Container className="py-5">
        <Row className="justify-content-center">
          {Object.keys(exercises).map((day, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="shadow-sm h-100">
                {/* <Card.Img variant="top" src={`https://via.placeholder.com/400x200?text=Day+${index + 1}`} alt={`Day ${index + 1}`} /> */}
                <Card.Body className="text-center">
                  <Card.Title className="h4">{`Day ${index + 1}`}</Card.Title>
                  <ul className="list-unstyled">
                    {exercises[day].map((exercise, i) => (
                      <li key={i} className="mb-2">
                        <i className="fas fa-dumbbell text-primary mr-2"></i> {exercise.name} - {exercise.reps}
                      </li>
                    ))}
                  </ul>
                  <Card.Text className="mt-3 font-italic">
                    {advice[`day${index + 1}`]}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
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

export default Muscle;
