var n;
var response;
function test(a){
    n= a.id;
    console.log(n)
    var newWindow = window.open('../views/bookdetails.HTML', "_self");
    newWindow.window.bookid = a.id;
    localStorage.setItem('Id', a.id);
    n = a.id;
}
async function load() {
    b = JSON.parse(localStorage.getItem("BookDataLocal"))
    l = document.getElementById("outer-grid");
    b.forEach(element => {
    l.innerHTML += `<img id=${element.id} src="../${element.image}" onclick="test(this)"/>`
    });
    id = localStorage.getItem('LoggedId')
    m = JSON.parse(localStorage.getItem("MembersDataLocal"))
    console.log(id);
    m.forEach(element => {
        //console.log(element.isAdmin)
        if(element.userid == id && element.isAdmin == true){
            console.log(element.isAdmin)
            l.innerHTML += `<img id='add' src='../assets/plus-01.png' onclick="location.href='/views/addbook.html'">`
        }
    });
    

}
