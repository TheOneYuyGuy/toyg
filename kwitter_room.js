var firebaseConfig = {
    apiKey: "AIzaSyCtqpz5BmHP7GQsmCrP0YeB_bKdTGkJ-3k",
    authDomain: "kwitter-bbf4c.firebaseapp.com",
    databaseURL: "https://kwitter-bbf4c-default-rtdb.firebaseio.com",
    projectId: "kwitter-bbf4c",
    storageBucket: "kwitter-bbf4c.appspot.com",
    messagingSenderId: "958788335154",
    appId: "1:958788335154:web:5f96ba939dcdd834a3ee2b"
  };
  firebaseConfig = {
    apiKey: "AIzaSyC5kMZ7wvJpLAT9u7Z8YBKV59XjF-aqqRE",
    authDomain: "project-93-letschat-web-app-1.firebaseapp.com",
    databaseURL: "https://project-93-letschat-web-app-1-default-rtdb.firebaseio.com",
    projectId: "project-93-letschat-web-app-1",
    storageBucket: "project-93-letschat-web-app-1.appspot.com",
    messagingSenderId: "599747272052",
    appId: "1:599747272052:web:04fa716f9c059b29902021"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
