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
      $('input').removeClass('failure');
      $('.search-form-container').removeClass('failure');
      $('.search-form-container').append(response);
      $(this).val('');

      if ($('.failure-message').length) {
        $('.search-container').remove('.success-info', '.success-depend');
        $('.search-form-container').addClass('failure');
        $('.search-container').addClass('failure');
        $('input').addClass('failure');

        $('input').on('focus', function() {
          $('.search-form-container').removeClass('failure');
          $('.search-container').removeClass('failure');
          $('.failure-message').remove();
          $(this).removeClass('failure');
          $(this).val('');
        });
      };

      var search_results = $('.search-container').find('.success');

      $.each(search_results, function(i, depend) {
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
