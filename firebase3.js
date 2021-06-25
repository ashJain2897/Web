var config = {
  apiKey: "AIzaSyCai1TBt_bfhbVYlzWj9VIwMnJ_8O_h6zE",
  authDomain: "python-example-3ebd2.firebaseapp.com",
  databaseURL: "https://python-example-3ebd2.firebaseio.com",
  projectId: "python-example-3ebd2",
  storageBucket: "python-example-3ebd2.appspot.com",
  messagingSenderId: "690553899684",
  appId: "1:690553899684:web:baf1c8eb2d53c726"
};

firebase.initializeApp(config);
var d = new Date();
var date=d.getDate();
var databaseRef = firebase.database().ref('Saswad/ward/ward1/'+date);
var tblUsers1 = document.getElementById('WardData');
var tblUsers2 = document.getElementById('tw');
var rowIndex = 1;
var nseg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var seg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];



databaseRef.once('value', function(snapshot) {

   var moisture=(snapshot.val() && snapshot.val()).moisture;
   var status=(snapshot.val() && snapshot.val()).status;
   var wt=(snapshot.val() && snapshot.val()).weight;
   nseg[0]=(wt*(moisture/100));
   seg[0]=wt-nseg[0];
   nseg[0]=(nseg[0]*10)/10;
   seg[0]=(seg[0]*10)/10;
	
  var total=wt;
  var piseg=seg[0];
   var pinseg=wt-nseg[0];
  var dseg=(piseg/total)*100;
  var dnseg=(pinseg/total)*100;

  var x= document.getElementById('WardData').rows[1].cells;
  x[1].innerHTML=seg[0];////
  var x= document.getElementById('WardData').rows[1].cells;
  x[2].innerHTML=nseg[0];

  var x= document.getElementById('tw').rows[1].cells;
  x[1].innerHTML=piseg.;
  var x= document.getElementById('tw').rows[2].cells;
  x[1].innerHTML=pinseg;
  var x= document.getElementById('tw').rows[3].cells;
  x[1].innerHTML=total;



  rendeDiagram(seg,nseg,dseg,dnseg);

});



function rendeDiagram() {

  var pseg=arguments[0];
  var pnseg=arguments[1];
  var s1=arguments[2];
  var s2=arguments[3];

var chart2 = new CanvasJS.Chart("BarContainer", {
	animationEnabled: true,
	title:{
		text: "Ward Wise garbage Analysis",
		fontFamily: "arial black",
		fontWeight:"bold",
		fontSize:26,
		fontColor: "#000000"
	},
	axisX: {
		interval: 1,
		intervalType: "Ward Name"
	},
	axisY:{
		valueFormatString:"#0Kg",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
	},
	toolTip: {
		shared: true,
		content: toolTipContent
	},
	data: [{
		type: "stackedColumn",
		showInLegend: true,
		color: "#84A7D0",
		name: "Segregated",
		dataPoints: [
			{ y: pseg[0],  label:"Ward1" },
			{ y: pseg[1],  label:"Ward2" },
			{ y: pseg[2], label:"Ward3" },
			{ y: pseg[3], label:"Ward4" },
			{ y: pseg[4], label:"Ward5" },
			{ y: pseg[5], label:"Ward6" },
			{ y: pseg[6], label:"Ward7" },
			{ y: pseg[7], label:"Ward8" },
			{ y: pseg[8], label:"Ward9" },
			{ y: pseg[9], label:"Ward10" },
			{ y: pseg[10], label:"Ward11" },
			{ y: pseg[11], label:"Ward12" },
			{ y: pseg[12], label:"Ward13" },
			{ y: pseg[13], label:"Ward14" },
			{ y: pseg[14], label:"Ward15" },
			{ y: pseg[15], label:"Ward16" },
			{ y: pseg[16], label:"Ward17" }
		]
		},
		{
			type: "stackedColumn",
			showInLegend: true,
			name: "Non-Segregated",
			color: "#D08281",
			dataPoints: [
				{ y: pnseg[0],  label:"Ward1" },
				{ y: pnseg[1],  label:"Ward2" },
				{ y: pnseg[2],  label:"Ward3" },
				{ y: pnseg[3],  label:"Ward4" },
				{ y: pnseg[4],  label:"Ward5" },
				{ y: pnseg[5],  label:"Ward6" },
				{ y: pnseg[6],  label:"Ward7" },
				{ y: pnseg[7], label:"Ward8" },
				{ y: pnseg[8], label:"Ward9" },
				{ y: pnseg[9], label:"Ward10" },
				{ y: pnseg[10], label:"Ward11" },
				{ y: pnseg[12], label:"Ward12" },
				{ y: pnseg[13], label:"Ward13" },
				{ y: pnseg[14], label:"Ward14" },
				{ y: pnseg[13], label:"Ward15" },
				{ y: pnseg[15], label:"Ward16" },
				{ y: pnseg[16], label:"Ward17" }
			]
		}]
});
chart2.render();

var chart1 = new CanvasJS.Chart("PieContainer", {
  animationEnabled: true,
  title: {
    text: "Overall Garbage Analysis",
    fontFamily: "arial black",
    fontWeight:"bold",
    fontSize:26,
    fontColor: "#000000"
  },
  data: [{
    type: "pie",
    startAngle: 240,
    yValueFormatString: "##0.00\"%\"",
    indexLabel: "{label} {y}",
    dataPoints: [
      {y: s1, label: "Segregated"},
      {y: s2, label: "Non-Segregated"}
    ]
  }]
});
chart1.render();

function toolTipContent(e) {
	var str = "";
	var total = 0;
	var str2, str3;
	for (var i = 0; i < e.entries.length; i++){
		var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: <strong>"+e.entries[i].dataPoint.y+"</strong>Kg<br/>";
		total = e.entries[i].dataPoint.y + total;
		str = str.concat(str1);
	}
	str2 = "<span style = \"color:DodgerBlue;\"><strong>"+"Ward"+(e.entries[0].dataPoint.x+1)+"</strong></span><br/>";
	total = Math.round(total * 100) / 100;
	str3 = "<span style = \"color:Tomato\">Total:</span><strong> "+total+"</strong>Kg<br/>";
	return (str2.concat(str)).concat(str3);
}


}


function getDate(){
  var start = document.getElementById("start").value;
  if(start!=null){
    overallGarbage(start);
  }
}

function overallGarbage(){

  var date=arg[0];
  alert(date);
  var databaseRef = firebase.database().ref('users/');
  var tblUsers = document.getElementById('tw');
  var rowIndex = 1;

   databaseRef.once('value', function(snapshot) {

     var arr = [
               (snapshot.val() && snapshot.val().wg),
               (snapshot.val() && snapshot.val().dg),
               (snapshot.val() && snapshot.val().mg),
             ];
   var total=0;
   var x;

     for(var i = 1;i<4;i++) {

       x= document.getElementById("tw").rows[i].cells;
       x[1].innerHTML = arr[i-1];

        total=total+arr[i-1];
     }
     x= document.getElementById("tw").rows[4].cells;
     x[1].innerHTML=total;
  });

}
