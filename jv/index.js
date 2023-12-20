var siteNameInput = document.getElementById("siteNameInput");

var siteUrlInput = document.getElementById("siteUrlInput");
// var btn = document.getElementById("btn");

bookMarkers = [];

if (localStorage.getItem("markers") != null) {
  bookMarkers = JSON.parse(localStorage.getItem("markers"));
  displayData();
}

// btn.onclick = function () {
//   addProduct();
// };

function addProduct() {
  if ( urlLocate()){
    var markers = {
      Name: siteNameInput.value,
      Url: siteUrlInput.value,
    };
  
  
    bookMarkers.push(markers);
    localStorage.setItem("markers", JSON.stringify(bookMarkers));
  
    clearForm();
  
    displayData();
  }
}

function clearForm() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}

function displayData() {
  var box = "";

  for (var i = 0; i < bookMarkers.length; i++) {
    box += `<tr>
        <td>${i + 1}</td>
        <td>${bookMarkers[i].Name}</td>
        <td>
        <button class="btn btn-warning ">
        <a href="${bookMarkers[i].Url}" class="text-black  llink-underline link-underline-opacity-04l " target="_blank"><i class="fa-solid fa-eye"></i> Visit</a>
        </button>
        </td>
        <td>  <button class="btn btn-danger " onclick = " deleteItem (${i} )  " ><i class="fa-regular fa-trash-can"></i> delete</button></td>

      </tr>`;
  }

  document.getElementById("tableBody").innerHTML = box;
}

function deleteItem(index) {
  bookMarkers.splice(index, 1);
  localStorage.setItem("markers", JSON.stringify(bookMarkers));
  displayData();
}

function urlLocate() {
  var url = document.getElementById("siteUrlInput").value;
  var regexp =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (url != "") {  }


    if (regexp.test(url)) {
      siteUrlInput.classList.add("is-valid")
      siteUrlInput.classList.remove("is-invalid")
      return true

    }

   else {
    siteUrlInput.classList.add("is-invalid")
    siteUrlInput.classList.remove("is-valid")
    return false
  }
}
