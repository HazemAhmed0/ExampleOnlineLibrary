var LogInState;
var alerted;
async function logMembers() {
    let user = document.getElementById("user").value
    let password = document.getElementById("pword").value
    let m = JSON.parse(localStorage.getItem("MembersDataLocal"))
    m.forEach(element => {
        if (element.username == user && element.password == password) {
            console.log('correct')
            localStorage.setItem("LoggedId", element.userid)
            console.log(element.userid)
            LogInState = true;
            localStorage.setItem('LoggedIn', true);
            var newWindow = window.open('../index.HTML', "_self");
        }
        else if(!alerted) {
            console.log('false')
            LogInState= false;
            localStorage.setItem('LoggedIn', false);
            d= document.getElementById('status')
            d.innerText='Invalid user/password'
            alerted=true
        }
    });

}