if (typeof(Storage) !== "undefined") {
  // store gems
  sessionStorage.setItem("name", "cucumber");
  // retrieve gems and insert them into an html element
  document.getElementById("bank-container").innerHTML = sessionStorage.getItem();
} else {
  console.log("Sorry, no web storage support for you...")
}
