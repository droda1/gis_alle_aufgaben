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
    var save=0;
  

function changeImg() {
    
    if (this.id == "eyes") {
            do{
                i = Math.floor(Math.random() * eyes.length);
            }while(save==i)
        
            this.childNodes[1].src = eyes[i];
            save=i;
        
    } else if (this.id == "nose") {
        do{
             i = Math.floor(Math.random() * nose.length);
         }while(save==i)

        this.childNodes[1].src = nose[i];
        save=i;
    } else if (this.id == "mouth") {
        do{
        var i = Math.floor(Math.random() * mouth.length);
            }while(save==i)
        this.childNodes[1].src = mouth[i];
        save=i;
    }
}

document.getElementById("eyes").addEventListener("click", changeImg);
document.getElementById("nose").addEventListener("click", changeImg);
document.getElementById("mouth").addEventListener("click", changeImg);