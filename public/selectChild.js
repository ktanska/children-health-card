$(document).ready(function()
{
	$("#button-show-panel").click(function(){
		$('#panel').show().animate({"right":"+=300px"},200);
		$("#button-hide-panel").show();
		$("#button-show-panel").hide();
	});
	$("#button-hide-panel").click(function(){
		$('#panel').animate({"right":"-=300px"},200);
		$("#button-hide-panel").hide();
		$("#button-show-panel").show();
	});
});
/**
 * sends a request to the specified url from a form. this will change the window location.
 * @param {string} path the path to send the post request to
 * @param {object} params the paramiters to add to the url
 * @param {string} [method=post] the method to use on the form
 */

function post(childName){
var query = "?childName=" + childName;
window.location.href = "info-child.html" + query;
}
function searchChild() {
        var config = {
          apiKey: "AIzaSyDVcEdnG5MIp0n3i6WwKdLX84ns6qqYH5M",
          authDomain: "children-health-card.firebaseio.com",
          databaseURL: "https://children-health-card.firebaseio.com",
          projectId: "children-health-card",
          storageBucket: "children-health-card.appspot.com",
          messagingSenderId: "933681429514"
        };
        firebase.initializeApp(config);

        var user;

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log(user);
                var query = firebase.database().ref("Children/" + user.uid).orderByKey();
                query.once("value")
                  .then(function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                      var key = childSnapshot.key;
                      var childData = childSnapshot.val();
                      var node = document.createElement("h1");
                      var nameNode = document.createTextNode(key);
                      var aNode = document.createElement("a");
                      aNode.className = "btn";
                      aNode.appendChild(nameNode);
                      var element = document.getElementById("panel");
                      node.appendChild(aNode);
                      element.appendChild(node);
                      aNode.addEventListener( 'click', function(){
                        //var query = "?childName=" + key;
                        //window.location.href = "info-child.html" + query;
                        getInfo(key);
                      });
                      console.log(key);
                  });
                });
            } else {
                console.log('No user is signed in.');
            }
        });
}
function getInfo(childName) {
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(user);
        user = firebase.auth().currentUser;
        firebase.database().ref('Children/' + user.uid + '/' + childName).once('value').then(function(snapshot) {
            var height = document.createElement("p");
            var date = document.createElement("p");
            var name = document.createElement("p");
            var surname = document.createElement("p");
            var pesel = document.createElement("p");
            var weight = document.createElement("p");
            var heightNode = document.createTextNode("Wzrost: " + snapshot.val().height);
            var weightNode = document.createTextNode("Waga: " + snapshot.val().weight);
            var peselNode = document.createTextNode("PESEL: " + snapshot.val().pesel);
            var nameNode = document.createTextNode("Imię: " + snapshot.val().name);
            var surnameNode = document.createTextNode("Nazwisko: " + snapshot.val().surname);
            var dateNode = document.createTextNode("Data urodzenia: " + snapshot.val().date);

            height.appendChild(heightNode);
            weight.appendChild(weightNode);
            pesel.appendChild(peselNode);
            name.appendChild(nameNode);
            surname.appendChild(surnameNode);
            date.appendChild(dateNode);

            var element = document.getElementById("div1");
            var elementMenu = document.getElementById("div2");

             while (elementMenu.hasChildNodes()) {
                    elementMenu.removeChild(elementMenu.childNodes[0]);
             }
             //edycja danych dziecka
             var aNode = document.createElement("a");
             aNode.innerHTML = "Edytuj dane";
             aNode.className = "btn";
             elementMenu.appendChild(aNode);

             aNode.addEventListener( 'click', function(){
                var query = "?editChildData=" + childName;
                window.location.href = "editChild.html" + query;
             });
               // lista uczulen
               //DONE
             var alNode = document.createElement("a");
             alNode.innerHTML = "Alergie";
             alNode.className = "btn";
             elementMenu.appendChild(alNode);

             alNode.addEventListener( 'click', function(){
                 var query = "?allegryList=" + childName;
                 window.location.href = "someList.html" + query;
             });
                // lista chorób
             var vNode = document.createElement("a");
             vNode.innerHTML = "Lista chorób";
             vNode.className = "btn";
             elementMenu.appendChild(vNode);

             vNode.addEventListener( 'click', function(){
                var query = "?vaccineList=" + childName;
                window.location.href = "someList.html" + query;
             });
//                // lista chorob
//             var viNode = document.createElement("a");
//             viNode.innerHTML = "Lista chorób"
//             viNode.className = "btn";
//             elementMenu.appendChild(viNode);
//
//             viNode.addEventListener( 'click', function(){
//                var query = "?vaccinationsList=" + childName;
//                window.location.href = "someList.html" + query;
//             });

             // lista lekow
             //DONE
             var oNode = document.createElement("a");
             oNode.innerHTML = "Leki"
             oNode.className = "btn";
             elementMenu.appendChild(oNode);

             oNode.addEventListener( 'click', function(){
                var query = "?medicineList=" + childName;
                window.location.href = "somelist.html" + query;
             });

             while (element.hasChildNodes()) {
                element.removeChild(element.childNodes[0]);
              }
            element.appendChild(name);
            element.appendChild(surname);
            element.appendChild(pesel);
            element.appendChild(date);
            element.appendChild(weight);
            element.appendChild(height);
        });
    } else {
        console.log('No user is signed in.');
    }
});
}
