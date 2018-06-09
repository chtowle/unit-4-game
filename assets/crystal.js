        // initalize game
        var gameOn = false;
        var totalValue = 0
        var randomNumber = 0;
        var jadeValue = 0;
        var sapphireValue = 0;
        var diamondValue = 0;
        var emeraldValue = 0;
        var wins = 0;
        var losses = 0;
        // wait for click and run function
        window.onload = function () {
            resetgame();
            $(".diamond").on("click", playd);
            $(".opal").on("click", playj);
            $(".jade").on("click", plays);
            $(".ruby").on("click", playe);
        };
        //reset game 
        function resetgame() {
            totalValue = 0;
            randomNumber = Math.floor(Math.random() * 100) + 20;
            $(".numbertoguess").text(randomNumber)
            jadeValue = Math.floor(Math.random() * 12) + 1;
            sapphireValue = Math.floor(Math.random() * 12) + 1;
            diamondValue = Math.floor(Math.random() * 12) + 1;
            emeraldValue = Math.floor(Math.random() * 12) + 1;
        }
        //determine if game and update scoreboard
        //if game is not over update totals
        function gameover() {
            if (totalValue === randomNumber) { wins++; resetgame() };
            if (totalValue > randomNumber) { losses++; resetgame() };
            $(".totalscore").text(totalValue)
            $(".winspan").text(wins);
            $(".lossesspan").text(losses);
        }
        //on click functions
        //update totalvalue and check if game is over
        function playd() {
            totalValue = totalValue + diamondValue;
            gameover();
        }
        function playj() {
            totalValue = totalValue + jadeValue;
            gameover();
        }
        function playe() {
            totalValue = totalValue + emeraldValue;
            gameover();
        }
        function plays() {
            totalValue = totalValue + sapphireValue;
            gameover();
        }
    
