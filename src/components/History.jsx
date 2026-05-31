const History = () => {
  const historyTimeline = [
    {
      period: '9th Century',
      title: 'Origins in Ethiopia',
      description: 'Coffee is believed to have originated in Ethiopia. Legend tells of a goat herder who discovered the energizing effects of coffee berries.',
      icon: '🌍'
    },
    {
      period: '15th Century',
      title: 'Spread to the Arab World',
      description: 'Coffee cultivation and consumption spread from Ethiopia to the Arabian Peninsula, particularly Yemen. Coffee houses became centers of social and intellectual life.',
      icon: '🕌'
    },
    {
      period: '16th-17th Century',
      title: 'Ottoman Empire Expansion',
      description: 'The Ottoman Empire embraced coffee culture, establishing elaborate coffee houses. Coffee became deeply integrated into Turkish tradition and hospitality.',
      icon: '🏛️'
    },
    {
      period: '17th Century',
      title: 'Arrival in Europe',
      description: 'European merchants and travelers brought coffee to ports like Venice. It gradually became popular among European nobility and intellectuals.',
      icon: '🚢'
    },
    {
      period: '18th Century',
      title: 'Colonial Cultivation',
      description: 'European powers established coffee plantations in their colonies across Africa, Asia, and South America, transforming global trade.',
      icon: '🌱'
    },
    {
      period: '19th Century',
      title: 'Industrial Revolution',
      description: 'Steam-powered roasting and grinding machines revolutionized coffee production. Instant coffee was invented, making coffee more accessible.',
      icon: '⚙️'
    },
    {
      period: '20th Century',
      title: 'Modern Coffee Culture',
      description: 'The rise of coffee chains, espresso machines, and specialty coffee culture. Coffee became a global commodity and integral part of daily life.',
      icon: '☕'
    },
    {
      period: 'Present Day',
      title: 'Specialty & Sustainability',
      description: 'Focus on single-origin beans, fair trade practices, sustainable farming, and the third-wave coffee movement celebrating quality and craftsmanship.',
      icon: '🌟'
    }
  ];

  const coffeeRegions = [
    {
      name: 'Ethiopia',
      description: 'The birthplace of coffee with fruity, floral flavor profiles.',
      emoji: '�'
    },
    {
      name: 'Colombia',
      description: 'Produces smooth, balanced coffees with nutty undertones.',
      emoji: '🏔️'
    },
    {
      name: 'Brazil',
      description: 'The world\'s largest producer, known for bold and earthy flavors.',
      emoji: '☀️'
    },
    {
      name: 'Indonesia',
      description: 'Offers full-bodied, earthy coffees with herbal notes.',
      emoji: '🏝️'
    },
    {
      name: 'Kenya',
      description: 'Famous for bright, berry-forward and complex flavors.',
      emoji: '🦁'
    },
    {
      name: 'Vietnam',
      description: 'Second-largest producer, known for robust and chocolatey notes.',
      emoji: '🌾'
    }
  ];

  return (
    <>
      <section className="history-page">
        <div className="container">
          <h1 className="page-title">History of Coffee</h1>
          <p className="page-subtitle">
            Journey through centuries of coffee culture, from its legendary discovery in Ethiopia to its 
            status as the world's most beloved beverage.
          </p>

          <div className="history-timeline">
            {historyTimeline.map((event, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker">
                  <span className="timeline-icon">{event.icon}</span>
                </div>
                <div className="timeline-content">
                  <h3>{event.title}</h3>
                  <p className="timeline-period">{event.period}</p>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="coffee-regions-section">
            <h2 className="section-heading">Coffee Growing Regions</h2>
            <p className="regions-subtitle">
              Coffee is cultivated in over 70 countries around the world. Here are some of the most renowned regions.
            </p>
            <div className="regions-grid">
              {coffeeRegions.map((region, index) => (
                <div key={index} className="region-card">
                  <div className="region-emoji">{region.emoji}</div>
                  <h3>{region.name}</h3>
                  <p>{region.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="coffee-facts">
            <h2 className="section-heading">Coffee Facts</h2>
            <div className="facts-grid">
              <div className="fact-card">
                <div className="fact-number">2.25B</div>
                <p>Cups of coffee consumed daily worldwide</p>
              </div>
              <div className="fact-card">
                <div className="fact-number">70M</div>
                <p>Metric tons of coffee produced annually</p>
              </div>
              <div className="fact-card">
                <div className="fact-number">40%</div>
                <p>World's coffee comes from Africa</p>
              </div>
              <div className="fact-card">
                <div className="fact-number">6</div>
                <p>Continents where coffee is grown</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
