(function(){
    if (localStorage.getItem("BookDataLocal") == null){
        localStorage.setItem("BookDataLocal", JSON.stringify(booksdata))
    }
    if (localStorage.getItem("MembersDataLocal") == null){
        localStorage.setItem("MembersDataLocal", JSON.stringify(membersdata))
    }
    
})();