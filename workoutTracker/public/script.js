var workoutObj;

document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("FORM WAS CANCELLED");
    var req = new XMLHttpRequest();
    var payload = {
      name: null,
      reps: null,
      weight: null,
      date: null,
      lbs: null
    }
    // Set values for the payload
    payload.name = document.getElementById('name').value;
    payload.reps = document.getElementById('reps').value;
    payload.weight = document.getElementById('weight').value;
    payload.date = document.getElementById('date').value;
    payload.lbs = document.getElementById('lbs').value;

    req.open('POST', 'http://flip3.engr.oregonstate.edu:33185/insert', true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', function() {
      var response = req.responseText;
      document.getElementById("workoutTable").textContent = response;
      document.getElementById("sigh").textContent = "THIS PROJECT IS TOO HARD";
      makeTable();
    });
    req.send(JSON.stringify(payload)); 
});

function makeTable() {
  // Make table
  var req2 = new XMLHttpRequest();

  /* API GET REQUEST */
  req2.open("GET", "/get-table", true);
  req2.addEventListener('load', function() {
    workoutObj = req2.responseText;
    let workoutTable = document.getElementById("workoutTable");
    let tableRef = workoutTable.getElementsByTagName("tbody")[0];

    var table = document.getElementById("tableBody");
    for (var i = 0; i<workoutObj.length; i++){
      var isId = true; // used id each row of the table. hidden
      var colCount = 1;

      if(workoutObj.length > 0){
        // Insert a row in tableRef at last row.
        var newRow = tableRef.insertRow(tableRef.rows.length);
        newRow.id = workoutObj[i].id;
      }
      // this loop populates a row
      for (var val in workoutObj[i]){
        console.log(workoutObj[i][val]);
        var newCell = document.createElement('td');
        newCell.textContent = workoutObj[i][val];

        //units is on 6th iteration
        unitType(workoutObj, i, newCell, colCount);

        if(isId == true){
          newCell.style.display="none"
          isId = false; 
        }
        newRow.appendChild(newCell);
        colCount++; // keeps track on whether to turn 0 or 1 into lbs or kgs
        } // end inner loop
        
        /*createButton(workoutObject, i, newRow,
         "delete", "deleteRow(this.id)");
        createButton(workoutObject, i, newRow,
         "update", "window.location='update-row?id='+this.id");*/
      } // end outer loop
  });
  req2.send(null);
  
}



