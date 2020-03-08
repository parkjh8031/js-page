/*tablet, mobile sidemenu open*/
function openMenu(){
    var sidemenu = document.querySelector(".sidemenu");
    var content = document.querySelector(".content");
    var display = sidemenu.style.display;

    if(display === "none"){
        sidemenu.style.display = "block";
        content.style.width = "calc(100% - 200px)";
    }
    else if(display === "block"){
        sidemenu.style.display = "none";
        content.style.width = "100%";
    }
    else{
        sidemenu.style.display = "block";
        content.style.width = "calc(100% - 200px)";
    }
}

/* menu children open */
var gnbli =  document.querySelectorAll(".gnb > li");
gnbli.forEach(function(tag){
    tag.addEventListener("click",openGncChild);
});

function openGncChild(){
    if(this.children[1]){
        var children = this.children[1];
        var display = children.style.display;
        children.style.display = "block";

        if(display === "block"){
            children.style.display = "none";
        } else if(display === "none"){
            children.style.display = "block";
        } else {
            children.style.display = "block";
        }    
    };
};