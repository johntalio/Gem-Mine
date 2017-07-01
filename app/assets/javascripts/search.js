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
        $('#search-button').attr("src", "/assets/magnifying-glass-red.png")

        $('input').on('focus', function() {
          $('.search-form-container').removeClass('failure');
          $('.failure-message').remove();
          $(this).removeClass('failure');
          $(this).val('');
          $('#search-button').attr("src", "/assets/magnifying-glass.png")
        });
      };

      var search_results = $('.search-container').find('.success');

      $.each(search_results, function(i, depend) {
        var gemName = $.trim(depend.innerText);
        var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        var isFav = favorites.find(fav => (fav.name == gemName));

        if (isFav) {
          $(depend).find('.favorite-button').attr("src", "/assets/star-blue.png");
        }
      });
    });
  });
});
