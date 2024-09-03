import { Card, Container, Row, Col } from 'react-bootstrap';

const MealsA = () => {
  const mealPlan = {
    Monday: [
      { meal: "Breakfast", description: "Oatmeal with berries and almonds" },
      { meal: "Lunch", description: "Grilled chicken salad with mixed greens and vinaigrette" },
      { meal: "Dinner", description: "Steamed salmon with quinoa and broccoli" },
      { meal: "Snacks", description: "Greek yogurt with honey and walnuts" }
    ],
    Tuesday: [
      { meal: "Breakfast", description: "Smoothie with spinach, banana, and protein powder" },
      { meal: "Lunch", description: "Turkey and avocado wrap with whole-grain tortilla" },
      { meal: "Dinner", description: "Grilled tofu with stir-fried vegetables" },
      { meal: "Snacks", description: "Apple slices with peanut butter" }
    ],
    Wednesday: [
      { meal: "Breakfast", description: "Scrambled eggs with spinach and whole-grain toast" },
      { meal: "Lunch", description: "Quinoa salad with chickpeas, cucumber, and feta" },
      { meal: "Dinner", description: "Baked chicken breast with sweet potato and green beans" },
      { meal: "Snacks", description: "Carrot sticks with hummus" }
    ],
    Thursday: [
      { meal: "Breakfast", description: "Greek yogurt with granola and mixed berries" },
      { meal: "Lunch", description: "Grilled shrimp with mixed vegetable stir-fry" },
      { meal: "Dinner", description: "Lentil soup with whole-grain bread" },
      { meal: "Snacks", description: "Mixed nuts and seeds" }
    ],
    Friday: [
      { meal: "Breakfast", description: "Protein pancakes with banana slices and almond butter" },
      { meal: "Lunch", description: "Spinach and feta stuffed chicken breast with brown rice" },
      { meal: "Dinner", description: "Grilled salmon with avocado and asparagus" },
      { meal: "Snacks", description: "Celery sticks with cream cheese" }
    ],
    Saturday: [
      { meal: "Breakfast", description: "Whole-grain cereal with skim milk and fresh fruit" },
      { meal: "Lunch", description: "Turkey chili with black beans and quinoa" },
      { meal: "Dinner", description: "Stuffed bell peppers with lean ground beef and quinoa" },
      { meal: "Snacks", description: "Mixed fruit salad" }
    ],
    Sunday: [
      { meal: "Breakfast", description: "Avocado toast with poached egg" },
      { meal: "Lunch", description: "Grilled vegetable sandwich with hummus" },
      { meal: "Dinner", description: "Baked cod with roasted vegetables and brown rice" },
      { meal: "Snacks", description: "Cottage cheese with pineapple" }
    ]
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-success text-white py-3">
        <div className="container text-center">
          <h1 className="display-4">Weight Loss Meal Plan</h1>
          <p className="lead">Your 7-day guide to nutritious and balanced meals.</p>
        </div>
      </header>

      {/* Meal Plan Section */}
      <Container className="py-5">
        <Row className="justify-content-center">
          {Object.keys(mealPlan).map((day, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="shadow-sm h-100">
                <Card.Body className="text-center">
                  <Card.Title className="h4">{day}</Card.Title>
                  <ul className="list-unstyled">
                    {mealPlan[day].map((meal, i) => (
                      <li key={i} className="mb-3">
                        <strong>{meal.meal}:</strong> {meal.description}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-success text-white text-center py-4">
        <div className="container">
          <p>&copy; 2024 GymFit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MealsA;
