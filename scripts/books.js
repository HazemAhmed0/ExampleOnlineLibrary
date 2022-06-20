let stars = []
let HoveredStar
let set = false
stars.push(document.getElementById("s1"))
stars.push(document.getElementById("s2"))
stars.push(document.getElementById("s3"))
stars.push(document.getElementById("s4"))
stars.push(document.getElementById("s5"))

function HoverStar(a){
    if (!set){
        HoveredStar = a
        for (i = 0;i<5;i++){
            if (a == stars[i]){
                for(j = 0; j<=i;j++){
                    stars[j].src = "../assets/starF.png"
                }
            }
        }
    }
}

function LeaveStar(){
    if (!set){
        for (i = 0;i<5;i++){
            stars[i].src = "../assets/star.png"
        }
    }
}

function Rate(){
    rating = HoveredStar.id.substring(1)
    set = true
}

