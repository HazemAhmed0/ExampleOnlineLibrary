
(function(){
    localStorage.setItem('LoggedId', null)
    var r = document.getElementById('display')
    state = localStorage.getItem('LoggedIn');
    if(localStorage.getItem('LoggedIn') == "false"){
        console.log(localStorage.getItem('LoggedIn'));
        display.innerHTML = `<button onclick="location.href='/views/signin.html'">Sign In</button> <button onclick="location.href='/views/signup.html'">Sign Up</button>`
    }
    else{
        console.log(localStorage.getItem('LoggedIn'));
        display.innerHTML = " <button class='out' onclick="+'LogOut()'+">Sign Out</button>" + "<img class='pfp' src='../assets/user.png'>"
    }
})();

function LogOut(){
    localStorage.setItem('LoggedIn', false)
    localStorage.setItem('LoggedId', null)
    var newWindow = window.open('/index.HTML', "_self");
}