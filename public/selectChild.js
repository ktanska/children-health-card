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
                        var query = "?childName=" + key;
                        window.location.href = "info-child.html" + query;
                      });
                      console.log(key);
                  });
                });
            } else {
                console.log('No user is signed in.');
            }
        });
}


