import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage';
import Home from './components/Home'
import Muscle from './components/Muscle';
import Weight from './components/Weight';
import MealsA from './components/MealA'
import MealsB from './components/MealB'

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/muscle" element={<Muscle />} />
          <Route path="/weight" element={<Weight />} />
          <Route path="/mealsA" element={<MealsA />} />
          <Route path="/mealsB" element={<MealsB />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
  