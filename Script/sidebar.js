function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  // $("#mySidenav").css('box-shadow', '10px 10px 10px 15px #cccccc');
  $("#overay").show();
  document.getElementById('notifications').style.opacity= '0'
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  $("#overay").hide();
  // $("#mySidenav").css('box-shadow', 'none');
}

$("#overay").on("click", function (e) {
  closeNav();
});

$(document).on("keyup", function (e) {
  if (e.key === "Escape") {
    closeNav();
  }
});
