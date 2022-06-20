
(function () {
    b = JSON.parse(localStorage.getItem("BookDataLocal"))
    console.log(b)

    document.getElementById("id").value = b.length
})();


function addbook(id, title, auth, pubdate, desc, tags, cover) {
    b = JSON.parse(localStorage.getItem("BookDataLocal"))
    console.log(b)
    let Entry = {
        "id": id,
        "title": title,
        "author": auth,
        "publishdate": pubdate,
        "desc": desc,
        "rating": 0,
        "state": true,
        "tags": tags.split(","),
        "image": cover
    }
    
    b.push(Entry)
    localStorage.setItem("BookDataLocal", JSON.stringify(b))
    console.log(b)
    return true


}