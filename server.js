// server.js
// load the things we need
var express = require('express');
var app = express();

var firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyDecOLfodwRUxqQb7f1FoRQ6NxQhEmwbrE",
  authDomain: "fypjweek1task.firebaseapp.com",
  databaseURL: "https://fypjweek1task.firebaseio.com",
  projectId: "fypjweek1task",
  storageBucket: "fypjweek1task.appspot.com",
  messagingSenderId: "719203061117",
  appId: "1:719203061117:web:df673fc2dff3e66b"

}

firebase.initializeApp(firebaseConfig);
database = firebase.database();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// // index page 
// app.get('/', function (req, res) {
//     var ref = database.ref('Courses');
//     // var ref = firebase.database().ref("users");
//     var returnfullarray = [];
//     ref.on("value", function (snapshot) {
//         var returnArr = [];
//         snapshot.forEach(function (childSnapshot) {

//             var childData = childSnapshot.val();
//             returnArr.push(childData)


//         });
//         returnfullarray = returnArr
//     });

//     res.render('pages/index', {
//         test: returnfullarray
//     });

// });

app.get('/', function(req, res) {
    var ref = database.ref('Courses');

    ref.once("value", function (snapshot) {
        var returnarray= [];
        snapshot.forEach(function (childSnapshot) {    
            childData = childSnapshot.val();
            returnarray.push(childData)
        });
        res.render('pages/index', {
            test: returnarray
        });    
    });
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');