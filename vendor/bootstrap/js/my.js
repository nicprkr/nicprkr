document.getElementById("wd").addEventListener("click", function({
    document.getElementById("port1").style.display = "block";
    document.getElementById("port2").style.display = "none";
    document.getElementById("port3").style.display = "none";
}));
                                               
document.getElementById("gd").addEventListener("click", function({
    document.getElementById("port1").style.display = "none";
    document.getElementById("port2").style.display = "block";
    document.getElementById("port3").style.display = "none";
}));
                                               
function showWork(){
    document.getElementById("port1").style.display = "none";
    document.getElementById("port2").style.display = "none";
    document.getElementById("port3").style.display = "block";
};