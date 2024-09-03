import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Weight = () => {
  const exercises = {
    day1: [
      { name: "Jumping Jacks", reps: "3 sets of 50 reps" },
      { name: "High Knees", reps: "4 sets of 1 minute" },
      { name: "Burpees", reps: "3 sets of 20 reps" }
    ],
    day2: [
      { name: "Mountain Climbers", reps: "4 sets of 1 minute" },
      { name: "Bicycle Crunches", reps: "3 sets of 30 reps" },
      { name: "Jump Rope", reps: "5 sets of 2 minutes" }
    ],
    day3: [
      { name: "Lateral Shuffles", reps: "4 sets of 1 minute" },
      { name: "Plank Jacks", reps: "3 sets of 30 reps" },
      { name: "Squat Jumps", reps: "4 sets of 15 reps" }
    ],
    day4: [
      { name: "Running in Place", reps: "5 sets of 1 minute" },
      { name: "Leg Raises", reps: "4 sets of 20 reps" },
      { name: "Push-Ups", reps: "3 sets to failure" }
    ],
    day5: [
      { name: "Side Planks", reps: "3 sets of 1 minute per side" },
      { name: "Bear Crawls", reps: "4 sets of 30 seconds" },
      { name: "Jump Squats", reps: "4 sets of 20 reps" }
    ],
    day6: [
      { name: "Butt Kicks", reps: "4 sets of 1 minute" },
      { name: "Flutter Kicks", reps: "4 sets of 30 seconds" },
      { name: "Tuck Jumps", reps: "3 sets of 15 reps" }
    ],
    day7: [
      { name: "Star Jumps", reps: "4 sets of 15 reps" },
      { name: "Side Lunges", reps: "3 sets of 20 reps per leg" },
      { name: "Core Twists", reps: "4 sets of 30 reps" }
    ],
  };

  const advice = {
    day1: "Warm-up properly to get your heart rate up before starting.",
    day2: "Maintain a steady pace during high-intensity exercises.",
    day3: "Focus on explosive movements to maximize calorie burn.",
    day4: "Stay hydrated and take short breaks between sets.",
    day5: "Engage your core throughout the workout for better results.",
    day6: "Keep your movements controlled to avoid unnecessary strain.",
    day7: "Finish strong and cool down properly to avoid injury."
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-dark text-white py-3">
        <div className="container text-center">
          <h1 className="display-4">Weight Loss Exercises</h1>
          <p className="lead">Your 7-day workout plan to shed those extra pounds.</p>
          <Link to="/mealsA">
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

export default Weight;
