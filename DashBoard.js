window.onload = function () {

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
	      {y: 50, label: "Dry"},
	      {y: 35, label: "Wet"},
	      {y: 25, label: "Mixed"},
	    ]
	  }]
	});
	chart1.render();


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
		name: "Dry",
		dataPoints: [
			{ y: 6.75,  label:"Ward1" },
			{ y: 8.57,  label:"Ward2" },
			{ y: 10.64, label:"Ward3" },
			{ y: 13.97, label:"Ward4" },
			{ y: 15.42, label:"Ward5" },
			{ y: 17.26, label:"Ward6" },
			{ y: 20.26, label:"Ward7" }
		]
		},
		{
			type: "stackedColumn",
			showInLegend: true,
			name: "Wet",
			color: "#D08281",
			dataPoints: [
				{ y: 6.82,  label:"Ward1" },
				{ y: 9.02,  label:"Ward2" },
				{ y: 11.80,  label:"Ward3" },
				{ y: 14.11,  label:"Ward4" },
				{ y: 15.96,  label:"Ward5" },
				{ y: 17.73,  label:"Ward6" },
				{ y: 21.5,  label:"Ward7" }
			]
		},
		{
			type: "stackedColumn",
			showInLegend: true,
			name: "Mixed",
			color: "#B9CF81",
			dataPoints: [
				{ y: 7.28,  label:"Ward1" },
				{ y: 9.72,  label:"Ward2" },
				{ y: 13.30, label:"Ward3" },
				{ y: 14.9,   label:"Ward4" },
				{ y: 18.10, label:"Ward5" },
				{ y: 18.68, label:"Ward6" },
				{ y: 22.45, label:"Ward7" }
			]
		}]
});
chart2.render();

function toolTipContent(e) {
	var str = "";
	var total = 0;
	var str2, str3;
	for (var i = 0; i < e.entries.length; i++){
		var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: $<strong>"+e.entries[i].dataPoint.y+"</strong>Kg<br/>";
		total = e.entries[i].dataPoint.y + total;
		str = str.concat(str1);
	}
	str2 = "<span style = \"color:DodgerBlue;\"><strong>"+"Ward"+(e.entries[0].dataPoint.x+1)+"</strong></span><br/>";
	total = Math.round(total * 100) / 100;
	str3 = "<span style = \"color:Tomato\">Total:</span><strong> $"+total+"</strong>Kg<br/>";
	return (str2.concat(str)).concat(str3);
}

}
