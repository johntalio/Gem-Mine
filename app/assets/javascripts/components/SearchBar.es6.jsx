class SearchBar extends React.Component {
  render() {
    return(
      <form className="search-form-container">
        <input className="search-form" type="text" value="Search" />
        <input type="button" id="search-button" />
      </form>
    )
  }
}
