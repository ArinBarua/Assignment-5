
//   alert("Hello! I am an alert box!");

function getColor() {
    let a = Math.floor(Math.random() * 360);
    let b = Math.floor(Math.random() * 50) + 50;
    let c = Math.floor(Math.random() * 30) + 70;
    return `hsl(${a}, ${b}%, ${c}%)`;
}

document.getElementById("theme-btn").addEventListener("cliick", changeTheme);
function changeTheme() {
    let bgColor = getColor();
    document.body.style.backgroundColor = bgColor;
    // console.log("thik ache");
}

document.getElementById("blog").addEventListener("click", function() {
    window.location.href = "./blog.html";
});
