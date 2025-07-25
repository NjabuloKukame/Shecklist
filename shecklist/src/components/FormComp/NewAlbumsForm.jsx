import "./Forms.css";

function NewAlbumsForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <form action="" className="new-album-form">
        <div className="right-side">
          <div className="form-group">
            <label htmlFor="">Album Name</label>
            <input
              type="text"
              name="albumName"
              value={formData.albumName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Artist Name</label>
            <input
              type="text"
              name="artistName"
              value={formData.artistName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Album Thumbnail</label>
            <input
              type="text"
              name="albumThumbnail"
              value={formData.albumThumbnail}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Artist Label</label>
            <input
              type="text"
              name="artistLabel"
              value={formData.artistLabel}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Album Review</label>
            <textarea
              name="albumReview"
              value={formData.albumReview}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="left-side">
          <div className="form-group">
            <label htmlFor="">Genres</label>
            <input
              type="text"
              name="genres"
              value={formData.genres}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Score</label>
            <input
              type="text"
              name="score"
              value={formData.score}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Review Snippet</label>
            <input
              type="text"
              name="reviewSnippet"
              value={formData.reviewSnippet}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Album Release Date</label>
            <input
              type="text"
              name="albumReleaseDate"
              value={formData.albumReleaseDate}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default NewAlbumsForm;
