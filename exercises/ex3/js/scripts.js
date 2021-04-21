var colors = ["#ffccff", "#ffb3cc", "#ffb3b3", "#ecb3ff", "#99c2ff", "#ffff66"];
var cntr = 1;
function count() {
    var myName = "Rozner";
    return 2 * myName.length;
}
function hideColor() {

    if (this.style.backgroundImage=="") {
        this.style.backgroundImage = "url(images/trump.jpg)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundSize = "344px 344px";
    }
    else {
            this.style.backgroundImage = "";
            
    }
}

function add() {
    var main = document.getElementById("main3");
    if(cntr % 3 == 2){
        main.innerHTML += "<div class=\"showpic\"><section></section></div>"; 
    }
    else{
    main.innerHTML += "<div class=\"showpic\"></div>";
    }
    document.getElementById("addPic").onclick = add;
    document.getElementsByTagName("div")[cntr].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    cntr++;
    for (i = 1; i < cntr; i++) {
        document.getElementsByTagName("div")[i].onclick = hideColor;
    }
}

function start() {
    var main = document.getElementById("main3");
    main.innerHTML += "<div><article id=\"addPic\"></article></div>";
    document.getElementsByTagName("div")[0].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    for (i = 1; i < count(); i++) {
        if (i % 3 == 2) {
            main.innerHTML += "<div class=\"showpic\"><section></section></div>";
            document.getElementsByTagName("div")[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            cntr++;
        }
        else {
            main.innerHTML += "<div class=\"showpic\"></div>";
            document.getElementsByTagName("div")[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            cntr++;
        }
    }
    document.getElementById("addPic").onclick = add;

    for (i = 1; i < cntr; i++) {
        document.getElementsByTagName("div")[i].onclick = hideColor;
    }
    document.getElementById("addPic").onclick = add;
}
window.onload = start;