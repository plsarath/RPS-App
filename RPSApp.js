(function(angular){

'use strict'

var rpapp = angular.module("RPSApp",[]);



rpapp.controller("RPSController",['$scope','$log',function($scope,$log){

var ctrl=this;
ctrl.leadingWinner='';
var _resultSet={

    "RP":"Computer wins",
    "PR":"Player wins",
    "SR":"Computer wins",
    "RS":"Player wins",
    "PS":"Computer wins",
    "SP":"Player wins",
    "RR":"No Winner",
    "PP":"No Winner",
    "SS":"No Winner",
}

ctrl.gameModel=[
    {no:1,playerChoice:'',computerChoice:'',roundWinner:''},
    {no:2,playerChoice:'',computerChoice:'',roundWinner:''},
    {no:3,playerChoice:'',computerChoice:'',roundWinner:''},
    {no:4,playerChoice:'',computerChoice:'',roundWinner:''},
    {no:5,playerChoice:'',computerChoice:'',roundWinner:''},
    {no:6,playerChoice:'',computerChoice:'',roundWinner:''},
    {no:7,playerChoice:'',computerChoice:'',roundWinner:''},
    {no:8,playerChoice:'',computerChoice:'',roundWinner:''},
    {no:9,playerChoice:'',computerChoice:'',roundWinner:''},
    {no:10,playerChoice:'',computerChoice:'',roundWinner:''}
];

ctrl.gameOptions=[
    {id:'R',value:"Rock"},
    {id:'P',value:"Paper"},
    {id:'S',value:"Scissor"}

];



ctrl.onPlayerChoiceSelected=function(index)
{
    var round=ctrl.gameModel[index];
    console.log(round);
    var computerChoice=ctrl.getComputerChoice();
    round.computerChoice=computerChoice;
    var roundWinner=_resultSet[round.playerChoice+round.computerChoice]
    round.roundWinner=roundWinner;
    ctrl.computeWinner();
}
ctrl.getComputerChoice=function()
{
    var min= Math.ceil(0);
    var max=Math.floor(2);
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    var option= ctrl.gameOptions[randomNumber];
    return option.id;
}
ctrl.computeWinner=function()
{
    var playerCount=0;
    var computerCount=0;

    ctrl.gameModel.forEach(function(round){
        if(round.roundWinner === "Player wins")
        {
            playerCount++;
        }
        else if(round.roundWinner === "Computer wins")
        {
            computerCount++;
        }
    });

    if(playerCount>computerCount)
    {
        ctrl.leadingWinner="Player";
    }
    else if(playerCount<computerCount)
    {
        ctrl.leadingWinner="Computer";
    }
    else{
        ctrl.leadingWinner="No One";
    }
}

}]);
})(angular);