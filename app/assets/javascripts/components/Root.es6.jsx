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
      $('.success-container').remove();
      $('.failure-message').remove();
      $('.search-form-container').append(response);
      $(this).val('');

      if ($('.failure-message').length) {
        $('.search-container').remove('.success-info', '.success-depend');
        $('.search-container').addClass('failure');
        $('input').addClass('failure');

        $('input').on('focus', function() {
          $('.search-container').removeClass('failure');
          $(this).removeClass('failure');
          $(this).val('');
          $('.failure-message').remove();
        });
      };

      var results = $('.search-container').find('.success');

      $.each(results, function(i, depend) {
        console.log(depend, "depend")
        var gemName = $.trim(depend.innerText);
        console.log(gemName, "gem")
        var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        console.log(favorites, "favorites")
        var isFav = favorites.find(fav => (fav.name == gemName));
        console.log(isFav, "isFav")

        if (isFav) {
          $(depend).find('.favorite-button').attr("src", "/assets/star-blue.png");
        }
      });
    });
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
