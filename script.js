window.onload = function () {
    alert('What is the secret key binding?');
};

document.addEventListener('keydown', (e) => {
    if (e.key == "b" && e.ctrlKey) {
        alert('you find the secret key binding');
        document.getElementById('success').style.filter = "blur(0px)";
    }
});