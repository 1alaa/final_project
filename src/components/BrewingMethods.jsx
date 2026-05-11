const BrewingMethods = () => {
  const methods = [
    {
      name: 'Pour Over',
      emoji: '🌧️',
      description: 'A precise manual brew that highlights bright, clean flavors through a slow, controlled pour.',
      details: 'Perfect for single-cup brewing with a delicate flavor profile and smooth finish.'
    },
    {
      name: 'French Press',
      emoji: '🍵',
      description: 'A full-immersion method that produces a rich, bold cup with natural oils and body.',
      details: 'Excellent for full-flavored coffee with a thicker mouthfeel and aromatic depth.'
    },
    {
      name: 'Espresso',
      emoji: '☕',
      description: 'A concentrated shot brewed under pressure with intense flavor and crema.',
      details: 'The foundation for lattes, cappuccinos, and many classic espresso-based beverages.'
    },
    {
      name: 'AeroPress',
      emoji: '🌀',
      description: 'A fast, versatile method that blends immersion and pressure for a clean, smooth cup.',
      details: 'Ideal for travel and experimentation with recipe variations and brew strength.'
    },
    {
      name: 'Cold Brew',
      emoji: '❄️',
      description: 'A long-steeped extraction that delivers mellow, low-acidity coffee over time.',
      details: 'Served chilled, it is naturally sweet and perfect for refreshing, iced coffee drinks.'
    },
    {
      name: 'Siphon',
      emoji: '🔬',
      description: 'A theatrical brew that uses vacuum pressure to produce a bright, clean, aromatic cup.',
      details: 'Favored by coffee enthusiasts for its stunning presentation and clarity of flavor.'
    }
  ];

  return (
    <section className="brewing-methods-page">
      <div className="container">
        <h1 className="page-title">Brewing Methods</h1>
        <p className="page-subtitle">
          Discover the techniques that bring out the best in every coffee bean. From classic immersion brews to precise filter pours, learn how each method shapes taste, texture, and aroma.
        </p>

        <div className="brewing-methods-grid">
          {methods.map((method, index) => (
            <article key={index} className="brewing-method-card">
              <div className="method-emoji">{method.emoji}</div>
              <h3 className="method-title">{method.name}</h3>
              <p className="method-description">{method.description}</p>
              <p className="method-details">{method.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrewingMethods;
