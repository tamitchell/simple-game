const attackBtn   = document.getElementById('attackbtn');
const goku        = document.getElementById('hero');
const enemy       = document.getElementById('enemy');
const enemyHealth = document.getElementById('healthEnemy');
const gokuAttackSound  = new Audio("strongpunch.mp3");
const powerKick = new Audio("straight_punch.mp3");
let controlBtn    = document.querySelectorAll('.herobtn');
let heroDamageAmt = document.getElementById('healthHero');
let heroHealth    = document.getElementById('healthHero');
let consoleLog    = document.getElementById('logger');




//method by Dr Rudolf Winter @ http://users.aber.ac.uk/ruw/misc/swapimage.php
// function toggleSprite(id, original, second){
//     let imageName = id
//     let imgSource = id.src;
//     if(imgSource === original){
//         imageName.removeAttribute('src', original);
//         imageName.setAttribute('src', second);
//     }
//     else{
//         imageName.removeAttribute('src', second);
//         imageName.setAttribute('src', original);
//     }
// }


function disableMoveset() {
    controlBtn.disabled = true;
    // controlBtn.classList.add('fade-moveset');
}

function enableMoveset() {
    document.querySelector('.herobtn').disabled = false;

}

function defaultGokuSprite(){
    goku.setAttribute('src','https://piskel-imgstore-b.appspot.com/img/28151c38-85d6-11e8-9ea2-d5f6458d0832.gif');
    goku.style.width = "220px";

}

function defaultEnemySprite(){
    enemy.setAttribute('src', 'https://piskel-imgstore-b.appspot.com/img/f3a51f07-85fc-11e8-b892-a5b6aa53e4a8.gif');
    enemy.style.width = "190px";
}

//works but for some reason works on every other click
function attack () {

    disableMoveset();
    //animation
    // toggleSprite('hero','https://piskel-imgstore-b.appspot.com/img/28151c38-85d6-11e8-9ea2-d5f6458d0832.gif','https://piskel-imgstore-b.appspot.com/img/17a15dc0-85fa-11e8-8f8b-a5b6aa53e4a8.gif');
    //sound-effect
    gokuAttackSound.play();
    //damage dealt to enemy
    heroHealth = enemyHealth.value -= 50;
    logStatus();
    console.log(heroHealth);
    enemyReturnsAttack();
    setTimeout(defaultGokuSprite, 2000);

}

//enemy returns attack
function enemyReturnsAttack() {

    setTimeout(enemyAutoAttack, 5000);


    //define enemy attacks
    function enemyAutoAttack() {

        enemy.removeAttribute('src', 'https://piskel-imgstore-b.appspot.com/img/f3a51f07-85fc-11e8-b892-a5b6aa53e4a8.gif');
        enemy.setAttribute('src', 'https://piskel-imgstore-b.appspot.com/img/5be59fa1-85fa-11e8-85ec-a5b6aa53e4a8.gif');
        powerKick.play()
        heroHealth = heroDamageAmt.value -= 550;
        console.log(heroHealth);
        
        checkHp();
        setTimeout(defaultEnemySprite, 2000);
        enableMoveset();

    }
}

//this function checks to see the value of each character's Health to determine whether or not one has reached 0HP
function checkHp(){
    console.log('Checking User HP...');

    if(heroHealth <= 0){
        setTimeout(heroLost, 4000)
    }

    else if(enemyHealth <= 0){
       setTimeout(enemyLost, 4000);
    } 
    else {
        return console.log('So good so far...');
    }
}

function logStatus(){
 switch (attackBtn) {
     default:
        consoleLog.innerHTML = "What will Goku do?";
        break;
      case 1:  
        consoleLog.innerHTML = "Goku attacked!"
        break;
 }
}

function heroLost(event){
        disableMoveset();
        console.log('Goku lost!');
        console.log('Goku fainted!')
        goku.classList.add('fainted');
        event.preventDefault();
        gameReset();
}

function enemyLost(){
    disableMoveset();
    enemy.classList.add('fainted');
    gameReset();
}

function gameReset(){

}