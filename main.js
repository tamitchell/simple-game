const attackBtn   = document.getElementById('attackbtn');
const goku        = document.getElementById('hero');
const heroHealth  = document.getElementById('healthHero');
const enemyHealth = document.getElementById('healthEnemy');
const gokuAttackSound  = new Audio("strongpunch.mp3");


//    attackEnemy(enemyReturnsAttack());

function disableMoveset() {
    document.querySelector('.herobtn').disabled = true;
}

//works but for some reason works on every other click
function attack () {
    disableMoveset();
    //animation
    goku.classList.toggle('hero-attacking');

    //sound-effect
    gokuAttackSound.play();
    //damage dealt to enemy
    enemyHealth.value -= 50;

    // enemyHealth.innerHTML.value = enemyHealth.value;

    enemyReturnsAttack();
}

//enemy returns attack
function enemyReturnsAttack() {

    enemyAutoAttack();


    //define enemy attacks
    function enemyAutoAttack() {

        let moveCharacter = document.querySelector('#enemy');
        moveCharacter.removeAttribute('src', 'https://i.imgur.com/yGp0EuO.gif');


        moveCharacter.setAttribute('src', 'https://piskel-imgstore-b.appspot.com/img/1271386b-853b-11e8-859f-a1429c5c6181.gif');

        moveCharacter.style.width = "500px";

        moveCharacter.style.transform = "scaleX(-1)"

        let heroDamageAmt = document.getElementById('healthHero').value -= 150;

    }
}
