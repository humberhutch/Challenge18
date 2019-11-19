
const tickets = [
  'red',
  'red',
  'green',
  'blue',
  'green'
]

const raffleEntries = {
  red: 10,
  green: 30,
  blue: 15
}

//You have the best odds of winning the [COLOUR] raffle.


function countTickets  (tickets) {
  var numRed=0;
  var numBlue=0;
  var numGreen=0;
  for (var ticket of tickets){
    if (ticket=="red"){
    numRed++;
  }
  else if (ticket =="green"){
    numGreen++;
  }
  else if (ticket =="blue"){
    numBlue++;
  }
  }

  return { red: numRed, green:numGreen, blue:numBlue};
}

function bestOdds (tickets, raffleEntries)  {
  var color = "";
  var results = countTickets(tickets);
  var oddsRed = results.red/raffleEntries.red;
  var oddsGreen = results.green/raffleEntries.green;
  var oddsBlue = results.blue/raffleEntries.blue;

  if (oddsRed > oddsBlue && oddsRed>oddsGreen){
    color = "red";
  }
  else if (oddsGreen > oddsBlue && oddsGreen >oddsRed){
    color = "green";
  }
  else {
    color = "blue";
  }
  return "You have the best odds of winning the " + color + " raffle." 
}

bestOdds(tickets,raffleEntries)