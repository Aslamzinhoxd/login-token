function login(token) {
    setInterval(() => {
        document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`;
    }, 100);
    setTimeout(() => {
        location.reload();
    }, 2500);
}
login("Token_Here");
