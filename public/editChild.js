var config = {
  apiKey: "AIzaSyDVcEdnG5MIp0n3i6WwKdLX84ns6qqYH5M",
  authDomain: "children-health-card.firebaseio.com",
  databaseURL: "https://children-health-card.firebaseio.com",
  projectId: "children-health-card",
  storageBucket: "children-health-card.appspot.com",
  messagingSenderId: "933681429514"
};
firebase.initializeApp(config);

var childData = firebase.database().ref('childData');

var submitData = function() {

    var query = decodeURIComponent(window.location.search);
    query = query.substring(1);
    var queries = query.split("&");
    for (var i = 0; i < queries.length; i++) {
        var childName = queries[i].split("=");
    }

    var timeInMs = Date.now();
    var weight = $('#weight').val();
    var height = $('#height').val();
    var userId = firebase.auth().currentUser.uid;
    var ref = firebase.database().ref('Children/');
    var idRef = ref.child(userId + '/' + childName[1]);
    var newRef = idRef.child(timeInMs);

       newRef.set({
        weight: weight,
        height: height
    });
}

$(window).load(function () {

  $("#editChildForm").submit(submitData);

});
