const CoffeeTypes = () => {
  const coffeeTypes = [
    {
      name: 'Espresso',
      emoji: '☕',
      description: 'Bold and concentrated shot of pure coffee essence.',
      features: 'Double shot • Rich crema • Strong caffeine'
    },
    {
      name: 'Cappuccino',
      emoji: '🥛',
      description: 'Perfect balance of espresso, steamed milk, and frothy foam.',
      features: 'Equal parts • Smooth texture • Velvety foam'
    },
    {
      name: 'Latte',
      emoji: '🍶',
      description: 'Smooth blend of espresso with steamed milk and minimal foam.',
      features: 'Creamy • Milk-forward • Gentle foam layer'
    },
    {
      name: 'Americano',
      emoji: '💧',
      description: 'Espresso diluted with hot water for a milder taste.',
      features: 'Longer drink • Less intense • More volume'
    },
    {
      name: 'Mocha',
      emoji: '🍫',
      description: 'Rich blend of espresso, steamed milk, and chocolate.',
      features: 'Chocolate infused • Sweet • Decadent flavor'
    },
    {
      name: 'Macchiato',
      emoji: '🎯',
      description: 'Espresso "marked" with a touch of steamed milk foam.',
      features: 'Espresso-focused • Light milk • Bold taste'
    }
  ];

  return (
    <>
      <section className="coffee-types-page">
        <div className="container">
          <h1 className="page-title">Popular Coffee Types</h1>
          <p className="page-subtitle">
            Discover the diverse world of coffee beverages. From bold espresso shots to creamy lattes,
            explore the different ways to enjoy premium coffee.
          </p>

          <div className="coffee-cards-grid">
            {coffeeTypes.map((coffee, index) => (
              <div key={index} className="coffee-card-large">
                <div className="card-emoji">{coffee.emoji}</div>
                <h3 className="card-name">{coffee.name}</h3>
                <p className="card-description">{coffee.description}</p>
                <div className="card-features">
                  <p>{coffee.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoffeeTypes;
