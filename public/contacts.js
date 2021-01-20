var config = {
  apiKey: "AIzaSyDVcEdnG5MIp0n3i6WwKdLX84ns6qqYH5M",
  authDomain: "children-health-card.firebaseio.com",
  databaseURL: "https://children-health-card.firebaseio.com",
  projectId: "children-health-card",
  storageBucket: "children-health-card.appspot.com",
  messagingSenderId: "933681429514"
};
firebase.initializeApp(config);
    var s;
    var elementMenu = document.getElementById("addNewItem");

     while (elementMenu.hasChildNodes()) {
            elementMenu.removeChild(elementMenu.childNodes[0]);
     }

    var newItemNode = document.createElement("a");
     newItemNode.innerHTML = "Dodaj nowy"
     newItemNode.className = "btn";
     elementMenu.appendChild(newItemNode);

     newItemNode.addEventListener( 'click', function(){
         var aForm = document.createElement("form");
         var alName = document.createElement("input");
         var nrName = document.createElement("input");
         var typeName = document.createElement("input");
         var addrName = document.createElement("input");

         alName.style.display = "block";
         nrName.style.display = "block";
         typeName.style.display = "block";
         addrName.style.display = "block";
         alName.setAttribute('type', 'text');
         alName.setAttribute('label', 'alName');
         alName.setAttribute('id', 'alName');
         alNameLabel = document.createElement("label");
         alNameLabel.setAttribute('for', 'alName');
         alNameLabel.innerHTML = "Nazwisko lekarza:";

         nrName.setAttribute('type', 'text');
         nrName.setAttribute('label', 'nrName');
         nrName.setAttribute('id', 'nrName');
         nrNameLabel = document.createElement("label");
         nrNameLabel.setAttribute('for', 'nrName');
         nrNameLabel.innerHTML = "Numer telefonu:";

         typeName.setAttribute('type', 'text');
         typeName.setAttribute('label', 'typeName');
         typeName.setAttribute('id', 'typeName');
         typeNameLabel = document.createElement("label");
         typeNameLabel.setAttribute('for', 'typeName');
         typeNameLabel.innerHTML = "Rodzaj:";

         addrName.setAttribute('type', 'text');
         addrName.setAttribute('label', 'addrName');
         addrName.setAttribute('id', 'addrName');
         addrNameLabel = document.createElement("label");
         addrNameLabel.setAttribute('for', 'addrName');
         addrNameLabel.innerHTML = "Adres:";

         s = document.createElement("input");
         s.setAttribute('type',"submit");
         s.setAttribute('value',"Prześlij");
         s.style.display = "block";
         s.className = "btn";

         aForm.appendChild(alNameLabel);
         aForm.appendChild(alName);
         aForm.appendChild(nrNameLabel);
         aForm.appendChild(nrName);
         aForm.appendChild(typeNameLabel);
         aForm.appendChild(typeName);
         aForm.appendChild(addrNameLabel);
         aForm.appendChild(addrName);

         aForm.appendChild(s);
         document.getElementById('formItem').appendChild(aForm);

         s.onclick = function(){
         var alName = $('#alName').val();
              if (alName) {
              var nrName = $('#nrName').val();
              var typeName = $('#typeName').val();
              var addrName = $('#addrName').val();
              var userId = firebase.auth().currentUser.uid;
              var ref = firebase.database().ref('Children/');
              var idRef = ref.child(userId + '/Contacts');
              var newRef = idRef.child(alName)
              newRef.set({
                  doctorName: alName,
                  doctorNumber: nrName,
                  doctorType: typeName,
                  doctorAddress: addrName
              });
              }
         };
     });
firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
       user = firebase.auth().currentUser;
      var query = firebase.database().ref('Children/' + user.uid + '/Contacts').orderByKey();
       query.once("value")
         .then(function(snapshot) {
             snapshot.forEach(function(childSnapshot) {
             var key = childSnapshot.key;
             var childData = childSnapshot.val();
       var doctorName = document.createElement("b");
       var doctorNumber = document.createElement("p");
       var doctorType = document.createElement("p");
       var doctorAddress = document.createElement("p");
       var doctorNameNode = document.createTextNode("Nazwisko lekarza: " + childSnapshot.val().doctorName);
       var doctorTypeNode = document.createTextNode("Rodzaj: " + childSnapshot.val().doctorType);
       var doctorNumberNode = document.createTextNode("Nr telefonu: " + childSnapshot.val().doctorNumber);
       var doctorAddressNode = document.createTextNode("Adres: " + childSnapshot.val().doctorAddress);
       doctorName.appendChild(doctorNameNode);
       doctorNumber.appendChild(doctorNumberNode);
       doctorType.appendChild(doctorTypeNode);
       doctorAddress.appendChild(doctorAddressNode);

       var element = document.getElementById("div1");

      element.appendChild(doctorName);
      element.appendChild(doctorNumber);
      element.appendChild(doctorType);
      element.appendChild(doctorAddress);
               });
              });
               } else {
                   console.log('No user is signed in.');
               }
           });