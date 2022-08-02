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
  txtform = document.getElementById('idlabel');
  const idname = txtform.value;

  switch (idname) {
    case "Anna":
      window.location = 'index2.html';
      break;

    case "Yang":
      window.location = 'html/lowgrade.html';
      break;

    default:
      break;
  }
}

function altvid() {
  document.getElementById('video').src = 'https://www.youtube.com/embed/tgbNymZ7vqY';
}
