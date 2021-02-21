// check password is valid 
// Valid password criteria
// 6 char minimum

const passkey = document.getElementById('password');
if (passkey.value.length <6) {
    alert("invalid password")
}