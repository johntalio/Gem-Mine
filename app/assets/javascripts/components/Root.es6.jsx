class Root extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {gems: []}
  }

  handleSubmit(event) {
    event.preventDefault()
    $.ajax({
      url: ''
    })
  }


  render() {
    return(
      <div className="search-page-container">
        <header>
          <h2>Search Gems</h2>
        </header>
      <form className="search-form-container">
        <input className="search-form"></input>
      </form>
    </div>
    )
  }
}
