import { Card, Container, Row, Col } from 'react-bootstrap';

const MealsB = () => {
  const mealPlan = {
    Monday: [
      { meal: "Breakfast", description: "Egg white omelette with spinach and whole-grain toast" },
      { meal: "Lunch", description: "Grilled chicken breast with brown rice and steamed broccoli" },
      { meal: "Dinner", description: "Salmon fillet with sweet potato and asparagus" },
      { meal: "Snacks", description: "Protein shake with banana and peanut butter" }
    ],
    Tuesday: [
      { meal: "Breakfast", description: "Greek yogurt with granola and mixed berries" },
      { meal: "Lunch", description: "Lean turkey sandwich with avocado and whole-grain bread" },
      { meal: "Dinner", description: "Baked cod with quinoa and roasted vegetables" },
      { meal: "Snacks", description: "Cottage cheese with pineapple chunks" }
    ],
    Wednesday: [
      { meal: "Breakfast", description: "Oatmeal with protein powder, berries, and almonds" },
      { meal: "Lunch", description: "Grilled steak with mashed sweet potatoes and green beans" },
      { meal: "Dinner", description: "Chicken stir-fry with brown rice and mixed vegetables" },
      { meal: "Snacks", description: "Hard-boiled eggs with a side of mixed nuts" }
    ],
    Thursday: [
      { meal: "Breakfast", description: "Smoothie with spinach, protein powder, and almond milk" },
      { meal: "Lunch", description: "Tuna salad with mixed greens and olive oil dressing" },
      { meal: "Dinner", description: "Lean ground beef chili with kidney beans and quinoa" },
      { meal: "Snacks", description: "Protein bar and an apple" }
    ],
    Friday: [
      { meal: "Breakfast", description: "Protein pancakes with sliced banana and almond butter" },
      { meal: "Lunch", description: "Turkey meatballs with whole-grain pasta and marinara sauce" },
      { meal: "Dinner", description: "Grilled pork chops with roasted sweet potatoes and green peas" },
      { meal: "Snacks", description: "Greek yogurt with honey and walnuts" }
    ],
    Saturday: [
      { meal: "Breakfast", description: "Scrambled eggs with turkey bacon and whole-grain toast" },
      { meal: "Lunch", description: "Chicken Caesar salad with croutons and Parmesan cheese" },
      { meal: "Dinner", description: "Grilled shrimp with quinoa and steamed broccoli" },
      { meal: "Snacks", description: "Protein smoothie with mixed berries and spinach" }
    ],
    Sunday: [
      { meal: "Breakfast", description: "Avocado toast with poached eggs and a side of fruit" },
      { meal: "Lunch", description: "Grilled chicken wrap with hummus and mixed greens" },
      { meal: "Dinner", description: "Baked salmon with roasted sweet potatoes and Brussels sprouts" },
      { meal: "Snacks", description: "Trail mix with dried fruit and mixed nuts" }
    ]
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white py-3">
        <div className="container text-center">
          <h1 className="display-4">Muscle Gain Meal Plan</h1>
          <p className="lead">Your 7-day guide to high-protein, muscle-building meals.</p>
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
      <footer className="bg-primary text-white text-center py-4">
        <div className="container">
          <p>&copy; 2024 GymFit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MealsB;
