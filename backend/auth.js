async function authentication() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token')
    const localtoken = localStorage.getItem("token")

    if (localtoken === null || localtoken === "") {
        if (token !== null || token !== ""){
            login(token);
        }
    } else if (localtoken === "beepboop69420") {
        stop();
    } else {
        window.location.replace("/error?error=not_logged_in");
    }
}

async function login(token) {
    if (token === null || token === ""){
        window.location.replace("/error?error=no_token");
    } else if (token === "testing"){
        if (typeof(Storage) !== "undefined") {
            fload = localStorage.getItem("token")
            if (fload === "beepboop69420") {
                window.location.replace("/account/");
            } else {
                localStorage.setItem("token", "beepboop69420");
                window.location.replace("/account/");
            }
        }
    } else {
        window.location.replace("/error?error=wrong_token");
    }
}

async function logout() {
    if (typeof(Storage) !== "undefined") {
        fload = localStorage.getItem("token")
        if (fload === "beepboop69420") {
            localStorage.removeItem("key")
            window.location.replace("/account/");
        } else {
            window.location.replace("/error?error=not_logged_in");
        }
    } else {window.location.replace("/error?error=storage_unsupported");}
}