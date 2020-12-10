function DragonSlayerGame() {
  var riddle1 = "";
  var riddle2 = "";
  var riddle3 = "";
  var riddleAnswer1 = "a die";
  var riddleAnswer2 = "fire";
  var riddleAnswer3 = "a name";
  var message;
  var keepLooping = true;
  
  while(keepLooping){
    riddle1 = prompt("What has six faces, but does not wear makeup, has twenty-one eyes, but cannot see?(Answer in lower case text only)");
    if(riddle1 === riddleAnswer1){
       keepLooping = false;
       message = "Congratulations! You've recieved a Sword!";
    }else{
      message = "that answer is wrong, please try again.";
    }
  }
  
  while(keepLooping){
    riddle2 = prompt("I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?(Answer in lower case text only)");
    if(riddle2 === riddleAnswer2){
       keepLooping = false;
       message = "Congratulations! You've recieved a spell of Ice Wall";
    }else{
      message = "that answer is wrong, please try again.";
    }
  }
  
  while(keepLooping){
    riddle3 = prompt("Passed from father to son, and shared between brothers. Its importance is unquestioned, though it is used more by others(Answer in lower case text only)");
    if(riddle3 === riddleAnswer3){
       keepLooping = false;
       message = "Congratulations! You've recieved a suit of armor";
    }else{
      message = "that answer is wrong, please try again.";
    }
  }


}
Dragon_Slayer();