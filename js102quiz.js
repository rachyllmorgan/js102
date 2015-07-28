$(document).ready(function(){

	
var arrayB = [];
var bigNum = [];

function newArray(array){
	return array.sort()
};	
	
function arrayA(array){
	for (var i = 0; i <= array.length; i++) {
		if (array[i] > 25){
		bigNum.push();
			console.log(bigNum);
			newArray(bigNum);
		}
	}
};
	
$(":button").click(function(){
	$("input").each(function () {
var arr = jQuery.makeArray($(this).val());
   arrayB.push(arr);
		console.log(arr);
			arrayA(arrayB);
	})
})
});




 
//	var getArray = $("body > input").html();
//	$(this).append(getArray);
//	console.log(getArray);

