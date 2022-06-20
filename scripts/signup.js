
function addmember(email, user, pword, isAdmin) {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    let ad
    if(isAdmin == "yes"){
        ad = true
    }else if(isAdmin == "no") {
        ad = false
    }


    m = JSON.parse(localStorage.getItem("MembersDataLocal"))
    let Entry = {
        "userid": m.length,
        "username": user,
        "email": email,
        "password": pword,
        "isAdmin": ad,
        "memSince" : currentDate,
        "BookState": false,
        "BorrowedBook": "",
        "BorrowedDate": "",
        "ReturnDate": ""
    }
    
    m.push(Entry)
    localStorage.setItem("MembersDataLocal", JSON.stringify(m))
    return true

}