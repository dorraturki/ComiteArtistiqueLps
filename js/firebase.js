// Library
var firebaseConfig = {
    apiKey: "AIzaSyAecB-vSSD3HFKnwX-uNXrb4Ums6qcygeY",
    authDomain: "comita-8d2be.firebaseapp.com",
    databaseURL: "https://comita-8d2be.firebaseio.com",
    projectId: "comita-8d2be",
    storageBucket: "comita-8d2be.appspot.com",
    messagingSenderId: "610234716805",
    appId: "1:610234716805:web:54bf40055d960fd0804fec",
    measurementId: "G-1R28KC1SRX"
  };
  firebase.initializeApp(firebaseConfig);
// /-Library
  
var messagesRef = firebase.database().ref('messages') ;

document.getElementById('contact_Form').addEventListener('submit' , submitForm) ;
function submitForm(e){
  e.preventDefault();
  var nom = getInputVal('nom') ;
  var email = getInputVal('email') ;
  var sujet = getInputVal('sujet') ;
  var texte = getInputVal('texte') ;

  saveMessage(nom, email, sujet, texte);
  alert(hello)
}

  function getInputVal(id){
    return document.getElementById(id).value;
  }

  function saveMessage(nom, email, sujet, texte){
    var newMessageRef = messagesRef.push() ;
    newMessageRef.set({
      nom: nom,
      email: email,
      sujet: sujet,
      texte: texte
    })
  }
