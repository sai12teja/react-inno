import './App.css'; // We'll use some basic CSS for layout

function App() {
  // Sample data array for Spider-Man cards
  const spidermanEdits = [
    {
      id: 1,
      title: "The Amazing Spider-Man",
      description: "Classic red and blue suit edit from the 2025 series.",
      imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800", // Placeholder - replace with your images
      tags: ["#classic", "#2025"]
    },
    {
      id: 2,
      title: "Symbiote Suit",
      description: "Dark and powerful black suit edit with enhanced details.",
      imageUrl: "https://images.unsplash.com/photo-1620336655055-bd87c5d1d73f?auto=format&fit=crop&w=800",
      tags: ["#black", "#symbiote"]
    },
    {
      id: 3,
      title: "Spider-Verse Style",
      description: "Unique animation-style edit inspired by Into the Spider-Verse.",
      imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w-800",
      tags: ["#animated", "#spiderverse"]
    },
    {
      id: 4,
      title: "Future Foundation",
      description: "White and black suit design for stealth missions.",
      imageUrl: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?auto=format&fit=crop&w=800",
      tags: ["#white", "#stealth"]
    },
    {
      id: 5,
      title: "Iron Spider Armor",
      description: "High-tech armor with gold accents and enhanced capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800",
      tags: ["#armor", "#tech"]
    },
    {
      id: 6,
      title: "Miles Morales",
      description: "Edit featuring Miles in his iconic black and red suit.",
      imageUrl: "https://images.unsplash.com/photo-1639322537502-dd3d81b01175?auto=format&fit=crop&w=800",
      tags: ["#miles", "#redblack"]
    }
  ];

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎬 Spider-Man Edits 2025</h1>
        <p className="subtitle">Amazing live wallpapers & movie edits for PC and console</p>
        <div className="hashtags">
          <span className="hashtag">#spiderman</span>
          <span className="hashtag">#spidermanedits</span>
          <span className="hashtag">#wallpaper</span>
        </div>
      </header>

      <main>
        {/* Gallery Grid Section */}
        <section className="gallery-section">
          <h2>Featured Edits & Wallpapers</h2>
          <div className="cards-grid">
            {spidermanEdits.map((edit) => (
              <div className="card" key={edit.id}>
                {/* Card Image */}
                <div className="card-image-container">
                  <img 
                    src={edit.imageUrl} 
                    alt={edit.title}
                    className="card-image"
                  />
                  <div className="card-badge">New</div>
                </div>

                {/* Card Content */}
                <div className="card-content">
                  <h3 className="card-title">{edit.title}</h3>
                  <p className="card-description">{edit.description}</p>
                  
                  {/* Tags */}
                  <div className="card-tags">
                    {edit.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="card-actions">
                    <button className="btn-download">
                      ⬇️ Download
                    </button>
                    <button className="btn-preview">
                      👁️ Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="info-section">
          <h3>About These Edits</h3>
          <p>
            This collection features the latest Spider-Man edits from 2025, including live wallpapers for PC,
            movie stills from "The Amazing Spider-Man" series, and high-quality PS4/PS5 wallpapers. 
            All edits are optimized for desktop and mobile use.
          </p>
          <div className="features">
            <div className="feature">
              <strong>🎨 4K Resolution</strong>
              <p>Ultra HD quality for all wallpapers</p>
            </div>
            <div className="feature">
              <strong>🖥️ PC & Console</strong>
              <p>Compatible with Windows, PS4, PS5</p>
            </div>
            <div className="feature">
              <strong>🔄 Live Wallpapers</strong>
              <p>Animated versions available</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>Spider-Man Edits Gallery • Made with React & Vite • 2025</p>
        <p>All Spider-Man imagery is © Marvel Entertainment</p>
      </footer>
    </div>
  );
}

export default App;