import "./LatestReviewCard.css";

function LatestReviewCard() {
  return (
    <>
      <div className="latest-review-card">
        <div className="latest-review-card-album-thumbnail-container">
          <img
            src="https://media.pitchfork.com/photos/5929b09c5e6ef95969321fcb/master/pass/3a0607ec.jpg"
            alt=""
            className="latest-review-card-album-thumbnail"
          />
        </div>
        <div className="latest-review-card-text-container">
          <h3 className="latest-review-card-album-title">GO:OD AM</h3>
          <p className="latest-review-card-album-artist">Mac Miler</p>
        </div>
      </div>
    </>
  );
}
export default LatestReviewCard;
