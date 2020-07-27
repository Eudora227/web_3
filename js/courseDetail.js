document.getElementById("intro").addEventListener("click",function () {
    document.getElementById("left1").style.display="block";
    document.getElementById("left2").style.display="none";
    document.getElementById("intro").classList.add("active");
    document.getElementById("dagang").classList.remove("active");
});
document.getElementById("dagang").addEventListener('click',function () {
    document.getElementById("left2").style.display="block";
    document.getElementById("left1").style.display="none";

    document.getElementById("dagang").classList.add("active");
    document.getElementById("intro").classList.remove("active");
});

document.getElementById("btn").addEventListener("click",function () {
    window.location.href="coursePlay.html";

})