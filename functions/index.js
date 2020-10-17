const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');
var hbs = require('handlebars');
const admin = require('firebase-admin');

const app = express();
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');

var serviceAccount = require("./children-health-card-firebase-adminsdk-ncwgz-d4f4b52ef4.json");
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "firebase-adminsdk-ncwgz@children-health-card.iam.gserviceaccount.com"
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
