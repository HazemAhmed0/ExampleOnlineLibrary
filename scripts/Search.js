async function searchall(){
    var r = document.getElementById("searchfield").value
    let searchQ = r.toLowerCase()
    var l = document.getElementById("searchreturn");
    l.innerHTML = "";
    l.innerHTML = "<div style='font-family: Open Sans, sans-serif; font-style: italic; font-weight: bold;'>Books:</div>"
    booksdata.forEach(element => {
        let f = element.title.toLowerCase()
        if(f.includes(searchQ)){
            var l = document.getElementById("searchreturn");
            l.innerHTML+=`<img src='../books/book${element.id}.jpg' id=${element.id} onclick=test(this)\>`
        }
    });
}

function test(a){
    var newWindow = window.open('../views/bookdetails.HTML', "_self");
    localStorage.setItem('Id', a.id);
    newWindow.window.bookid = a.id;
}