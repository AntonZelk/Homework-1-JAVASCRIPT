document.getElementById("btn2").onclick = function () {
    changeStyle();
}
document.getElementById("btn3").onclick = function () {
    deleteStyle();
}
function changeStyle () {
    document.getElementById("buttons").classList.toggle("style2");
    document.body.classList.toggle("styleBody");
}
function deleteStyle () {
    document.getElementById("buttons").style.display = "none";
    document.getElementById("container1").style.display = "flex";
}