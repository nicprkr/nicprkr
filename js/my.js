function showWeb(){
    document.getElementById("port1").style.display = "block";
    document.getElementById("port2").style.display = "none";
    document.getElementById("port3").style.display = "none";

}

function showGraph(){
    document.getElementById("port1").style.display = "none";
    document.getElementById("port2").style.display = "block";
    document.getElementById("port3").style.display = "none";

};
                                               
function showMo(){
    document.getElementById("port1").style.display = "none";
    document.getElementById("port2").style.display = "none";
    document.getElementById("port3").style.display = "block";
};

function showAll(){
    document.getElementById("port1").style.display = "block";
    document.getElementById("port2").style.display = "block";
    document.getElementById("port3").style.display = "block";
}