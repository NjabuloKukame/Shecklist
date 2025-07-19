import "./ReviewsCard.css";

function ReviewsCard({ onClick }) {
  return (
    <>
      <div className="reviews-card" onClick={onClick}>
        <img
          src="https://media.pitchfork.com/photos/5ed56eb59bcc962f72cc0b57/1:1/w_800,h_800,c_limit/Alfredo_Freddie%20Gibbs%20and%20The%20Alchemist.jpg"
          alt="Album Cover Image"
          className="cover-img"
        />
        <div className="reviews-card-text-content">
          <h3>Freddie Gibbs</h3>
          <p className="reviews-card-album-title">Alfredo</p>
          <p className="reviews-card-review-snippet">
            Audacious runways and expansive production.
          </p>
        </div>
        <div className="genre-tags">
          <span className="genre-tag">Hip-Hop</span>
          <span className="genre-tag">R&B</span>
        </div>
      </div>
    </>
  );
}

export default ReviewsCard;
