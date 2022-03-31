var Loader;

function snackbar(message) {
    var x = document.getElementById("snackbar");
    if (message === null || message === ""){
        message = "No message";
    }
    x.innerText = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3200);
  }

function firstLoad() {

    if (typeof(Storage) !== "undefined") {
        fload = localStorage.getItem("firstLoad")
        if (fload === "true") {
            showPage();
        } else {
            localStorage.setItem("firstLoad", "true");
            Loader = setTimeout(showPage, 3000);
        }
    } else {
        window.location.replace("/error?error=unsupported_storage");
    }
    
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loader-bg").style.display = "none";
}