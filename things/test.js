var data = [
	{
		value: 79,
		color:"#fff"
	},
	{
		value : 21,
        // Draw with background color
		color : "#66ccff" 
	}
];
var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx).Doughnut(data,{
	segmentShowStroke : false,
	segmentStrokeColor : "#fff",
	segmentStrokeWidth : 1,
	percentageInnerCutout : 80, // **** Border width
	animation : true,
	animationSteps : 100,
	animationEasing : "easeOutBounce",
	animateRotate : true,
	animateScale : false,
	onAnimationComplete : null
});
