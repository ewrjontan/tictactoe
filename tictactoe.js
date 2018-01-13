var gameTitleTimer;
var beginTimer;
var cpuTimer;

var playerOneMark;
var playerTwoMark;
var cpuMark;
var singlePlayer = false;
var twoPlayer = false;
var playerOneTurn = false;
var playerTwoTurn = false;
var disableClick = false;

//var result = "";
var markCount = 0;

var zoneArr = ["zone-one", "zone-two", "zone-three", "zone-four", "zone-five", "zone-six", "zone-seven", "zone-eight", "zone-nine"];

var zoneObjArr = {"zone-one": false, "zone-two": false, "zone-three": false, "zone-four": false, "zone-five": false, "zone-six": false, "zone-seven": false, "zone-eight": false, "zone-nine": false};


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//functionsxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function cpuMove(){
	console.log("cpu is thinking");
  var zoneOne = zoneObjArr["zone-one"];
  var zoneTwo = zoneObjArr["zone-two"];
  var zoneThree = zoneObjArr["zone-three"];
  var zoneFour = zoneObjArr["zone-four"];
  var zoneFive = zoneObjArr["zone-five"];
  var zoneSix = zoneObjArr["zone-six"];
  var zoneSeven = zoneObjArr["zone-seven"];
  var zoneEight = zoneObjArr["zone-eight"];
  var zoneNine = zoneObjArr["zone-nine"];
  var cpuRepeat = false;
	clearTimeout(cpuTimer);
	
  if (zoneFive == false){
  	zoneClick("zone-five");
  }else if (zoneOne == playerOneMark && zoneTwo ==playerOneMark && zoneThree == false){
  	zoneClick("zone-three");  
  }else if (zoneOne == playerOneMark && zoneFour == playerOneMark && zoneSeven == false){
  	zoneClick("zone-seven");
  }else if (zoneOne == playerOneMark && zoneFive == playerOneMark && zoneNine == false){
  	zoneClick("zone-nine");
  }else if (zoneOne == playerOneMark && zoneSeven == playerOneMark && zoneFour == false){
  	zoneClick("zone-four");
  }else if (zoneOne == playerOneMark && zoneThree == playerOneMark && zoneTwo == false){
 		zoneClick("zone-two");
  }else if (zoneTwo == playerOneMark && zoneThree == playerOneMark && zoneOne == false){
  	zoneClick("zone-one");
  }else if (zoneTwo == playerOneMark && zoneFive == playerOneMark && zoneEight == false){
  	zoneClick("zone-eight");
  }else if (zoneThree == playerOneMark && zoneFive == playerOneMark && zoneSeven == false){
  	zoneClick("zone-seven");
  }else if (zoneThree == playerOneMark && zoneSix == playerOneMark && zoneNine == false){
  	zoneClick("zone-nine");
  }else if (zoneThree == playerOneMark && zoneNine == playerOneMark && zoneSix == false){
  	zoneClick("zone-six");
  }else if (zoneFour == playerOneMark && zoneSeven == playerOneMark && zoneOne == false){
  	zoneClick("zone-one");
  }else if (zoneFour == playerOneMark && zoneFive == playerOneMark && zoneSix == false){
		zoneClick("zone-six"); 
  }else if (zoneFive == playerOneMark && zoneSix == playerOneMark && zoneFour == false){
  	zoneClick("zone-four");
  }else if (zoneFive == playerOneMark && zoneSeven == playerOneMark && zoneThree == false){
  	zoneClick("zone-three");
  }else if (zoneFive == playerOneMark && zoneEight == playerOneMark && zoneTwo == false){
  	zoneClick("zone-two");
  }else if (zoneFive == playerOneMark && zoneNine == playerOneMark && zoneOne == false){
  	zoneClick("zone-one");
  }else if (zoneSix == playerOneMark && zoneNine == playerOneMark && zoneThree == false){
  	zoneClick("zone-three");
  }else if (zoneSeven == playerOneMark && zoneEight == playerOneMark && zoneNine == false){
  	zoneClick("zone-nine");
  }else if (zoneSeven == playerOneMark && zoneNine == playerOneMark && zoneEight == false){
  	zoneClick("zone-eight");
  }else if (zoneEight == playerOneMark && zoneNine == playerOneMark && zoneSeven == false){
  	zoneClick("zone-seven");
  }else{//pick a random spot
  	var randomNumber = Math.floor(Math.random() * 9);
    console.log(randomNumber);
    var tempCpuZone = zoneArr[randomNumber];
    console.log("tempCpuZone: " + tempCpuZone);
    
    //check if zone is empty
    if (zoneObjArr[tempCpuZone] == false){
    	zoneClick(tempCpuZone);
    }else{
    	cpuMove();
      cpuRepeat = true;
    }
    
  };
  
  if (cpuRepeat == false){
  	playerTwoTurn = false;
  	playerOneTurn = true;
  };
  
}


function gameReset(){
	
  clearTimeout(gameResetTimer);
  
  zoneArr.forEach(function(zone) {
    //console.log(zone);
    document.getElementById(zone).innerHTML = "";
    zoneObjArr[zone] = false;
	});
  
  //document.getElementById("end-game-text").innerHTML = "Play Again?";
  
  document.getElementById("game-select-container").style.transform = "scale(1, 1)";
  
  document.getElementById("game-title").style.visibility = "visible";  
  document.getElementById("player-select-container").style.visibility = "visible";
  document.getElementById("game-title").style.opacity = "1";  
  document.getElementById("player-select-container").style.opacity = "1";
  document.getElementById("end-container").style.visibility = "hidden";
  
  
  //document.getElementById("end-container").style.opacity = "1";
  
  /*document.getElementById("character-container").style.visibility = "visible";
  document.getElementById("character-container").style.opacity = "1";	*/
  
  /*$("#game-select-container").css("transform", "scale(1,.2)")
    $("#character-container").css("opacity", "0");
    $("#begin-container").css("visibility", "visible");
    $("#begin-container").css("opacity", "1");*/
    
	//singlePlayer = false;
	//twoPlayer = false;    
  playerOneMark = "";
	playerTwoMark = "";
	cpuMark = "";
  playerOneTurn = false;
	playerTwoTurn = false;
  markCount = 0;
  disableClick = false;
}


function endGame(result){
	console.log("resetting game");
  console.log(result);
  
  if (result == "draw"){
 		document.getElementById("end-game-text").innerHTML = "It's A Draw!";
  }else if (result == playerOneMark){
  	document.getElementById("end-game-text").innerHTML = "Player One Wins!";
  }else if (result == playerTwoMark){
  	document.getElementById("end-game-text").innerHTML = "Player Two Wins!"
  }else if (result == cpuMark){
  	document.getElementById("end-game-text").innerHTML = "CPU Wins!";
  }
  
  document.getElementById("end-container").style.visibility = "visible";
  //document.getElementById("end-container").style.opacity = "0";
  //document.getElementById("end-container").style.display = "inline";
  
  document.getElementById("game-select-container").style.display = "inline"; 
  /*document.getElementById("end-container").style.opacity = ".5";*/
  gameResetTimer = setTimeout(gameReset, 1750);
}


function determineWinner(markCount){
	var zoneOne = zoneObjArr["zone-one"];
  var zoneTwo = zoneObjArr["zone-two"];
  var zoneThree = zoneObjArr["zone-three"];
  var zoneFour = zoneObjArr["zone-four"];
  var zoneFive = zoneObjArr["zone-five"];
  var zoneSix = zoneObjArr["zone-six"];
  var zoneSeven = zoneObjArr["zone-seven"];
  var zoneEight = zoneObjArr["zone-eight"];
  var zoneNine = zoneObjArr["zone-nine"];
  var winningMark = "";
 
  if ((zoneOne==zoneTwo) && (zoneOne == zoneThree) && (zoneOne != false)){
  	winningMark = zoneOne;
  	console.log("winner1 is " + winningMark);
  }else if ((zoneOne == zoneFour) && (zoneOne == zoneSeven) && (zoneOne != false)){
  	winningMark = zoneOne;
  	console.log("winner2 is " + winningMark);
  }else if ((zoneOne == zoneFive) && (zoneOne == zoneNine) && (zoneOne != false)){
  	winningMark = zoneOne;
  	console.log("winner3 is " + winningMark);
  }else if ((zoneTwo == zoneFive) && (zoneTwo == zoneEight) && (zoneTwo != false)){
  	winningMark = zoneTwo;
  	console.log("winner4 is " + winningMark);
  }else if ((zoneThree == zoneFive) && (zoneThree == zoneSeven) && (zoneThree != false)){
  	winningMark = zoneThree;
  	console.log("winner5 is " + winningMark);
  }else if ((zoneThree == zoneSix) && (zoneThree == zoneNine) && (zoneThree != false)){
  	winningMark = zoneThree;
  	console.log("winner6 is " + winningMark);
  }else if ((zoneFour == zoneFive) && (zoneFour == zoneSix) && (zoneFour != false)){
  	winningMark = zoneFour;
  	console.log("winner7 is " + winningMark);
  }else if ((zoneSeven == zoneEight) && (zoneSeven == zoneNine) && (zoneSeven != false)){
  	winningMark = zoneSeven;
  	console.log("winner8 is " + winningMark);
  }else if (markCount == 9){
  	console.log("Its a draw: No winner");
    winningMark = "draw";
  }else{
  	console.log("do nothing");
    winningMark = "";
    
    if (singlePlayer && playerTwoTurn){
     	console.log("cpu's turn!");
      disableClick = true;
    	cpuTimer = setTimeout(cpuMove, 1000);
    };
    
  };
  
  var result = winningMark;
  
  if (result != ""){
  	endGame(result);	
    document.getElementById("turn-indicator-container").style.visibility = "hidden";
    document.getElementById("player-one-indicator").classList.add("player-turn");
    document.getElementById("player-two-indicator").classList.remove("player-turn");
  };
}

function zoneClick(zone){
	console.log("zone: " + zone);
  
  if (zoneObjArr[zone] == false){
  	if (playerOneTurn){
  		var tempPlayerMark = playerOneMark;
    	playerOneTurn = false;
    	playerTwoTurn = true;
      
      //add and remove class for player turn indicator
      document.getElementById("player-one-indicator").classList.remove("player-turn");
      document.getElementById("player-two-indicator").classList.add("player-turn");
      
      /*if (singlePlayer){
      	console.log("cpu's turn!");
        cpuTimer = setTimeout(cpuMove, 1000);
      };*/
      
  	}else{
    	if (singlePlayer){
      	var tempPlayerMark = cpuMark;	
        disableClick = false;
      }else{
      	var tempPlayerMark = playerTwoMark;
      }
  		
    	playerTwoTurn = false;
    	playerOneTurn = true;
      
      //add or remove class for player turn indicator
      document.getElementById("player-two-indicator").classList.remove("player-turn");
      document.getElementById("player-one-indicator").classList.add("player-turn");
  	};
    
    zoneObjArr[zone] = tempPlayerMark;
    var tempDiv = document.createElement("div");
    tempDiv.classList.add("mark", tempPlayerMark)
		var tempMark = document.createTextNode(tempPlayerMark);
		tempDiv.appendChild(tempMark);
		document.getElementById(zone).appendChild(tempDiv);
    
    markCount++;
    
    determineWinner(markCount);
    
  };
  
}


function optionTimer(){
	console.log("timer disabled!");
	clearTimeout(gameTitleTimer);
  document.getElementById("game-title").style.visibility = "hidden";
  document.getElementById("player-select-container").style.visibility = "hidden";
  
  //document.getElementById("game-title").style.color = "red";
  //document.getElementById("player-select-container").style.color = "red";
  //document.getElementById("character-container").style.opacity="1";
};

function removeBegin(){
	clearTimeout(beginTimer);
  //document.getElementById("begin-container").style.display = "none";
  document.getElementById("begin-container").style.visibility = "hidden";
  document.getElementById("begin-container").style.opacity = "0";
  //document.getElementById("game-select-container").style.visibility = "hidden";
  document.getElementById("game-select-container").style.transform = "scale(0, 0)";
  document.getElementById("game-select-container").style.display = "none";
  
	document.getElementById("turn-indicator-container").style.visibility = "visible";
  
}


function playerSelect(){
  //document.getElementById("game-select-container").style.width = "0";
  
  gameTitleTimer = setTimeout(optionTimer, 1000);
 	document.getElementById("game-title").style.opacity = "0";  
  document.getElementById("player-select-container").style.opacity = "0";
  
  document.getElementById("character-container").style.display = "flex";
  document.getElementById("character-container").style.visibility = "visible";
  document.getElementById("character-container").style.opacity = "1";	
}  

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxx Jquery xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
$(document).ready(function(){
	//Select single or two player 
	$(".player-option").hover(
  function(){
  	$(this).css("border", "1px solid white");
  }, function(){
  	$(this).css("border", "none");
  });
  
  $("#single-player").click(function(){
  	console.log("Single player selected!");
    singlePlayer = true;
    twoPlayer = false;
    $("#player-two-indicator").text("CPU");
    playerSelect();
  });
  
  $("#two-player").click(function(){
  	console.log("Two player selected");
    twoPlayer = true;
    singlePlayer = false;
    $("#player-two-indicator").text("P2");
    playerSelect();
  });
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  
  //Select X or O
  $(".character").mouseover(function(){
  	$(this).effect("shake", {distance: 5} );
  });
  
  $("#x-character").click(function(){
  	playerOneMark = "X";
    console.log("Player one is X");
    
    if (singlePlayer){
    	cpuMark = "O";
      console.log("Cpu is O")
    }else{
    	playerTwoMark = "O";
      console.log("Player two is O");
    }
    
  });
  
  $("#o-character").click(function(){
  	playerOneMark = "O";
    console.log("Player one is O");
    
    if (singlePlayer){
    	cpuMark = "X";
      console.log("cpu is X");
    }else{
    	playerTwoMark = "X";
      console.log("Player two is X");
    }
    
  });
  
  $(".character").click(function(){
  	$("#game-select-container").css("transform", "scale(1,.2)")
    $("#character-container").css("opacity", "0");
    //$("#begin-container").css("display", "inline");
    $("#begin-container").css("visibility", "visible");
    $("#begin-container").css("opacity", "1");
   	beginTimer = setTimeout(removeBegin, 2000);
    playerOneTurn = true;
  });
  
 //zone clicks 
	$(".zone").click(function(){
 		var tempZone = $(this).attr("id");
  	console.log(tempZone);
  	
    if (disableClick){
    	console.log("click disabled");
    }else{
    	zoneClick(tempZone); 
    }
 		 
	});
 
  
});
