import "./Home.css";

const Home = () => {
  const handleBuyMeACoffee = () => {
    window.open("https://www.buymeacoffee.com/SpeedLabs", "_blank");
  };

  return (
    <div className="home-page main-container">
      <section className="hero">
        <h1>Welcome to SpeedLabs</h1>
        <p>Your partner in creating powerful and innovative applications.</p>
      </section>

      <div className="content">
        <p className="intro-text">
          We are passionate software developers crew focused on building
          high-quality applications and tools that make a difference in people's
          lives.
        </p>

        <div className="features-list">
          <h2>What We Build:</h2>
          <ul>
            <li>📱 Mobile Applications</li>
            <li>🖥 Desktop Software</li>
            <li>🛠 Developer Tools</li>
            <li>🌐 Web Applications</li>
            <li>🔧 Automation Solutions</li>
          </ul>
        </div>

        <div className="support-card">
          <p>
            If you find our work helpful and want to support future development,
            consider buying us a coffee! Each cup helps us create better tools
            and applications.
          </p>
          <button className="coffee-button" onClick={handleBuyMeACoffee}>
            ☕️ Buy Us a Coffee
          </button>
        </div>

        <p className="thank-you">Thank you for your support! ❤️</p>
      </div>
    </div>
  );
};

export default Home;
