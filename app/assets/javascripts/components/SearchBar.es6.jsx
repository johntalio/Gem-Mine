class SearchBar extends React.Component {
  constructor() {
    super()
  }

  handleSubmit(event) {
    event.preventDefault()
    let searchInput = this.refs.searchBar;
    this.props.gemInfo(searchInput.value);
    // searchInput.value = "";
  }

  render() {
    return(
      <form className="search-form-container" onSubmit={this.handleSubmit.bind(this)}>
        <input className="search-form" ref="searchBar" type="text" placeholder="Search" />
        <input type="button" id="search-button" />
      </form>
    )
  }
}
