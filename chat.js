// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
var firebaseConfig = 
{
    apiKey: "AIzaSyBhWlZ3LaFSk0IY31LYv0nLo6q0g3ds2oI",
    authDomain: "projeto-matematica.firebaseapp.com",
    databaseURL: "https://projeto-matematica-default-rtdb.firebaseio.com",
    projectId: "projeto-matematica",
    storageBucket: "projeto-matematica.appspot.com",
    messagingSenderId: "564141926982",
    appId: "1:564141926982:web:b1b2dd107b28b480cef847",
    measurementId: "G-GBP16496E2"
}

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage
    */
    localStorage.setItem("user_name", user_name)
    /* 
    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
    window.location = "chat_room.js"
}



