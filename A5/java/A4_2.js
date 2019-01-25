eyes_id = document.getElementById("eyes");
nose_id = document.getElementById("nose");
mouth_id = document.getElementById("mouth");

eyes_id.addEventListener("mousedown", changePic);
nose_id.addEventListener("mousedown", changePic);
mouth_id.addEventListener("mousedown", changePic);

eyes_id.addEventListener("touchdown", changePic);
nose_id.addEventListener("touchdown", changePic);
mouth_id.addEventListener("touchdown", changePic);


var startPos;
var position;
var element;
//Image Array
var eyes = [
    "Images/dronovda-eyes.jpg",
    "Images/zindfeli-eyes.jpeg",
    "Images/hallerjo-eyes.jpg",
    "https://webuser.hs-furtwangen.de/~mickachr/GIS/mickachr-eyes"    
];

var nose = [
    "Images/dronovda-nose.jpg",
    "Images/zindfeli-nose.jpeg",
    "Images/hallerjo-nose.jpg",
    "https://webuser.hs-furtwangen.de/~mickachr/GIS/mickachr-nose"
    
];

var mouth = [
    "Images/dronovda-mouth.jpg",
    "Images/zindfeli-mouth.jpeg",
    "Images/hallerjo-mouth.jpg",
    "https://webuser.hs-furtwangen.de/~mickachr/GIS/mickachr-mouth"
    
];
function generatePic(img_arr, element_pic) {
    for (let i = 0; i < img_arr.length; i++) {
        var image = document.createElement("img");
        image.src = img_arr[i];
        image.setAttribute("id", "stack");
        element_pic.appendChild(image);
    }
}
function changePic(event){
    event.preventDefault();
    element = this;
    if(event.type=="mousedown"){
        startPos = event.screenX;
        window.addEventListener("mousemove", changeIt);
        window.addEventListener("mouseup", endPos);
    } else if (event.type=="touchdwon"){
        startPos = event.touches[0].screenX;
        window.addEventListener("touchmove", changeIt);
        window.addEventListener("touchup", endPos);
    }
}
function changeIt(event){
    if(event.type=="mousemove"){
        position = event.screenX - startPos;
        element.lastChild.style.left = position + "px";
        }
    if(event.type=="touchmove"){
        position = event.touches[0].screenX - startPos;
        element.lastChild.style.left = position +"px";
        }
}

generatePic(eyes, eyes_id);
generatePic(nose, nose_id);
generatePic(mouth, mouth_id);

function endPos(event){
    if(event.type=="mouseup"){
        if(position>300 || position<-300){
        element.lastChild.removeAttribute("style");
        element.insertBefore(element.lastChild, element.childNodes[3]);} 
        else {
            element.lastChild.removeAttribute("style");
        }
        window.removeEventListener("mousemove", changeIt);
        window.removeEventListener("mouseup", endPos)
        }else if(event.type=="touchup"){
            if(position>300 || position<-300){
                element.lastChild.removeAttribute("style");
                element.insertBefore(element.lastChild, element.childNodes[3]);} 
                else {
                    element.lastChild.removeAttribute("style");
                }
                window.removeEventListener("touchmove", changeIt);
                window.removeEventListener("touchup", endPos)

}
    

}