class Root extends React.Component {
  constructor() {
    super()
    this.gemInfo = this.gemInfo.bind(this)
    this.state = {gems: []}
  }

  // need to enable the retrieval of rubygems using the gem
  // the url below should be a local route that, in the controller, directs to a method in the model that uses the rubygems gem to search for a gem name
  gemInfo(gemName) {
    event.preventDefault()
    $.ajax({
      url: "/"
    }).done((response) => {
      console.log(response);
      // this.setState({gems: response})
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
