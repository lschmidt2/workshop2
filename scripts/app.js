$(document).ready(function(){     
setInterval(function() {
  $("#place-1").append("sheep ");
  $("#place-2").append("corgis ");
  $("#place-3").append("cows ");
  $("#place-4").append("cats ");
  $("#place-5").append("fishes ");
  $("#place-6").append("lizards ");
  $("#place-7").append("sheep ");
  $("#place-8").append("bears ");
  $("#place-9").append("ducks ");
  $("#place-10").append("horses ");
}, 100)


$("button").click(function() {
  $("li").each(function() {
    alert($(this).text())
  });
});


$("body").css("transition","all 3s");
var arr = ["#f00","#0f0","#00f"];
function changeColor(){
   $("body").css({
        backgroundColor : arr[parseInt(Math.random() * 3)]
      });
}
changeColor();
setInterval(changeColor,3000);

for (i = 1; i < 30; i++) {

	// If the index is every 3rd
	if (i % 3 === 0) {
		$(".crazy").append('<div>CRAZY</div><br>');  
	// If the index is every 2nd    
	} else if (i % 2 === 0) {
		$(".crazy").append('<div>PSYCHO</div><br>');  
	// Rest
  } else {
		$(".crazy").append('<div>NUTS</div><br>');  
  }

	
}
});
