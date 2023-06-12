var usedNumbers = new Array(76);
var calledNumbers = new Array();
var goal = "linha";

function init() {
    gerarBingo();
}

function gerarBingo() {
    resetUsedNumbers();
    for (var i = 0; i < 25; i++) {
        if (i == 12) 
            continue;
        generateSquare(i);
    }
}

function generateSquare(squareNum) {
    var currentSquare = "sq" + squareNum;
    var number;
    var baseNumbers = new Array(0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4);

    newNumber = (baseNumbers[squareNum] * 15) + generateNewNum();
    while (usedNumbers[newNumber] == true) {
        newNumber = (baseNumbers[squareNum] * 15) + generateNewNum();
    }
    usedNumbers[newNumber] = true;
    document.getElementById(currentSquare).value = newNumber;
}

function generateNewNum() {
    return Math.floor((Math.random() * 15) + 1);
}

function resetUsedNumbers() {
    for (var i = 0; i < usedNumbers.length; i++) {
        usedNumbers[i] = false;
    }
}

function gerarOutroBingo() {
    resetUsedNumbers();
    gerarBingo();
    resetSquareColours();
}

function resetSquareColours() {
    for (var i = 0; i < 25; i++) {
        if (i == 12)
            continue;
        var currentSquare = document.getElementById("sq" + i);
        currentSquare.style.backgroundColor = "#ffffff";
    }
    return;
}

function markSquare(square) {
    var currentSquare = document.getElementById(square);
    if (currentSquare.style.backgroundColor == "lightblue") 
        currentSquare.style.backgroundColor = "#ffffff";
    else
        currentSquare.style.backgroundColor = "lightblue";
    return;
}

function callNumber() {
    var rand = Math.floor(Math.random() * 75) + 1; 
    if (calledNumbers.includes(rand))
        callNumber();
    else {
        calledNumbers.push(rand);
        if (rand >= 1 && rand <= 15)
            document.getElementById("Sortear").innerHTML = 'B' + rand;
        else if (rand >= 16 && rand <= 30)
            document.getElementById("Sortear").innerHTML = 'I' + rand;
        else if (rand >= 31 && rand <= 45)
            document.getElementById("Sortear").innerHTML = 'N' + rand;
        else if (rand >= 46 && rand <= 60)
            document.getElementById("Sortear").innerHTML = 'G' + rand;
        else
            document.getElementById("Sortear").innerHTML = 'O' + rand;
        document.getElementById("Sorteados").innerHTML = calledNumbers;
    } 
}

function lineBingo() {
    goal = "linha";
    document.getElementById("bLinha").style.backgroundColor = "#4286f4";
    document.getElementById("bLinha").disabled = true;
    document.getElementById("bTudo").disabled = true;
    document.getElementById("bTudo").style.backgroundColor = "#grey";

}

function fullBingo() {
    goal = "Tudo";
    document.getElementById("bTudo").style.backgroundColor = "#4286f4";
    document.getElementById("bTudo").disabled = true;
    document.getElementById("bLinha").disabled = true;
    document.getElementById("bLinha").style.backgroundColor = "#grey";
}

function checkForBingo() {
    if (goal == "linha") {
        checkVerticalBingo();
        checkHorizontalBingo();
        checkDiagonalBingo();
        checkCornersBingo();
    }
    else {
        checkFullBingo();
    }
}

function checkVerticalBingo() {
    for (var i = 0; i < 5; i++) {
        var sq1 = document.getElementById('sq' + i);
        var sq2 = document.getElementById('sq' + (i + 5));
        var sq3 = document.getElementById('sq' + (i + 10));
        var sq4 = document.getElementById('sq' + (i + 15));
        var sq5 = document.getElementById('sq' + (i + 20));

        checkLines(sq1, sq2, sq3, sq4, sq5);
    }
}

function checkHorizontalBingo() {
    j = 0;
    for (var i = 0; i < 5; i++) {
        switch(i) {
            case 0: 
                var sq1 = document.getElementById('sq' + i);
                var sq2 = document.getElementById('sq' + (i + 1));
                var sq3 = document.getElementById('sq' + (i + 2));
                var sq4 = document.getElementById('sq' + (i + 3));
                var sq5 = document.getElementById('sq' + (i + 4));
                break;
            case 1: 
                var sq1 = document.getElementById('sq' + (i + 4));
                var sq2 = document.getElementById('sq' + (i + 5));
                var sq3 = document.getElementById('sq' + (i + 6));
                var sq4 = document.getElementById('sq' + (i + 7));
                var sq5 = document.getElementById('sq' + (i + 8));
                break;
            case 2: 
                var sq1 = document.getElementById('sq' + (i + 8));
                var sq2 = document.getElementById('sq' + (i + 9));
                var sq3 = document.getElementById('sq' + (i + 10));
                var sq4 = document.getElementById('sq' + (i + 11));
                var sq5 = document.getElementById('sq' + (i + 12));
                break;
            case 3: 
                var sq1 = document.getElementById('sq' + (i + 12));
                var sq2 = document.getElementById('sq' + (i + 13));
                var sq3 = document.getElementById('sq' + (i + 14));
                var sq4 = document.getElementById('sq' + (i + 15)); 
                var sq5 = document.getElementById('sq' + (i + 16));
                break;
            case 4: 
                var sq1 = document.getElementById('sq' + (i + 16));
                var sq2 = document.getElementById('sq' + (i + 17));
                var sq3 = document.getElementById('sq' + (i + 18));
                var sq4 = document.getElementById('sq' + (i + 19));
                var sq5 = document.getElementById('sq' + (i + 20));
                break;
        }
        checkLines(sq1, sq2, sq3, sq4, sq5);
    }
}

function checkDiagonalBingo() {
    for (var i = 0; i < 2; i++) {
        switch(i) {
            case 0:
                var sq1 = document.getElementById('sq' + 0);
                var sq2 = document.getElementById('sq' + 6);
                var sq3 = document.getElementById('sq' + 12);
                var sq4 = document.getElementById('sq' + 18);
                var sq5 = document.getElementById('sq' + 24);
                break;
            case 1:
                var sq1 = document.getElementById('sq' + 4);
                var sq2 = document.getElementById('sq' + 8);
                var sq3 = document.getElementById('sq' + 12);
                var sq4 = document.getElementById('sq' + 16);
                var sq5 = document.getElementById('sq' + 20);
                break;
        }
        checkLines(sq1, sq2, sq3, sq4, sq5);
    }
}

function checkCornersBingo() {
    var sq1 = document.getElementById('sq' + 0);
    var sq2 = document.getElementById('sq' + 4);
    var sq3 = document.getElementById('sq' + 20);
    var sq4 = document.getElementById('sq' + 24);

    if (sq1.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq1.value)) &&
            sq2.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq2.value)) &&
            sq3.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq3.value)) &&
            sq4.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq4.value))) 
            {
                youWinCorners(sq1, sq2, sq3, sq4);
                return;
    }
    else {
        document.getElementById("Sortear").innerHTML = "Não foi dessa vez! Tente novamente!";
        return;
    }
}

function checkFullBingo() {
    var j = 0;
    var flag = false;
    for (var i = 0; i < 5; i++) {
        var sq1 = document.getElementById('sq' + j);
        j++;
        var sq2 = document.getElementById('sq' + j);
        j++;
        var sq3 = document.getElementById('sq' + j);
        j++;
        var sq4 = document.getElementById('sq' + j);
        j++;
        var sq5 = document.getElementById('sq' + j);
        j++;

        if (sq1.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq1.value)) &&
            sq2.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq2.value)) &&
            sq3.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq3.value)) &&
            sq4.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq4.value)) &&
            sq5.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq5.value))) {
                flag = true;
        }
        else if (sq1.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq1.value)) &&
            sq2.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq2.value)) &&
            sq3.value == "FREE" &&
            sq4.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq4.value)) &&
            sq5.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq5.value))) {
                flag = true;
        }
        else {
            flag = false;
            break;
        }
    }
    if (flag == true) {
        youWinFullBingo();
    }
    else {
        document.getElementById("Sortear").innerHTML = "Não foi dessa vez! Tente novamente!";
        return;
    }
}

function checkLines(sq1, sq2, sq3, sq4, sq5) {
    if (sq1.style.backgroundColor == "lightreen" && calledNumbers.includes(parseInt(sq1.value)) &&
        sq2.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq2.value)) &&
        sq3.value == "FREE" &&
        sq4.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq4.value)) &&
        sq5.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq5.value))) 
        {
            youWin(sq1, sq2, sq3, sq4, sq5);
            return;
    }
    else if (sq1.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq1.value)) &&
            sq2.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq2.value)) &&
            sq3.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq3.value)) &&
            sq4.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq4.value)) &&
            sq5.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq5.value))) 
            {
                youWin(sq1, sq2, sq3, sq4, sq5);
                return;
    }
    else {
        document.getElementById("Sortear").innerHTML = "Não foi dessa vez! Tente novamente!";
        return;
    }
}

function youWin(sq1, sq2, sq3, sq4, sq5) {

    sq1.style.backgroundColor = "yellow";
    sq2.style.backgroundColor = "yellow";
    sq3.style.backgroundColor = "yellow";
    sq4.style.backgroundColor = "yellow";
    sq5.style.backgroundColor = "yellow";

    document.getElementById("bSortear").disabled = true;
    document.getElementById("bBingo").disabled = true;
    document.getElementById("Sorteados").innerHTML = "BINGO!";
}

function youWinCorners(sq1, sq2, sq3, sq4) {

    sq1.style.backgroundColor = "yellow";
    sq2.style.backgroundColor = "yellow";
    sq3.style.backgroundColor = "yellow";
    sq4.style.backgroundColor = "yellow";

    document.getElementById("bSortear").disabled = true;
    document.getElementById("bBingo").disabled = true;
    document.getElementById("Sortear").innerHTML = "BINGO! Você venceu!";
}

function youWinFullBingo() {

    document.getElementById("bSortear").disabled = true;
    document.getElementById("bBingo").disabled = true;
    document.getElementById("Sortear").innerHTML = "BINGO! Você venceu!";
}
