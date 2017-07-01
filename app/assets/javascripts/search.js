$(document).ready(function () {
  $('.search-form-container').on('click', '#search-button', function(event) {
    event.preventDefault();

    var query = $(this).siblings('.search-form').val();

    $.ajax({
      method: 'POST',
      url: "/search",
      data: `query=${query}`
    }).done((response) => {
      $('.success-container').remove();
      $('.search-form-container').append(response);

      if ($('.failure-message').length) {
        $('.search-form-container').addClass('failure');
        $('input').addClass('failure');

        $('input').on('focus', function() {
          $('.search-form-container').removeClass('failure');
          $('.failure-message').remove();
          $('#search-button').removeClass('failure');
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
  });
});
