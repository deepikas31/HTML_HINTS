
document.getElementById('loginBtn').addEventListener('click', function(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    
    document.getElementById('username_errorMsg').innerText = '';
    document.getElementById('email_errorMsg').innerText = '';
    document.getElementById('password_errorMsg').innerText = '';

    var request_emailregex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(username == '') {
        document.getElementById('username_errorMsg').innerText = 'Username is required';
        document.getElementById('username_errorMsg').style.color = "red";
    } else if(email == '') {
        document.getElementById('email_errorMsg').innerText = 'Email is required';
        document.getElementById('email_errorMsg').style.color = "red";
    }  else if(!email.match(request_emailregex)){
        document.getElementById('email_errorMsg').innerText = 'Email Format Is Wrong';
        document.getElementById('email_errorMsg').style.color = "red";
    } else if(password == '') {
        document.getElementById('password_errorMsg').innerText = 'Password is required';
        document.getElementById('password_errorMsg').style.color = "red";
    } else if(!(password == '') && password.length < 8){
            document.getElementById('password_errorMsg').innerText = 'Characters must be greater than 8';
            document.getElementById('password_errorMsg').style.color = "red";
    } 
    else {
        alert('Submitted');
    }
});
