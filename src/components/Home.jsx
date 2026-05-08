const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Discover the Art of Coffee</h1>
          <p className="hero-subtitle">
            Explore the rich world of coffee culture, discover exceptional beans from around the globe, 
            and master the art of brewing the perfect cup.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Coffee</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-background"></div>
      </section>

      <section className="intro">
        <div className="container">
          <h2>Welcome to Cafferium</h2>
          <p>
            Cafferium is your gateway to the world of premium coffee. We provide curated information 
            about coffee origins, brewing techniques, and the art of appreciating every sip. 
            Whether you're a casual coffee drinker or a passionate enthusiast, discover what makes coffee truly exceptional.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
