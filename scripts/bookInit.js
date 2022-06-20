
(async function () {

  try {
    b = JSON.parse(localStorage.getItem("BookDataLocal"))
    availability = b[localStorage.getItem("Id")].state
    var r = document.getElementById("avalibility")
    if (availability) {
      r.innerText = "Available"
      r.style.backgroundColor = "rgb(174, 255, 174)"
    } else {
      r.innerText = "Out Of Stock"
      r.style.backgroundColor = "rgb(251, 65, 65)"
    }
    var r = document.getElementById("BookImage").src = "../" + b[localStorage.getItem("Id")].image;
    var r = document.getElementById("BookTitle")
    console.log(localStorage.getItem("Id"));
    r.innerText = b[localStorage.getItem("Id")].title;
    console.log(b[localStorage.getItem("Id")])
    var r = document.getElementById("BookAuth")
    r.innerText = b[localStorage.getItem("Id")].author;
    var r = document.getElementById("BookDate")
    r.innerText = b[localStorage.getItem("Id")].publishdate;
    var r = document.getElementById("BookDesc")
    r.innerText = b[localStorage.getItem("Id")].desc;
    var r = document.getElementsByClassName('tag');
    for (var i = 0; i < b[localStorage.getItem("Id")].tags.length; i++) {
      r[i].innerText = b[localStorage.getItem("Id")].tags[i];
    }
    var r = document.getElementById("CurrRate")
    r.innerText = b[localStorage.getItem("Id")].rating + "/5"


    m = JSON.parse(localStorage.getItem("MembersDataLocal"))
    id = localStorage.getItem("LoggedId")
    m.forEach(element => {
      if (element.userid == id && element.isAdmin == true) {
        console.log('im here')
        var r = document.getElementById("Remove")
        r.innerHTML = "<button class='remove' onclick=" + 'deleteBook()' + ">Remove Book</button>"
      }
    });

  }
  catch (error) {
    console.log(error);
  }

})();

function Borrow() {
  let b = JSON.parse(localStorage.getItem("BookDataLocal"))
  let cb = localStorage.getItem("Id")
  let m = JSON.parse(localStorage.getItem("MembersDataLocal"))
  let cu = localStorage.getItem("LoggedId")
  let NA = false
  let booktitle = ""
  if(cu == "null"){
    NA = true
  }
  m.forEach(element => {
    if (element.id == cu) {
      if(element.BookState == true){
        NA = true
      }
    }
  });
  b.forEach(element => {
    if (element.id == cb) {
      booktitle = element.title
      if(element.state == false){
        NA = true
      }
    }
  });

  if(NA == false){
    
    m.forEach(element => {
      if (element.userid == cu) {
        element.BorrowedBook = booktitle
        element.BookState = true
      }
    });
    b.forEach(element => {
      if (element.id == cb) {
        element.state = false

        }
    });
    localStorage.setItem("BookDataLocal", JSON.stringify(b))
    localStorage.setItem("MembersDataLocal", JSON.stringify(m))
  } else{
    alert("Can not borrow this book")
  }



}


function deleteBook() {
  b = JSON.parse(localStorage.getItem("BookDataLocal"))
  id = localStorage.getItem("Id")
  b.forEach(element => {
    if (element.id == id) {
      b.pop(element.id);
    }
  });
  localStorage.setItem("BookDataLocal", JSON.stringify(b))
  var newWindow = window.open('../views/books.HTML', "_self");
}