const showHide = function(id) {

  switch (id) {
    case "b_1":
      weekst = "week_1";
      break;

    case "b_2":
      weekst = "week_2";
      break;

    default:
      break;
  }

  var x = document.getElementById(weekst);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
