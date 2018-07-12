const attackBtn   = document.getElementById('attackbtn');
const goku        = document.getElementById('hero');
const enemy       = document.getElementById('enemy');
const heroHealth  = document.getElementById('healthHero');
const enemyHealth = document.getElementById('healthEnemy');
const heroDamageAmt = document.getElementById('healthHero');
const gokuAttackSound  = new Audio("strongpunch.mp3");
const powerKick = new Audio("straight_punch.mp3");

function disableMoveset() {
    document.querySelector('.herobtn').disabled = true;
}

function enableMoveset() {
    document.querySelector('.herobtn').disabled = false;

}

function defaultGokuSprite(){
    goku.setAttribute('src','https://piskel-imgstore-b.appspot.com/img/28151c38-85d6-11e8-9ea2-d5f6458d0832.gif');
    goku.style.width = "220px";

}

function defaultEnemySprite(){
    enemy.setAttribute('src', 'https://i.imgur.com/yGp0EuO.gif');
    enemy.style.width = "190px";
}

//works but for some reason works on every other click
function attack () {

    disableMoveset();
    //animation
    goku.classList.toggle('hero-attacking');
    goku.setAttribute('src', 'https://piskel-imgstore-b.appspot.com/img/3a713d0c-85d7-11e8-935d-d5f6458d0832.gif');
    goku.style.width = "280px"
    //sound-effect
    gokuAttackSound.play();

    //damage dealt to enemy
    enemyHealth.value -= 50;

    // enemyHealth.innerHTML.value = enemyHealth.value;

    enemyReturnsAttack();
    setTimeout(defaultGokuSprite, 1000);

}

//enemy returns attack
function enemyReturnsAttack() {

    setTimeout(enemyAutoAttack, 3000);


    //define enemy attacks
    function enemyAutoAttack() {

        enemy.removeAttribute('src', 'https://i.imgur.com/yGp0EuO.gif');

        enemy.classList.toggle('enemy-attacking');
        enemy.setAttribute('src', 'https://piskel-imgstore-b.appspot.com/img/dc880730-85df-11e8-b0d9-a3b55f4cb580.gif');
        enemy.style.width = "500px";
 powerKick.play();
        heroDamageAmt.value -= 150;
        enableMoveset();
        setTimeout(defaultEnemySprite, 2000);
    }
}
