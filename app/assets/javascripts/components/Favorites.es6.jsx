class Favorites extends React.Component {
  constructor() {
    super()
  }

  // beneath closing header tag, there needs to be a component which displays all the user's favorites
  render() {
    return(
      <div className="favorites-container">
        <header className="favorites-header">
          <h2>Favorites</h2>
        </header>
        <FavoritesBank />
      </div>
    )
  }
}
