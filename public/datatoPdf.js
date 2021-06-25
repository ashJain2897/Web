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

  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }

  var dbVal = firebase.database();
  var dbRef = dbVal.ref('Saswad/ward/ward1');

  dbRef.on('value', fetchData, errData);
}

function errData(err) {
  console.log("Err"+err);
}

function fetchData(data) {
  var wardData = data.val();
  var keys = Object.keys(wardData);
  console.log(wardData);
  //console.log(keys);
  //var jsonObj = [{}];

  var k = keys[0].toString();
  var dataMoist = wardData[k].moisture.toString();
  var dataStat = wardData[k].status.toString();
  var dataWt = wardData[k].weight.toString();

  var doc = new jsPDF();
  doc.text(k + '  ' +  dataMoist + '  ' + dataWt + '  '+dataStat+'  ', 20, 20);
  doc.save('Test.pdf');

}

  //var jsonObj1 = JSON.stringify(jsonObj);

  //console.log(jsonObj);  forEach(string in strArr) {
  /*for(var i = 0; i<strArr.length; i++){
    console.log(strArr[i]);
  }*/


/*
    wb.SheetNames.push("Test Sheet");

    var ws = XLSX.utils.aoa_to_sheet(jsonObj);

    wb.Sheets["Test Sheet"] = ws;
    var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
    function s2ab(s) {

            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;

    }
    $("#genpdf").click(function(){
            saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
    });
}
*/
/*
function WriteFile(data)
{

    var fh = fopen("MyFile.txt", 3); // Open the file for writing

    if(fh!=-1) // If the file has been successfully opened
    {
        fwrite(fh, data); // Write the string to a file
        fclose(fh); // Close the file
    }

}



<script>


        wb.SheetNames.push("Test Sheet");
        var ws_data = [['hello' , 'world']];
        var ws = XLSX.utils.aoa_to_sheet(ws_data);
        wb.Sheets["Test Sheet"] = ws;
        var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
        function s2ab(s) {

                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;

        }
        $("#button-a").click(function(){
                saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
        });

</script>
*/
