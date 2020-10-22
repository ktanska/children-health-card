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
    var name = $('#name').val();
    var surname = $('#surname').val();
    var pesel = $('#pesel').val();
    var weight = $('#weight').val();
    var height = $('#height').val();
    var birth = $('#birth').val();
    var userId = firebase.auth().currentUser.uid;
    var ref = firebase.database().ref('Children/');
    var idRef = ref.child(userId);
    var newRef = idRef.child(name);

       newRef.set({
        name: name,
        surname: surname,
        weight: weight,
        height: height,
        date: birth,
        pesel: pesel
    });
}

$(window).load(function () {

  $("#addChildForm").submit(submitData);

});
