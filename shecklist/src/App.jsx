import { useState } from 'react'
import { useDarkMode } from "./components/DarkMode";
import LatestReviewCard from './components/CardComp/LatestReviewCard';
import Header from './components/Header';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const { darkMode } = useDarkMode();

  return (
    <>
    <div className="main-container">
      <Header/>

      <div className={`content ${darkMode ? "dark-mode" : "light-mode"}`}>
        <div className="intro-section">
          <h1>
            Welcome to The Shecklist
          </h1>
          <p className="intro-text">
            Your ultimate soundtrack scout. <br /> We break down albums with sharp reviews and 
            bold ratings. <br />Whether you're digging for hidden gems or 
            checking if the hype is real, we hit play on the truth behind the music.
          </p>
        </div>

        <div className="latest-reviews">
          <h2>LATEST REVIEWS</h2>
          <div className="latest-reviews-list">

            <div className="review-item">
              <LatestReviewCard/>
            </div>
            <div className="review-item">
              <LatestReviewCard/>
            </div>
            <div className="review-item">
              <LatestReviewCard/>
            </div>
            <div className="review-item">
              <LatestReviewCard/>
            </div>

          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
