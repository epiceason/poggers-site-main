async function secureConnection(){
    if (location.protocol !== 'https:') {
        // window.location.replace("/error/?type=ConnectionInsecure");
    }
}