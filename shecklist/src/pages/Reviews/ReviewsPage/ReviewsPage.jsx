import Header from '../../../components/Header';
import './ReviewsPage.css';

function ReviewsPage(){
    return (
      <>
        <div className="reviews-page-container">
          <Header />

          <div className="reviews-page-body">
            <div className="reviews-page-top-section">
              <div className="reviews-page-top-section-album-img-container">
                <img
                  src="https://media.pitchfork.com/photos/5ed56eb59bcc962f72cc0b57/1:1/w_800,h_800,c_limit/Alfredo_Freddie%20Gibbs%20and%20The%20Alchemist.jpg"
                  alt="Album Cover Image"
                  className="reviews-page-cover-img"
                />
              </div>
              <div className="reviews-page-top-section-text-content">
                <h1 className="reviews-page-album-title">Alfredo</h1>
                <p className="reviews-page-artist-name">Freddie Gibbs</p>
                <p className="reviews-page-artist-label">ESGN/ALC/Empire</p>
                <p className="reviews-page-release-date">
                  Released: May 29, 2020
                </p>
                <p className="reviews-page-review-author">
                  Author: Sheck
                </p>
                <p className="reviews-page-genre-tags">
                  <span className="genre-tag">Hip-Hop</span>
                  <span className="genre-tag">R&B</span>
                </p>
              </div>
              <div className="reviews-page-top-section-score-container">
                <h2 className="reviews-page-score">Score: 10</h2>
                <p className="reviews-page-review-snippet">
                  Audacious runways and expansive production.
                </p>
              </div>
            </div>
            <div className="reviews-page-review-section">
              <h2>Review</h2>
              <p className="reviews-page-review-text">
                Freddie Gibbs and The Alchemist's "Alfredo" is a masterclass in
                modern hip-hop, blending intricate lyricism with lush, cinematic
                production. The album showcases Gibbs' razor-sharp storytelling
                and The Alchemist's signature soundscapes, creating a cohesive
                and immersive listening experience. Each track is meticulously
                crafted, with standout features that enhance the overall
                narrative. "Alfredo" is not just an album; it's a journey
                through the complexities of life, ambition, and artistry,
                solidifying both artists' places in the pantheon of contemporary
                hip-hop. It's a must-listen for fans of the genre and a testament to the
                power of collaboration in music. 
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default ReviewsPage;