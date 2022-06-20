var response;

(async function () {
    try {
        
        let m = JSON.parse(localStorage.getItem("MembersDataLocal"))
        
        let memid = localStorage.getItem("UserId")
        console.log(memid)
        document.getElementById("ProfilePic").src = "../assets/" + memid + '.png';
        document.getElementById("Name").innerText = m[localStorage.getItem("UserId")].username
        document.getElementById("memDate").innerText = m[localStorage.getItem("UserId")].memSince
        document.getElementById("email").innerText = m[localStorage.getItem("UserId")].email
        if (m[localStorage.getItem("UserId")].BookState) {
            document.getElementById("BorName").innerText = m[localStorage.getItem("UserId")].BorrowedBook
        } else {
            document.getElementById("BorName").innerText = "N/A"
        }
        id = localStorage.getItem("LoggedId")
        m.forEach(element => {
          if(element.userid == id && element.isAdmin == true){
              console.log('im here')
              var r = document.getElementById("Remove")
              r.innerHTML= "<button class='remove' onclick="+'deleteMember()'+">Remove Member</button>"
          }
      });
    }
    catch (error) {
        console.log(error);
    }

})();


function deleteMember(){
    b = JSON.parse(localStorage.getItem("MembersDataLocal"))
    id = localStorage.getItem("UserId")
    
    
    b.forEach(element => {
    console.log(id)
    console.log(element.userid)
      if(element.userid == id){
        b.pop(element.userid); 
      }
    });
    localStorage.setItem("MembersDataLocal", JSON.stringify(b))
    var newWindow = window.open('../views/members.HTML', "_self");
  }