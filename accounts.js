let username = "";
let dob = "";

function Nextinfo() {
    username = document.getElementById('username').value.trim();
    dob = document.getElementById('DOB').value.trim();

    if(username !== "" && dob !== "") {
        document.getElementById('signing').innerHTML = `
            <h1>Register</h1>
            <form action="/register" method="post" class="Reg">
                <label for="Email">E-mail:</label><br>
                <input type="email" id="Email" name="Email" placeholder="Example@gmail.com" style="size:50"><br><br>
                
                <label for="Password">Create Password:</label><br>
                <input type="password" id="Password" name="Password" required><br><br>

                <label for="Password2">Confirm Password:</label><br>
                <input type="password" id="Password2" name="Password2" required><br><br>
                
                <button class="btn secondary" id="registerBtn" onclick="back()">&#8592;Back</button>
                <button type="button" class="btn" onclick="save()">Sign Up</button>
            </form>
        `;
    } else {
        window.alert("Please fill out the form correctly.");
    }
};

function back() {
    document.getElementById('username').placeholder = username;
    document.getElementById('DOB').placeholder = dob;
};
let mail="";
let pass1="";
let pass2="";

function save() {
    mail = document.getElementById('Email').value.trim();
    pass1 = document.getElementById('Password').value;
    pass2 = document.getElementById('Password2').value;
    if(mail !== "" && pass1 !== "" && pass2 !== "") {
        if(pass1 !== pass2) {
            window.alert("Password Mismatch");
        } else {
            window.location.href = "./index.html";
        }
    } else {
        window.alert("Please fill out the registration form.");
    }
};
function Login(){
    let usr=document.getElementById('usr').value.trim();
    let pass=document.getElementById('pass').value;
    if(usr !== "" && pass !== ""){
        if(usr===username && pass===pass1){
            window.location.href = "./index.html";
            localStorage.setItem('loggedInUser', usr);
        }
        else{
            window.alert("Wrong username or password");
        }
    }
    else
        window.alert("Fill Login Credentials");
};
document.addEventListener("DOMContentLoaded", function() {
    let loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
        document.getElementById('auth').innerHTML = '<button type="button" class="btn">' + loggedInUser + '</button>';
    }
});