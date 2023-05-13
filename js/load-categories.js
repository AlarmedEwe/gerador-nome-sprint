var container = document.getElementById("category-container");

categories.forEach(function (categoria) {
  var div = document.createElement("div");
  div.className = "col s3";

  var p = document.createElement("p");

  var label = document.createElement("label");

  var input = document.createElement("input");
  input.type = "checkbox";
  input.className = "filled-in";
  input.id = categoria.key;
  input.name = "categories";
  input.value = categoria.key;
  input.addEventListener("change", verifySelectAll);

  var span = document.createElement("span");
  span.innerHTML = `<i class="${categoria.icon}"></i> ${categoria.description}`;

  label.appendChild(input);
  label.appendChild(span);

  p.appendChild(label);

  div.appendChild(p);

  container.appendChild(div);
});

// Adicionando a opção "Selecionar todos"
var divSelectAll = document.createElement("div");
divSelectAll.className = "col s4";

var pSelectAll = document.createElement("p");

var labelSelectAll = document.createElement("label");

var inputSelectAll = document.createElement("input");
inputSelectAll.type = "checkbox";
inputSelectAll.className = "filled-in";
inputSelectAll.id = "selectAll";
inputSelectAll.name = "selectAll";
inputSelectAll.addEventListener("change", selectAll);

var spanSelectAll = document.createElement("span");
spanSelectAll.innerHTML = "Selecionar todos";

labelSelectAll.appendChild(inputSelectAll);
labelSelectAll.appendChild(spanSelectAll);

pSelectAll.appendChild(labelSelectAll);

divSelectAll.appendChild(pSelectAll);

container.appendChild(divSelectAll);

// Função para selecionar todos os checkboxes
function selectAll() {
  var checkboxes = document.getElementsByName("categories");
  var checkboxSelectAll = document.getElementById("selectAll");

  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = checkboxSelectAll.checked;
  }
}

// Função para verificar se todos os checkboxes estão marcados
function verifySelectAll() {
  var checkboxes = document.getElementsByName("categories");
  var checkboxSelectAll = document.getElementById("selectAll");
  var isAllChecked = true;

  for (var i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      isAllChecked = false;
      break;
    }
  }

  checkboxSelectAll.checked = isAllChecked;
}
