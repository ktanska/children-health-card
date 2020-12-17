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
var childName

var query = decodeURIComponent(window.location.search);
    query = query.substring(1);
    var queries = query.split("&");
    for (var i = 0; i < queries.length; i++) {
        var hrefData = queries[i].split("=");
    }
    childName = hrefData[1];
    var listKind = hrefData[0];
    console.log(childName);
    console.log(listKind);

    var elementMenu = document.getElementById("addNewItem");

     while (elementMenu.hasChildNodes()) {
            elementMenu.removeChild(elementMenu.childNodes[0]);
     }

    var newItemNode = document.createElement("a");
     newItemNode.innerHTML = "Dodaj nowy"
     newItemNode.className = "btn";
     elementMenu.appendChild(newItemNode);

     newItemNode.addEventListener( 'click', function(){
        if (listKind == "allegryList") {
            var aForm = document.createElement("form");
            var alName = document.createElement("input");
            var symName = document.createElement("input");
            var noteName = document.createElement("input");

            alName.style.display = "block";
            symName.style.display = "block";
            noteName.style.display = "block";
            alName.setAttribute('type', 'text');
            alName.setAttribute('label', 'alName');
            alName.setAttribute('id', 'alName');
            alNameLabel = document.createElement("label");
            alNameLabel.setAttribute('for', 'alName');
            alNameLabel.innerHTML = "Nazwa alergenu:";

            symName.setAttribute('type', 'text');
            symName.setAttribute('label', 'symName');
            symName.setAttribute('id', 'symName');
            symNameLabel = document.createElement("label");
            symNameLabel.setAttribute('for', 'symName');
            symNameLabel.innerHTML = "Symptomy:";

            noteName.setAttribute('type', 'text');
            noteName.setAttribute('label', 'noteName');
            noteName.setAttribute('id', 'noteName');
            noteNameLabel = document.createElement("label");
            noteNameLabel.setAttribute('for', 'noteName');
            noteNameLabel.innerHTML = "Notatka:";

            s = document.createElement("input");
            s.setAttribute('type',"submit");
            s.setAttribute('value',"Prześlij");
            s.style.display = "block";

            aForm.appendChild(alNameLabel);
            aForm.appendChild(alName);
            aForm.appendChild(symNameLabel);
            aForm.appendChild(symName);
            aForm.appendChild(noteNameLabel);
            aForm.appendChild(noteName);

            aForm.appendChild(s);
            document.getElementById('formItem').appendChild(aForm);

            s.onclick = function(){
            var alName = $('#alName').val();
                 if (alName) {
                 var symName = $('#symName').val();
                 var noteName = $('#noteName').val();
                 console.log(childName);
                 var userId = firebase.auth().currentUser.uid;
                 var ref = firebase.database().ref('Children/' + userId + '/' + childName + '/Allergies');
                 var newRef = ref.child(alName);
                 newRef.set({
                     allergens: alName,
                     nameChild: childName,
                     note: noteName,
                     symptoms: symName
                 });
                 }
            };
        }
        if (listKind == "medicineList") {
            var aForm = document.createElement("form");
            var dosageName = document.createElement("input");
            var meName = document.createElement("input");
            var noteName = document.createElement("input");
            var reasonName = document.createElement("input");

            dosageName.style.display = "block";
            meName.style.display = "block";
            noteName.style.display = "block";
            reasonName.style.display = "block";
            dosageName.setAttribute('type', 'text');
            dosageName.setAttribute('label', 'dosageName');
            dosageName.setAttribute('id', 'dosageName');
            dosageNameLabel = document.createElement("label");
            dosageNameLabel.setAttribute('for', 'dosageName');
            dosageNameLabel.innerHTML = "Dawka:";

            meName.setAttribute('type', 'text');
            meName.setAttribute('label', 'meName');
            meName.setAttribute('id', 'meName');
            meNameLabel = document.createElement("label");
            meNameLabel.setAttribute('for', 'meName');
            meNameLabel.innerHTML = "Nazwa leku:";

            noteName.setAttribute('type', 'text');
            noteName.setAttribute('label', 'noteName');
            noteName.setAttribute('id', 'noteName');
            noteNameLabel = document.createElement("label");
            noteNameLabel.setAttribute('for', 'noteName');
            noteNameLabel.innerHTML = "Notatka:";

            reasonName.setAttribute('type', 'text');
            reasonName.setAttribute('label', 'reasonName');
            reasonName.setAttribute('id', 'reasonName');
            reasonNameLabel = document.createElement("label");
            reasonNameLabel.setAttribute('for', 'reasonName');
            reasonNameLabel.innerHTML = "Przyczyna:";

            s = document.createElement("input");
            s.setAttribute('type',"submit");
            s.setAttribute('value',"Prześlij");
            s.style.display = "block";

            aForm.appendChild(dosageNameLabel);
            aForm.appendChild(dosageName);
            aForm.appendChild(meNameLabel);
            aForm.appendChild(meName);
            aForm.appendChild(noteNameLabel);
            aForm.appendChild(noteName);
            aForm.appendChild(reasonNameLabel);
            aForm.appendChild(reasonName);

            aForm.appendChild(s);
            document.getElementById('formItem').appendChild(aForm);

            s.onclick = function(){
            var meName = $('#meName').val();
                 if (meName) {
                 var dosageName = $('#dosageName').val();
                 var noteName = $('#noteName').val();
                 var reasonName = $('#reasonName').val();
                 console.log(childName);
                 var userId = firebase.auth().currentUser.uid;
                 var ref = firebase.database().ref('Children/' + userId + '/' + childName + '/Medicines');
                 var newRef = ref.child(meName);
                 newRef.set({
                     medicineName: meName,
                     dosage: dosageName,
                     nameChild: childName,
                     note: noteName,
                     reason: reasonName
                 });
                 }
            };
        }
        if (listKind == "vaccineList") {
          var aForm = document.createElement("form");
          var dateName = document.createElement("input");
          var nameName = document.createElement("input");
          var noteName = document.createElement("input");
          var typeName = document.createElement("input");

          dateName.style.display = "block";
          nameName.style.display = "block";
          noteName.style.display = "block";
          typeName.style.display = "block";
          dateName.setAttribute('type', 'text');
          dateName.setAttribute('label', 'dateName');
          dateName.setAttribute('id', 'dateName');
          dateNameLabel = document.createElement("label");
          dateNameLabel.setAttribute('for', 'dateName');
          dateNameLabel.innerHTML = "Data:";

          nameName.setAttribute('type', 'text');
          nameName.setAttribute('label', 'nameName');
          nameName.setAttribute('id', 'nameName');
          nameNameLabel = document.createElement("label");
          nameNameLabel.setAttribute('for', 'nameName');
          nameNameLabel.innerHTML = "Choroba:";

          noteName.setAttribute('type', 'text');
          noteName.setAttribute('label', 'noteName');
          noteName.setAttribute('id', 'noteName');
          noteNameLabel = document.createElement("label");
          noteNameLabel.setAttribute('for', 'noteName');
          noteNameLabel.innerHTML = "Notatka:";

          typeName.setAttribute('type', 'text');
          typeName.setAttribute('label', 'typeName');
          typeName.setAttribute('id', 'typeName');
          typeNameLabel = document.createElement("label");
          typeNameLabel.setAttribute('for', 'typeName');
          typeNameLabel.innerHTML = "Nazwa leku:";

          s = document.createElement("input");
          s.setAttribute('type',"submit");
          s.setAttribute('value',"Prześlij");
          s.style.display = "block";

          aForm.appendChild(nameNameLabel);
          aForm.appendChild(nameName);
          aForm.appendChild(dateNameLabel);
          aForm.appendChild(dateName);
          aForm.appendChild(noteNameLabel);
          aForm.appendChild(noteName);
          aForm.appendChild(typeNameLabel);
          aForm.appendChild(typeName);

          aForm.appendChild(s);
          document.getElementById('formItem').appendChild(aForm);

          s.onclick = function(){
          var nameName = $('#nameName').val();
               if (nameName) {
               var dateName = $('#dateName').val();
               var noteName = $('#noteName').val();
               var typeName = $('#typeName').val();
               console.log(childName);
               var userId = firebase.auth().currentUser.uid;
               var ref = firebase.database().ref('Children/' + userId + '/' + childName + '/Vaccinations');
               var newRef = ref.child(nameName);
               newRef.set({
                   vaccinationType: nameName,
                   vaccinationDate: dateName,
                   nameChild: childName,
                   note: noteName,
                   vaccinationName: typeName
               });
               }
          };
        }
        if (listKind == "operationList") {
           document.getElementById("vaccineItem").style.visibility = "visible";
        }
     });

    if (listKind == "allegryList") {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                user = firebase.auth().currentUser;
                var query = firebase.database().ref('Children/' + user.uid + '/' + childName + '/Allergies').orderByKey();
                    query.once("value")
                      .then(function(snapshot) {
                          snapshot.forEach(function(childSnapshot) {
                          var key = childSnapshot.key;
                          var childData = childSnapshot.val();
                          console.log(key);
                          console.log(childData);
                    var allergyName = document.createElement("p");
                    var symptom = document.createElement("p");
                    var note = document.createElement("p");
                    var allergyNameNode = document.createTextNode("Nazwa czynnika uczulającego: " + childSnapshot.val().allergens);
                    var symptomNode = document.createTextNode("Symptomy: " + childSnapshot.val().symptoms);
                    var noteNode = document.createTextNode("Notatka: " + childSnapshot.val().note);

                    allergyName.appendChild(allergyNameNode);
                    symptom.appendChild(symptomNode);
                    note.appendChild(noteNode);

                    var element = document.getElementById("div1");

                   element.appendChild(allergyName);
                   element.appendChild(symptom);
                   element.appendChild(note);
                   console.log(snapshot.numChildren());
                   console.log(childSnapshot.numChildren());
                            });
                           });
                        } else {
                            console.log('No user is signed in.');
                        }
                    });
    }
    if (listKind == "vaccineList") {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                user = firebase.auth().currentUser;
                var query = firebase.database().ref('Children/' + user.uid + '/' + childName + '/Vaccinations').orderByKey();
                query.once("value")
                  .then(function(snapshot) {
                      snapshot.forEach(function(childSnapshot) {
                      var key = childSnapshot.key;
                      var childData = childSnapshot.val();
                      console.log(key);
                      console.log(childData);
                var vaccineName = document.createElement("p");
                var dose = document.createElement("p");
                var datet = document.createElement("p");
                var vaccineNameNode = document.createTextNode("Nazwa leku: " + childSnapshot.val().vaccinationName);
                var doseNode = document.createTextNode("Choroba: " + childSnapshot.val().vaccinationType);
                var dateNode = document.createTextNode("Data: " + childSnapshot.val().vaccinationDate);

                vaccineName.appendChild(vaccineNameNode);
                dose.appendChild(doseNode);
                datet.appendChild(dateNode);

                var element = document.getElementById("div1");

               element.appendChild(vaccineName);
               element.appendChild(dose);
               element.appendChild(datet);
                        });
                       });
                        } else {
                            console.log('No user is signed in.');
                        }
                    });
                    }
    if (listKind == "visitList") {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    user = firebase.auth().currentUser;
                    var query = firebase.database().ref('Children/' + user.uid + '/' + childName + '/visits').orderByKey();
                    query.once("value")
                      .then(function(snapshot) {
                          snapshot.forEach(function(childSnapshot) {
                          var key = childSnapshot.key;
                          var childData = childSnapshot.val();
                          console.log(key);
                          console.log(childData);
                    var doctorName = document.createElement("p");
                    var visitDate = document.createElement("p");
                    var doctorNameNode = document.createTextNode("Wizyta u lekarza: " + childSnapshot.val().doctorName);
                    var visitDateNode = document.createTextNode("Data: " + childSnapshot.val().visitDate);

                    doctorName.appendChild(doctorNameNode);
                    visitDate.appendChild(visitDateNode);

                    var element = document.getElementById("div1");

                   element.appendChild(doctorName);
                   element.appendChild(visitDate);
                            });
                           });
                            } else {
                                console.log('No user is signed in.');
                            }
                        });
                        }
 if (listKind == "medicineList") {
         firebase.auth().onAuthStateChanged(function(user) {
             if (user) {
                 user = firebase.auth().currentUser;
                var query = firebase.database().ref('Children/' + user.uid + '/' + childName + '/Medicines').orderByKey();
                 query.once("value")
                   .then(function(snapshot) {
                       snapshot.forEach(function(childSnapshot) {
                       var key = childSnapshot.key;
                       var childData = childSnapshot.val();
                       console.log(key);
                       console.log(childData);
                 var medicineName = document.createElement("p");
                 var medicineDosage = document.createElement("p");
                 var medicineNote = document.createElement("p");
                 var medicineReason = document.createElement("p");
                 var medicineNameNode = document.createTextNode("Nazwa leku: " + childSnapshot.val().medicineName);
                 var medicineDosageNode = document.createTextNode("Dawka: " + childSnapshot.val().dosage);
                 var medicineNoteNode = document.createTextNode("Notka: " + childSnapshot.val().note);
                 var medicineReasonNode = document.createTextNode("Przyczyna: " + childSnapshot.val().reason);
                 medicineName.appendChild(medicineNameNode);
                 medicineDosage.appendChild(medicineDosageNode);
                 medicineNote.appendChild(medicineNoteNode);
                 medicineReason.appendChild(medicineReasonNode);

                 var element = document.getElementById("div1");

                element.appendChild(medicineName);
                element.appendChild(medicineDosage);
                element.appendChild(medicineNote);
                element.appendChild(medicineReason);
                         });
                        });
                         } else {
                             console.log('No user is signed in.');
                         }
                     });
                     }
