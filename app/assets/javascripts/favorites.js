$(document).ready(function() {
  if ($('.favorite-bank-container').length) {

    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    var favBank = function(fav) {
      return(`
        <div class="favorite">
          <input alt="Star blue" type="image" src="/assets/star-blue.png" class="favorite-button" />
          <div class="favorite-link"><a href="${fav.link}" target="_blank">${fav.name}</a></div>
        </div>
      `)
    }

    var favList = favorites.map(f => favBank(f));

    $('.favorite-bank-container').append(favList);

    $('.favorite-bank-container').on('click', '.favorite-button', function() {
      var gem = $(this).siblings('.favorite-link');
      removeFav(gem);
      $(this).parent().remove();
    })
  }

  $('.search-container').on('click', '.favorite-button', function() {
    var gem = $(this).siblings('.success-link');

    if (localStorage.getItem('favorites')) {
      toggleFav(gem);
    } else {
      initFavs(gem)
    }
  });

  var initFavs = function(gem) {
    var favGems = [];
    localStorage.setItem('favorites', JSON.stringify(favGems));
    toggleFav(gem);
  }

  var toggleFav = function(gem) {
    var gemName = gem[0].innerText;
    var button = gem.siblings('.favorite-button');
    var favorites = JSON.parse(localStorage.getItem('favorites'));
    var match = favorites.find(fav => (fav.name == gemName));

    if (match) {
      removeFav(gem);
      button.attr("src", "/assets/star-gray.png");
    } else {
      addFav(gem);
      button.attr("src", "/assets/star-blue.png");
    }
  }

  var addFav = function(gem) {
    var gemName = gem[0].innerText;
    var gemLink = gem.attr("href");
    var gemData = {name: gemName, link: gemLink};
    var favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites.push(gemData);

    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  var removeFav = function(gem) {
    var gemName = gem[0].innerText;
    var favorites = JSON.parse(localStorage.getItem('favorites'));
    var newFavorites = favorites.filter(fav => (fav.name != gemName));

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }
});
