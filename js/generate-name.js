function generateName() {
  var selectedCategories = document.getElementsByName("categories");
  var selectedNames = [];

  for (var i = 0; i < selectedCategories.length; i++) {
    if (selectedCategories[i].checked) {
      var category = selectedCategories[i].value;
      selectedNames = selectedNames.concat(names[category]);
    }
  }
  var indice = Math.floor(Math.random() * selectedNames.length);
  var result = selectedNames[indice];
  document.getElementById("result").textContent = result;
}
