// $(function() {
//   var newEntry = "<li>  </li>";

//   $("#addBtn").click(function() {
//     $("#myUL").append(newEntry);
//   });
// });

$(function() {
  let $list = $(".TodoUl");
  let $newItemForm = $("#newItemForm");

  $newItemForm.on("submit", function(e) {
    e.preventDefault();
    let text = $('input.myTodo[type="text"]').val();
    $list.append(`<li>${text}</li>`);
    $('input[type="text"]').val("");
    $(`li`).addClass("ulItem");
  });

  $list.on("click", "li", function() {
    let $this = $(this);
    $this.remove();
  });

  var myLocation = document.getElementById("my-coordinates");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayPosition);
    } else {
      myLocation.innerHTML = "Not available";
    }
  }

  function displayPosition(position) {
    myLocation.innerHTML =
      "Longitude: " +
      position.coords.longitude +
      " Latitude: " +
      position.coords.latitude;
  }
});