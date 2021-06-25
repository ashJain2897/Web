function makepdf(){
  var config = {
    apiKey: "AIzaSyCai1TBt_bfhbVYlzWj9VIwMnJ_8O_h6zE",
    authDomain: "python-example-3ebd2.firebaseapp.com",
    databaseURL: "https://python-example-3ebd2.firebaseio.com",
    projectId: "python-example-3ebd2",
    storageBucket: "python-example-3ebd2.appspot.com",
    messagingSenderId: "690553899684",
    appId: "1:690553899684:web:baf1c8eb2d53c726"
  };

  firebase.initializeApp(config);
  // Initialize Firebase
  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }
  //alert("Here1");

  var dbVal = firebase.database();
  var dbRef = dbVal.ref('Saswad');
  //alert("Here21");
  //console.log(dbRef);

  dbRef.on('value', fetchData, errData);
}

function fetchData(data) {
  console.log(data.val());
}
function errData(err) {
  console.log("Err"+err);
}
