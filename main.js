/*todo:

2.print attack details in html
3.prevent character respawn after KO
4.add reset game feature
5.style progress bars
6.fade attack buttons when disabled
1.Since there aren't enough gifs for each character animation each attack style will be pieced together using a sprite stylesheet and the steps() funciton in css
6.center buttons
4.add media query for attack animation so that when screen is a certain size characters don't pass each other

DONE:
1.toggle sprite images
*/

const attackBtn   = document.getElementById('attackbtn');
const goku        = document.getElementById('hero');
const enemy       = document.getElementById('enemy');
const enemyHealth = document.getElementById('healthEnemy');
const gokuAttackSound  = new Audio("strongpunch.mp3");
const gokuAttackVoice  = new Audio("Goku_attack_yelp.mp3")
const gokuProtectVoice = new Audio("goku_protect_grunt.mp3");
const gokuProtectSound =     new Audio('protect_goku.mp3');
const gokuSlamSound    = new Audio('goku_slam_attack.mp3');
const gokuSlamVoice    = new Audio('goku_slam_voice.mp3');
const powerKick   = new Audio("ryu_kick.mp3");
const ryuKickVoice = new Audio("ryu_kick_voice.mp3");
let controlBtn    = document.querySelectorAll('.herobtn');
let heroDamageAmt = document.getElementById('healthHero');
let heroHealth    = document.getElementById('healthHero');
let consoleLog    = document.getElementById('logger');
const gokuIdle    = "https://piskel-imgstore-b.appspot.com/img/28151c38-85d6-11e8-9ea2-d5f6458d0832.gif";
const gokuAttack  = 'https://piskel-imgstore-b.appspot.com/img/d3d7c533-864e-11e8-a59c-5760cbc9b98b.gif';
const gokuProtect = 'https://piskel-imgstore-b.appspot.com/img/8439b4ab-8652-11e8-a5a6-5760cbc9b98b.gif';
const gokuSlamDunk = 'https://piskel-imgstore-b.appspot.com/img/b2571ae3-86a9-11e8-8773-8bccf7076e95.gif';

const ryuIdle     = 'https://piskel-imgstore-b.appspot.com/img/f3a51f07-85fc-11e8-b892-a5b6aa53e4a8.gif';
const ryuKick     = 'https://piskel-imgstore-b.appspot.com/img/5de4a854-86af-11e8-8e20-8bccf7076e95.gif';



//method by Dr Rudolf Winter @ http://users.aber.ac.uk/ruw/misc/swapimage.php
function toggleSprite(sprite, src1, src2){
    // let sprite = document.getElementById(id);
    let spriteSrc = sprite.src;
    if(spriteSrc === src1){
        sprite.src = src2
    }
    else{
        sprite.src = src1
    }
    sprite.style.height = "220px";
}


function disableMoveset() {
    controlBtn.disabled = true;
    // controlBtn.classList.add('fade-moveset');
}

function enableMoveset() {
    // document.querySelector('.herobtn').disabled = false;
    controlBtn.disabled = false;


}

function defaultGokuSprite(){
    goku.setAttribute('src',gokuIdle);
    goku.style.width = "190px";
    goku.style.height = "220px";

}

function defaultEnemySprite(){
    enemy.setAttribute('src', ryuIdle);
    enemy.style.width = "190px";
    enemy.style.height = "200px";
}

//works but for some reason works on every other click
function attack (id) {
    // console.log(typeof(id))
    disableMoveset();
    //animation
    toggleSprite(goku,gokuIdle, gokuAttack);
    goku.style.height = "250px";
    goku.style.width = "250px";

    //sound-effect

    gokuAttackVoice.play();
    gokuAttackSound.play();
    //damage dealt to enemy
    enemyHealth.value -= 100;
    logStatus("attackbtn");
    console.log(enemyHealth);
    enemyReturnsAttack();
    setTimeout(defaultGokuSprite, 800);

}

function protect (id) {
    // console.log(typeof(id))
    disableMoveset();
    //animation
    toggleSprite(goku,gokuIdle, gokuProtect);
    goku.style.width = "220px";

    //sound-effect
    gokuProtectSound.play();
    gokuProtectVoice.play();
    //damage dealt to enemy
    logStatus("protectbtn");
    console.log(enemyHealth);
    enemyReturnsAttack();
    setTimeout(defaultGokuSprite, 800);

}

function slamDunk (id) {
    // console.log(typeof(id))
    disableMoveset();
    //animation
    toggleSprite(goku,gokuIdle, gokuSlamDunk);
    goku.style.height = "260px";
    goku.style.width = "260px";

    //sound-effect
    gokuSlamVoice.play();
    gokuSlamSound.play();
   
    //damage dealt to enemy
    enemyHealth.value -= 850;
    logStatus("slambtn");
    console.log(enemyHealth);
    enemyReturnsAttack();
    setTimeout(defaultGokuSprite, 800);

}

//enemy returns attack
function enemyReturnsAttack() {

    setTimeout(enemyAutoAttack, 3000);

    
    //define enemy attacks
    function enemyAutoAttack() {

        toggleSprite(enemy, ryuIdle, ryuKick)
        powerKick.play()
        ryuKickVoice.play();
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

// function whichButtonClicked(){

// }

function logStatus(e){
    let paragraph = document.createElement("p");
    switch (e) {
      case 'attackBtn':  
        paragraph.innerHTML.createTextContent = "Goku attacked!"
        break;
      case 'protectBtn':
        paragraph.innerHTML.createTextNode = "Goku protect himself!"
        break;
      case 'slamBtn' :
        paragraph.innerHTML.createTextNode = "Goku used Slam Dunk!!"
        break;
      case 'kamehamehabtn':
        paragraph.innerHTML.createTextNode = "Goku used KamehameHAAAAA!!!"
        break;     
    default:
        paragraph.innerHTML.createTextNode = "What will Goku do?";
        break;  
 };
 document.getElementById('logger').appendChild(paragraph);
}

function heroLost(){
        disableMoveset();
        console.log('Goku lost!');
        console.log('Goku fainted!')
        goku.classList.add('fainted');
        gameReset();
}

function enemyLost(){
    disableMoveset();
    enemy.classList.add('fainted');
    gameReset();
}

function gameReset(){

}