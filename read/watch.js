async function main() {

    // Settings ////////////////////////////////////////////////////////////////////

    var enabled = false;

    ////////////////////////////////////////////////////////////////////////////////

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('v')

    if (enabled !== true) {
        window.location.replace("./");
    }

    if (id === null || id === "") {
        window.location.replace("/invalid");
        // document.getElementById("title_display").innerText = "View Unavailable";
        // document.getElementById("information_display_bar").innerText = "More than enough views | More than enough favourites | 1-1-1970";
        // document.getElementById("information_description").innerText = "It seems like this viewing thing is unavailable. Please try again later or return to the main menu.";
    }
}
