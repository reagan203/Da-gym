import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    const navigate = useNavigate();
  
    const handleGetStarted = () => {
      navigate('/Home');
    };
  return (
    <div>
      {/* Header */}
      <header className="bg-dark text-white py-3">
        <div className="container">
          <h1 className="display-4">GymFit</h1>
          <p className="lead">Transform your body and mind.</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section text-center bg-light py-5">
        <div className="container">
          <h2 className="display-5">Join the Best Gym in Town</h2>
          <p className="lead">Achieve your fitness goals with our expert trainers and state-of-the-art facilities.</p>
          <button onClick={handleGetStarted} className="btn btn-primary btn-lg mt-3">
            Get Started
          </button>  
         </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="fas fa-dumbbell fa-3x mb-3 text-primary"></i>
              <h3>Expert Trainers</h3>
              <p>Get guidance from top-notch professionals to achieve your goals.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-heartbeat fa-3x mb-3 text-danger"></i>
              <h3>Modern Equipment</h3>
              <p>Train with the latest and best equipment in the industry.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-users fa-3x mb-3 text-success"></i>
              <h3>Community Support</h3>
              <p>Join a community that supports and motivates you to succeed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>&copy; 2024 GymFit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
