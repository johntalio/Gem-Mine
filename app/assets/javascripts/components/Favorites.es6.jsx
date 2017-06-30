class Favorites extends React.Component {
  constructor() {
    super()

    if ($('.favorite-bank-container').length) {

      var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      var favBank = function(fav) {
        return(
          <div className="favorite">
            <input alt="Star blue" type="image" src="/assets/star-blue.png" className="favorite-button" />
            <div className="favorite-link"><a href="${fav.link}">${fav.name}</a></div>
          </div>
        )
      }
    }
  }


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
