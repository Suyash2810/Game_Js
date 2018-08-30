//variables 
var row1 = 0,
    row2 = 0,
    row3 = 0;
var col1 = 0,
    col2 = 0,
    col3 = 0;
var di1 = 0,
    di2 = 0;
var srow1 = 0,
    srow2 = 0,
    srow3 = 0;
var scol1 = 0,
    scol2 = 0,
    scol3 = 0;
var sdi1 = 0,
    sdi2 = 0;
var chance = 0;







//event listeners

eventlisteners();

function eventlisteners() {
    document.addEventListener('DOMContentLoaded', func);
    document.querySelector('.box1').addEventListener('click', btnfunc1);
    document.querySelector('.box2').addEventListener('click', btnfunc2);
    document.querySelector('.box3').addEventListener('click', btnfunc3);
    document.querySelector('.box4').addEventListener('click', btnfunc4);
    document.querySelector('.box5').addEventListener('click', btnfunc5);
    document.querySelector('.box6').addEventListener('click', btnfunc6);
    document.querySelector('.box7').addEventListener('click', btnfunc7);
    document.querySelector('.box8').addEventListener('click', btnfunc8);
    document.querySelector('.box9').addEventListener('click', btnfunc9);
}








//functions 


function btnfunc1(e) {

    if (chance % 2 == 0) {
        chance++;
        Player1(e);
    } else {
        chance++;
        Player2(e);
    }


}

function btnfunc2(e) {

    if (chance % 2 == 0) {
        chance++;
        Player1(e);
    } else {
        chance++;
        Player2(e);
    }


}

function btnfunc3(e) {

    if (chance % 2 == 0) {
        chance++;
        Player1(e);
    } else {
        chance++;
        Player2(e);
    }


}

function btnfunc4(e) {

    if (chance % 2 == 0) {
        chance++;
        Player1(e);
    } else {
        chance++;
        Player2(e);
    }


}

function btnfunc5(e) {

    if (chance % 2 == 0) {
        chance++;
        Player1(e);
    } else {
        chance++;
        Player2(e);
    }


}

function btnfunc6(e) {

    if (chance % 2 == 0) {
        chance++;
        Player1(e);
    } else {
        chance++;
        Player2(e);
    }


}

function btnfunc7(e) {

    if (chance % 2 == 0) {
        chance++;
        Player1(e);
    } else {
        chance++;
        Player2(e);
    }


}

function btnfunc8(e) {

    if (chance % 2 == 0) {
        chance++;
        Player1(e);
    } else {
        chance++;
        Player2(e);
    }


}

function btnfunc9(e) {

    if (chance % 2 == 0) {
        chance++;
        Player1(e);
    } else {
        chance++;
        Player2(e);
    }


}

function Player1(e) {
    alert("Player1");
    e.target.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIkiXK3EWg93hQlya0Yc4tABBD18Lu4EqDpUt1oVuoTDkWD7F')";
    if (e.target.classList.contains('box1')) {
        row1++;
        di1++;
        col1++;
    }

    if (e.target.classList.contains('box2')) {
        row1++;
        col2++;
    }

    if (e.target.classList.contains('box3')) {
        row1++;
        di2++;
        col3++;
    }

    if (e.target.classList.contains('box4')) {
        row2++;
        col1++;
    }

    if (e.target.classList.contains('box5')) {
        row2++;
        di1++;
        di2++;
        col2++;
    }

    if (e.target.classList.contains('box6')) {
        row2++;
        col3++;
    }

    if (e.target.classList.contains('box7')) {
        row3++;
        di2++;
        col1++;
    }

    if (e.target.classList.contains('box8')) {
        row3++;
        col2++;
    }

    if (e.target.classList.contains('box9')) {
        row3++;
        di1++;
        col3++;
    }

    Player1Validate();
}

function Player2(e) {
    alert("Player2");
    e.target.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCYMOCp6QQxU7wrCnutAJIB3KvmikgB_KjWcw3XX0RX8JYYkXA')";

    if (e.target.classList.contains('box1')) {
        srow1++;
        sdi1++;
        scol1++;
    }

    if (e.target.classList.contains('box2')) {
        srow1++;
        scol2++;
    }

    if (e.target.classList.contains('box3')) {
        srow1++;
        sdi2++;
        scol3++;
    }

    if (e.target.classList.contains('box4')) {
        srow2++;
        scol1++;
    }

    if (e.target.classList.contains('box5')) {
        srow2++;
        sdi1++;
        sdi2++;
        scol2++;
    }

    if (e.target.classList.contains('box6')) {
        srow2++;
        scol3++;
    }

    if (e.target.classList.contains('box7')) {
        srow3++;
        sdi2++;
        scol1++;
    }

    if (e.target.classList.contains('box8')) {
        srow3++;
        scol2++;
    }

    if (e.target.classList.contains('box9')) {
        srow3++;
        sdi1++;
        scol3++;
    }

    Player2Validate();
}

function Player1Validate() {
    if (row1 == 3 || row2 == 3 || row3 == 3) {
        alert("Player 1 has won the game");
    }

    if (col1 == 3 || col2 == 3 || col3 == 3) {
        alert("Player 1 has won the game");
    }

    if (di1 == 3 || di2 == 3) {
        alert("Player 1 has won the game");
    }
}

function Player2Validate() {
    if (srow1 == 3 || srow2 == 3 || srow3 == 3) {
        alert("Player 2 has won the game");
    }

    if (scol1 == 3 || scol2 == 3 || scol3 == 3) {
        alert("Player 2 has won the game");
    }

    if (sdi1 == 3 || sdi2 == 3) {
        alert("Player 2 has won the game");
    }
}

function func() {
    const obj = new mojs.Burst({
        radius: {
            0: 40,
            easing: 'elastic.out'
        },
        angle: {
            0: 90,
            easing: 'cubic.out'
        },
        top: 0,
        left: 0,
        count: 15,
        children: {
            shape: 'line',
            points: 20,
            radius: {
                0: 40,
                easing: 'cubic.out'
            },
            angle: {
                0: 360,
                easing: 'cubic.out'
            },
            stroke: ['white', 'CornflowerBlue'],
            strokeWidth: 1,
            fill: 'none',

        }
    });

    window.addEventListener('click', function (event) {
        obj
            .tune({
                x: event.pageX,
                y: event.pageY
            })
            .replay()
            .generate();
    });
}
