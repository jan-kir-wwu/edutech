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

const login = function() {

  label = document.getElementById('loginbutton');
  const idname = label.textContent;

  switch (idname) {
    case "Anna":
      window.location.href = 'index2.html';;
      break;

    case "Yang":
      window.location.href = 'html/lowgrade.html';
      break;

    default:
      break;
  }
}
