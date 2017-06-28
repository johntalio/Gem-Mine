class Root extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {gems: []}
  }

  // need to enable the retrieval of rubygems using the gem
  handleSubmit(event) {
    event.preventDefault()
    $.ajax({
      url: ''
    })
  }

  render() {
    return(
      <div className="search-container">
        <header className="search-header">
          <h2 className="search-title">Search Gems</h2>
        </header>
        <SearchBar />
      </div>
    )
  }
}
