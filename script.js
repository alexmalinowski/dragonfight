var dragonHP = 10;

var playerHP = 5;
while (dragonHP >0 || playerHP >0){
  var playerDamage = prompt("You are confronted by a deadly dragon. How many hits will you attempt? (Between 1-5)");

  if (isNaN(playerDamage)) {
    document.body.querySelector(".outcome1").innerHTML =
      "You have not entered a number";
  }

  playerDamage = Math.floor(Math.random() * playerDamage + 1);
  var dragonDamage = Math.floor(Math.random() * 2 + 1);

  dragonHP = dragonHP - playerDamage;
  if (dragonHP <=0)
  break;
  playerHP = playerHP - dragonDamage;
  if (playerHP <=0)
  break;
}


  if (playerHP <= 0) {
    document.body.querySelector(".outcome1").innerHTML =
      "You have fallen to the dragon, and the thread of the prophecy is severed. Refresh this page to restore the weave of fate, or persist in the doomed world you have created.";
  }

 if (dragonHP <= 0) {
    document.body.querySelector(".outcome2").innerHTML =
      "You have defeated the mighty dragon.";
  }

  document.body.querySelector("#playerHP").innerHTML = playerHP;

  document.body.querySelector("#dragonHP").innerHTML = dragonHP;