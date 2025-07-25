import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import NewAlbumsForm from "../../components/FormComp/NewAlbumsForm";
import "./Admin.css";

function Admin() {
  const [activeSection, setActiveSection] = useState("New Review");
  const navigate = useNavigate();
  const [albumForm, setAlbumForm] = useState({
    albumName: "",
    artistName: "",
    albumThumbnail: "",
    artistLabel: "",
    albumReview: "",
    genres: "",
    score: "",
    reviewSnippet: "",
    author: "",
    albumReleaseDate: "",
  });

  const renderForm = () => {
    switch (activeSection) {
      case "New Review":
        return <NewAlbumsForm formData={albumForm} setFormData={setAlbumForm}/>;
      case "Single":
        return (
          <div>
            <p>Single form placeholder (Coming soon)</p>
          </div>
        );
      case "Genre":
        return (
          <div>
            <p>Genre form placeholder (Coming soon)</p>
          </div>
        );
      default:
        return null;
    }
  };

  const renderPreview = () => {
    switch (activeSection) {
      case "New Review":
        return (
          <div className="album-preview">
            <img src={albumForm.albumThumbnail} alt="Album Thumbnail" />

            <p>
              <strong>Album Name:</strong> {albumForm.albumName}
            </p>
            <p>
              <strong>Artist Name:</strong> {albumForm.artistName}
            </p>
            <p>
              <strong>Artist Label:</strong> {albumForm.artistLabel}
            </p>
            <p>
              <strong>Album Review:</strong> {albumForm.albumReview}
            </p>
            <p>
              <strong>Genres:</strong> {albumForm.genres}
            </p>
            <p>
              <strong>Score:</strong> {albumForm.score}
            </p>
            <p>
              <strong>Review Snippet:</strong> {albumForm.reviewSnippet}
            </p>
            <p>
              <strong>Author:</strong> {albumForm.author}
            </p>
            <p>
              <strong>Album Release Date:</strong> {albumForm.albumReleaseDate}
            </p>
          </div>
        );
      case "Single":
        return (
          <div>
            <p>Still In Construction</p>
          </div>
        );
      case "Genre":
        return (
          <div>
            <p>Still In Construction</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-container">
      <Header />
      <div className="admin-body">
        <section className="admin-dashboard">
          <aside className="admin-dashboard-sidebar">
            <h5>Admin Dashboard</h5>
            <div className="admin-sidebar-items-container">
              {["New Review", "Single", "Genre", "Logout"].map((item) => (
                <div
                  key={item}
                  className={`admin-sidebar-item ${
                    activeSection === item ? "active" : ""
                  }`}
                  onClick={() => {
                    if (item === "Logout") {
                        navigate("/");
                    }
                    setActiveSection(item);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="admin-dashboard-forms">
            <main>
              <h3>{activeSection}</h3>
              {renderForm()}
              <button type="submit">Submit</button>
            </main>
          </div>

          <div className="admin-dashboard-preview-section">
            <section>
                <h4>Preview</h4>
                {renderPreview()}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Admin;
