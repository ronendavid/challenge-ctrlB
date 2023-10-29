// window.onload = function () {
//     alert('What is the secret key binding?');
// };

/* document.addEventListener('keyup', (e) => {
    if (e.key == "b" && e.ctrlKey) {
        alert('you find the secret key binding');
        document.getElementById('success').style.filter = "blur(0px)";
        document.getElementById('title').style.display = "none";
    }
}); */


document.addEventListener('keyup', function (e) {
    if ((e.key === "b" || e.key === "B") && e.ctrlKey) {
        alert('you find the secret key binding');
        document.getElementById('success').style.filter = "blur(0px)";
        document.getElementById('title').style.display = "none";
    }
});