export default function Art() {
  const artworks = [
    { title: 'equilibrium', medium: 'pencil', image: '/assets/art1.jpg' },
    { title: 'end of day', medium: 'digital', image: '/assets/art2.jpg' },
    { title: 'sequoiadendron giganteum', medium: 'gouache', image: '/assets/art3.jpg' },
    { title: 'friends in all the universes', medium: 'digital', image: '/assets/art4.jpg' },
    { title: 'high park en plein air', medium: 'oil pastel', image: '/assets/art5.jpg' },
    { title: 'peaks', medium: 'water colour', image: '/assets/art6.jpg' }
  ]

  return (
    <section className="art" id="art">
      <div className="container">
        <h2><span className="section-tag">04</span>Art</h2>
        <div className="art-gallery">
          {artworks.map((art, index) => (
            <div key={index} className="art-item">
              <img src={art.image} alt={art.title} />
              <div className="art-popup">
                <img src={art.image} alt={art.title + ' full view'} />
              </div>
              <h3>{art.title}</h3>
              <p>{art.medium}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
