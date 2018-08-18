




function logout(){

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    alert ('has cerrado sesion');
window.location='index.html'
  }).catch(function(error) {
    // An error happened.
  });
}

document.getElementById('logout').addEventListener('click',logout);


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location= 'denuncia.html';

  } else {
    // No user is signed in.
    document.getElementById('logout').style.display="none";
  }
});


function  login (){
  let user = document.getElementById("correo_login").value;
  let  pwd = document.getElementById("pass_login").value;

  firebase.auth().signInWithEmailAndPassword(user, pwd).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...

    console.log("error" + errorMessage);

  });



}
document.getElementById('login').addEventListener('click',login);

function register (){

  let email = document.getElementById('correo').value;
  let passw = document.getElementById('pwd').value;
firebase.auth().createUserWithEmailAndPassword(email, passw).catch(function(error) {

  // Handle Errors here.

  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert('error '+ errorMessage);

});

// let firebaseRef = firebase.database().ref();
//
// col = {}
// col.email = document.getElementById('correo').value;
// col.nombre = document.getElementById('nombre').value;
// col.user = document.getElementById('usuario').value;
// col.passw = document.getElementById('pwd').value;
//
//
// firebaseRef.push('users').set(col);


}

document.getElementById('signup').addEventListener('click',register);
