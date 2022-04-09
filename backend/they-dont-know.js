const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pass = urlParams.get('pass')

async function checkpass() {
    if (pass !== "damnbruh"){
        window.location.replace("they-dont-know-locked.html");
    } else {
        document.getElementById("loader-bg").style.display = "none";
    }
}