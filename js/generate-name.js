function generateName() {
  var selectedCategories = document.getElementsByName("categories");
  var selectedNames = [];

  for (var i = 0; i < selectedCategories.length; i++) {
    if (selectedCategories[i].checked) {
      var category = selectedCategories[i].value;
      switch (category) {
        case "animals":
          selectedNames = selectedNames.concat(animals);
          break;
        case "cars":
          selectedNames = selectedNames.concat(cars);
          break;
        case "countries":
          selectedNames = selectedNames.concat(countries);
          break;
      }
    }
  }
  var indice = Math.floor(Math.random() * selectedNames.length);
  var result = selectedNames[indice];
  document.getElementById("result").textContent = result;
}
