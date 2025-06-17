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

        <div className="highest-rated-container">
          <div className="highest-rated-album-container">
            <h3>HIGHEST RATED ALBUM</h3>
            <div className='highest-rated-album'>

              <div className="highest-rated-album-entry">
                <img src="https://media.pitchfork.com/photos/5929b09c5e6ef95969321fcb/master/pass/3a0607ec.jpg" alt="" className="highest-rated-album-thumbnail" />
                <div className="highest-rated-album-text">
                  <h4 className="highest-rated-album-title">GO:OD AM</h4>
                  <p className="highest-rated-album-artist">Mac Miler</p>
                </div>
                <div className="highest-rated-album-genre-container">
                  <p className="highest-rated-album-genre">Hip-Hop</p>
                </div>
              </div>
              <div className="highest-rated-album-entry">
                <img src="https://media.pitchfork.com/photos/5929b09c5e6ef95969321fcb/master/pass/3a0607ec.jpg" alt="" className="highest-rated-album-thumbnail" />
                <div className="highest-rated-album-text">
                  <h4 className="highest-rated-album-title">GO:OD AM</h4>
                  <p className="highest-rated-album-artist">Mac Miler</p>
                </div>
                <div className="highest-rated-album-genre-container">
                  <p className="highest-rated-album-genre">Hip-Hop</p>
                </div>
              </div>
              <div className="highest-rated-album-entry">
                <img src="https://media.pitchfork.com/photos/5929b09c5e6ef95969321fcb/master/pass/3a0607ec.jpg" alt="" className="highest-rated-album-thumbnail" />
                <div className="highest-rated-album-text">
                  <h4 className="highest-rated-album-title">GO:OD AM</h4>
                  <p className="highest-rated-album-artist">Mac Miler</p>
                </div>
                <div className="highest-rated-album-genre-container">
                  <p className="highest-rated-album-genre">Hip-Hop</p>
                </div>
              </div>

            </div>
          </div>

          <div className="featured-artists-container">
            <h3>FEATURED ARTISTS</h3>
            <div className='featured-artists'>

              <div className="featured-artists-entry">
                <img src="https://media.pitchfork.com/photos/5929b09c5e6ef95969321fcb/master/pass/3a0607ec.jpg" alt="" className="featured-artists-thumbnail" /> 
                <h4 className="featured-artists-name">Mac Miler</h4>
                <p className="featured-artists-genre">Hip-Hop</p>               
              </div>
              <div className="featured-artists-entry">
                <img src="https://media.pitchfork.com/photos/5929b09c5e6ef95969321fcb/master/pass/3a0607ec.jpg" alt="" className="featured-artists-thumbnail" /> 
                <h4 className="featured-artists-name">Mac Miler</h4>
                <p className="featured-artists-genre">Hip-Hop</p>               
              </div>
              <div className="featured-artists-entry">
                <img src="https://media.pitchfork.com/photos/5929b09c5e6ef95969321fcb/master/pass/3a0607ec.jpg" alt="" className="featured-artists-thumbnail" /> 
                <h4 className="featured-artists-name">Mac Miler</h4>
                <p className="featured-artists-genre">Hip-Hop</p>               
              </div>

            </div>
              
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
