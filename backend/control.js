function snackbar(message) {
    var x = document.getElementById("snackbar");
    if (message === null || message === ""){
        message = "No message";
    }
    x.innerText = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3200);
  }