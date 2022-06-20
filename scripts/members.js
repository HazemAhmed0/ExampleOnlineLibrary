var r = document.getElementById("outer-grid")
var n;
var response;
function test(a){
    var newWindow = window.open('../views/memberdetails.HTML', "_self");
    newWindow.window.bookid = a.id;
    localStorage.setItem('UserId', a.id);
    n = a.id;
}
async function load() {
    m = JSON.parse(localStorage.getItem("MembersDataLocal"))
    l = document.getElementById("outer-grid");
    m.forEach(element => {
        l.innerHTML +=`<div class="memberobj" id=${element.userid} onclick="test(this)"><img class="smallPfp" src="../assets/${element.userid}.png"/> <div class="uname" >${element.username}</div></div>`
    });
}
