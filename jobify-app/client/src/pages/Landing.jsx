import { Link } from 'react-router-dom';
// Wrapper (Styled Components)
import Wrapper from '../assets/wrappers/LandingPage';
// Images
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <Wrapper>
      <nav></nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            I'm baby mustache JOMO whatever distillery vegan authentic solarpunk
            raw denim literally blog bruh narwhal. Helvetica tumeric marxism yr
            gochujang, fingerstache synth. Put a bird on it grailed viral
            hexagon normcore. XOXO cliche af, hammock gatekeep coloring book
            green juice food truck man braid crucifix keytar put a bird on it
            bespoke occupy.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
