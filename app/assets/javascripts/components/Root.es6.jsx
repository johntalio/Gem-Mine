class Root extends React.Component {
  constructor() {
    super()
    this.gemInfo = this.gemInfo.bind(this)
  }

  gemInfo(query) {
    $.ajax({
      method: 'POST',
      url: "/search",
      data: `query=${query}`
    }).done((response) => {
      $('.success-link').remove()
      $('.search-form-container').append(response);
    })
  }

  render() {
    return(
      <div className="search-container">
        <header className="search-header">
          <h2 className="search-title">Search Gems</h2>
        </header>
        <SearchBar gemInfo={this.gemInfo} />
      </div>
    )
  }
}
